'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Leaf, Shield, Users, Flame, TreePine, Recycle, Heart, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function EnvironmentalBenefitsPage() {
  const router = useRouter();

  const handleShopNow = () => {
    router.push('/products');
  };

  const handleLearnMore = () => {
    router.push('/about');
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-[#2D5A3D] mb-6">
            Environmental Benefits
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Discover how our sustainable purun products contribute to peatland conservation 
            and help prevent devastating fires that threaten our planet's most critical ecosystems.
          </p>
        </div>

        {/* Fire Prevention Hero */}
        <section className="mb-20 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Flame className="h-8 w-8 text-red-500 mr-3" />
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2D5A3D]">
                    Preventing Peatland Fires
                  </h2>
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Peatland fires are one of the greatest environmental threats to our planet. 
                  When peat burns, it releases massive amounts of stored carbon—sometimes 
                  equivalent to decades of fossil fuel emissions from entire countries.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-xl text-red-600 mb-4">Critical Facts:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Peatlands store 30% of global soil carbon on just 3% of land surface
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      A single large peat fire can release as much CO₂ as entire countries produce annually
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Dried peatlands are 10x more vulnerable to catastrophic fires
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
                  <div className="text-center">
                    <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="font-bold text-2xl text-[#2D5A3D] mb-4">Our Protection Strategy</h3>
                    <p className="text-gray-700">
                      By sustainably harvesting purun and maintaining healthy water levels, 
                      we keep peatlands wet and fire-resistant while creating economic value 
                      for local communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Purun Product Benefits */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-6">
              Why Choose Purun Products?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every purun product you choose makes a direct impact on environmental conservation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Recycle className="h-8 w-8 text-green-600" />,
                title: "100% Biodegradable",
                description: "Decomposes naturally within 12-24 months, enriching soil without leaving microplastics",
                stats: "vs. 450+ years for plastic"
              },
              {
                icon: <Leaf className="h-8 w-8 text-green-600" />,
                title: "Carbon Negative",
                description: "Production actually removes CO₂ from atmosphere while preventing peat fire emissions",
                stats: "Net -2.5kg CO₂ per product"
              },
              {
                icon: <TreePine className="h-8 w-8 text-green-600" />,
                title: "Ecosystem Preservation",
                description: "Sustainable harvesting maintains peatland integrity and biodiversity",
                stats: "5,370+ hectares protected"
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Fire Prevention",
                description: "Keeps peatlands wet and healthy, dramatically reducing fire risk",
                stats: "85% fire risk reduction"
              },
              {
                icon: <Users className="h-8 w-8 text-purple-600" />,
                title: "Community Empowerment",
                description: "Provides sustainable livelihoods that incentivize conservation",
                stats: "500+ families supported"
              },
              {
                icon: <Heart className="h-8 w-8 text-red-500" />,
                title: "Health Benefits",
                description: "Non-toxic, chemical-free products safe for families and environment",
                stats: "Zero harmful chemicals"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-xl text-[#2D5A3D] mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="bg-[#e3fceb] text-[#2D5A3D] px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    {benefit.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Impact */}
        <section className="mb-20 bg-[#e3fceb] rounded-3xl p-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-[#2D5A3D] mx-auto mb-4" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-6">
                Community-Driven Conservation
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Local communities are the true guardians of peatlands. Our approach creates 
                economic incentives that make conservation more profitable than destruction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-xl text-[#2D5A3D] mb-4">
                    🔥 Traditional Challenges
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Slash-and-burn agriculture dries out peatlands</li>
                    <li>• Economic pressure leads to unsustainable practices</li>
                    <li>• Lack of alternative income sources</li>
                    <li>• Limited awareness of fire prevention methods</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-xl text-[#2D5A3D] mb-4">
                    🌱 Our Solution
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Sustainable purun harvesting provides steady income</li>
                    <li>• Water management training prevents peat drying</li>
                    <li>• Fire prevention education and equipment</li>
                    <li>• Long-term partnerships with local communities</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="font-bold text-2xl text-[#2D5A3D] mb-8 text-center">
                  Community Impact Metrics
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#2D5A3D] mb-2">500+</div>
                    <p className="text-gray-700 text-sm">Families Employed</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#2D5A3D] mb-2">15</div>
                    <p className="text-gray-700 text-sm">Villages Participating</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#2D5A3D] mb-2">85%</div>
                    <p className="text-gray-700 text-sm">Fire Risk Reduction</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#2D5A3D] mb-2">$2.5M</div>
                    <p className="text-gray-700 text-sm">Community Income Generated</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <p className="text-center text-[#2D5A3D] font-semibold">
                    "When communities thrive, peatlands survive."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact Stats */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-[#2D5A3D] mx-auto mb-4" />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-6">
              Measurable Environmental Impact
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every purchase creates tangible environmental benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "1.2M",
                unit: "tons",
                label: "CO₂ Emissions Prevented",
                description: "Through fire prevention and sustainable practices"
              },
              {
                number: "5,370",
                unit: "hectares",
                label: "Peatland Protected",
                description: "Actively managed and fire-resistant areas"
              },
              {
                number: "25,000",
                unit: "kg",
                label: "Plastic Waste Avoided",
                description: "Replaced with biodegradable alternatives"
              },
              {
                number: "75,000",
                unit: "products",
                label: "Sustainable Items Sold",
                description: "Contributing to global plastic reduction"
              }
            ].map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-green-50 to-blue-50 border-none shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-[#2D5A3D] block">
                      {stat.number}
                    </span>
                    <span className="text-lg text-gray-600 font-medium">
                      {stat.unit}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-[#2D5A3D] mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[#2D5A3D] to-[#4A7C3C] rounded-3xl p-12 text-white text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Join the Conservation Movement
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Every purun product you choose helps prevent catastrophic peat fires, 
            supports local communities, and protects one of Earth's most important ecosystems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleShopNow}
              className="bg-[#F4D03F] text-[#2D5A3D] px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors"
            >
              Shop Sustainable Products
            </Button>
            <Button 
              onClick={handleLearnMore}
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#2D5A3D] transition-colors bg-transparent"
            >
              Learn More About Our Mission
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}