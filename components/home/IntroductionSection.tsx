"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, Heart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { communityPrograms } from '@/lib/data';

export default function IntroductionSection() {
  return (
    <section className="py-16 bg-[#e3fceb] w-full">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-6">
              Empowering Communities, Preserving Nature
            </h2>
            <p className="text-gray-700 mb-6">
              Our mission goes beyond environmental conservation. We're building sustainable 
              livelihoods and stronger communities through fair trade practices and skill development.
            </p>
            
            {/* Community Impact Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Users className="h-8 w-8 text-[#2D5A3D] mb-2" />
                <h3 className="font-bold text-lg mb-2">Skills Development</h3>
                <p className="text-sm text-gray-600">
                  Advanced training programs empowering artisans with new skills and opportunities.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <TrendingUp className="h-8 w-8 text-[#2D5A3D] mb-2" />
                <h3 className="font-bold text-lg mb-2">Economic Growth</h3>
                <p className="text-sm text-gray-600">
                  45% average income increase for participating families.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/about">
                <Button className="bg-[#2D5A3D] hover:bg-[#4A7C3C]">
                  Learn About Our Impact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/join">
                <Button variant="outline" className="border-[#2D5A3D] text-[#2D5A3D]">
                  Join Our Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Community Programs Showcase */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-[#2D5A3D] mb-4">
              Current Community Programs
            </h3>
            {communityPrograms.map((program) => (
              <div key={program.id} className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-2">{program.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{program.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#2D5A3D] font-medium">{program.impact}</span>
                  <span className="text-gray-500">{program.participants} participants</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}