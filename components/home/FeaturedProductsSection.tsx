"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/lib/data';

export default function FeaturedProductsSection() {
  // Get first 3 products from the products array
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-16 bg-[#e3fceb] w-full">
      <div className="container text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-4">
          Eco-Friendly Products
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-12">
          Our handcrafted purun products combine traditional craftsmanship with ecological benefits, 
          offering sustainable alternatives that support both communities and ecosystems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-playfair text-xl font-bold text-[#2D5A3D] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex flex-col items-center gap-4">
                  <span className="text-lg font-semibold">
                    ${product.price.toFixed(2)}
                  </span>
                  <Link href={`/products#${product.slug}`}>
                    <Button variant="outline" className="border-[#2D5A3D] text-[#2D5A3D] hover:bg-[#2D5A3D] hover:text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10">
          <Link href="/products">
            <Button className="bg-[#2D5A3D] hover:bg-[#4A7C3C]">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}