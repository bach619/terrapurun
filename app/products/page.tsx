"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { products } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';

export default function ProductsPage() {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  const handleQuantityChange = (productId: number, value: string) => {
    const quantity = parseInt(value) || 1;
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, Math.min(99, quantity))
    }));
  };

  const handleBuy = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      const quantity = quantities[productId];
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image
      });
      router.push('/cart');
    }
  };

  return (
    <div className="pt-24 pb-16 bg-[#F9FAFB]">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#2D5A3D] mb-6">
            Our Sustainable Products
          </h1>
          <p className="text-gray-700">
            Each purun product represents our commitment to environmental conservation 
            and community empowerment. Choose sustainability without compromising quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 md:h-64">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="font-playfair text-xl font-bold text-[#2D5A3D] mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Features:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#F4D03F] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Available Sizes:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <span 
                        key={index}
                        className="text-sm bg-[#e3fceb] text-[#2D5A3D] px-3 py-1 rounded-full"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#2D5A3D]">
                      ${product.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Quantity:</span>
                      <Input
                        type="number"
                        min="1"
                        max="99"
                        value={quantities[product.id]}
                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                        className="w-20 text-center"
                      />
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-[#2D5A3D] hover:bg-[#4A7C3C]"
                    onClick={() => handleBuy(product.id)}
                  >
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}