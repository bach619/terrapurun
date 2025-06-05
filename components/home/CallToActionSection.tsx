"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-[#2D5A3D] text-white w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Join Our Conservation Movement
          </h2>
          <p className="mb-8 text-lg">
            Help us protect vital peatland ecosystems while supporting sustainable livelihoods. 
            Every purchase makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button className="bg-[#F4D03F] text-[#2D5A3D] hover:bg-white px-8 py-6 text-lg">
                Shop To Support
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-white text-black hover:bg-white hover:text-black px-8 py-6 text-lg">
                Learn More About Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}