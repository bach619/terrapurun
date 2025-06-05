"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Heart, Users } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'default' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'default', ...props }) => {
  const base =
    variant === 'outline'
      ? 'border border-current bg-transparent text-white hover:bg-white hover:text-green-800'
      : 'bg-yellow-400 text-green-900 hover:bg-white';
  return (
    <button
      className={`inline-flex items-center justify-center rounded px-6 py-3 font-semibold transition ${base} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-green-800 to-green-600" />
        <div className="container relative text-center z-10 max-w-4xl px-4">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Conservation Mission
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Protecting vital peatland ecosystems through sustainable practices and community empowerment.
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Our Vision for the Future
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We envision a world where peatlands are valued, protected, and sustainably managed, serving as vital carbon sinks while supporting local communities through traditional crafts and sustainable livelihoods.
              </p>
              <div className="space-y-4 text-left">
                {[
                  {
                    icon: <Leaf className="h-6 w-6 text-green-600" />,
                    title: 'Environmental Stewardship',
                    desc: 'Preserving peatlands as critical carbon sinks and biodiversity hotspots through sustainable management practices.',
                  },
                  {
                    icon: <Heart className="h-6 w-6 text-green-600" />,
                    title: 'Cultural Preservation',
                    desc: 'Keeping traditional purun crafting alive while adapting it for modern ecological solutions.',
                  },
                  {
                    icon: <Users className="h-6 w-6 text-green-600" />,
                    title: 'Community Empowerment',
                    desc: 'Creating sustainable economic opportunities for local communities through eco-friendly product development.',
                  },
                ].map(({ icon, title, desc }, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">{icon}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{title}</h3>
                      <p className="text-gray-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mx-auto lg:mx-0 max-w-md lg:max-w-none">
              <Image
                src="https://www.mongabay.co.id/wp-content/uploads/2019/05/Purun-dianyam-lalu-dijadikan-berbagai-kerajinan-tangan-bernilai-ekonomi-tinggi-di-Desa-Lubuk-Kertang-Langkat-SUmut-Ayat-S-Karokaro.jpeg"
                alt="Local artisan working with purun"
                fill
                className="object-cover brightness-75"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Conservation Movement</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Support peatland conservation by choosing sustainable purun products. Every purchase contributes to environmental protection and community empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products" passHref legacyBehavior>
              <a>
                <Button className="text-lg">
                  Shop To Support Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </Link>
            <Link href="/get-involved" passHref legacyBehavior>
              <a>
               
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
