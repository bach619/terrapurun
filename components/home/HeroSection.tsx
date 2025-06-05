"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <Image 
          src="https://i0.wp.com/forestsnews.cifor.org/wp-content/uploads/2024/10/Photo-1_Peat-IMPACTS.jpg?resize=832%2C415&ssl=1" 
          alt="Peatland landscape"
          fill
          className="object-cover scale-125 animate-slow-zoom"
          priority
          quality={100}
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-[#F4D03F] font-semibold tracking-wider uppercase text-lg">
            Sustainable Solutions for a Better Future
          </span>
        </motion.div>

        <motion.h1 
          className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-10 text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Protect Peatlands,
          <br />
          <span className="text-[#F4D03F]">Preserve the Future</span>
        </motion.h1>
        
        <motion.p 
          className="text-2xl md:text-3xl mb-14 text-white/90 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join our mission to conserve vital peatland ecosystems through sustainable 
          purun products that empower communities and protect our planet.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/products">
            <Button className="bg-[#F4D03F] text-[#2D5A3D] hover:bg-white px-10 py-8 text-xl min-w-[250px] rounded-full font-semibold transition-transform hover:scale-105">
              Shop Our Products
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" className="border-3 border-white text-white-90 hover:bg-white hover:text-[#2D5A3D] px-10 py-8 text-xl min-w-[250px] rounded-full font-semibold transition-transform hover:scale-105">
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      {/* <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-white/80 text-base tracking-wider">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-8 w-8 text-[#F4D03F]" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}