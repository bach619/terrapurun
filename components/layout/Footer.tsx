'use client';

import React from "react";
import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-[#2D5A3D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-12 w-12" />
              <span className="font-playfair text-xl font-bold">Terrapurun</span>
            </div>
            <p className="text-sm">
              Protecting peatlands through sustainable purun products and community empowerment.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="hover:text-[#F4D03F] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://facebook.com" className="hover:text-[#F4D03F] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-[#F4D03F] transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

        
          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} />
                <span>info@terrapurun.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Jl. Jl. Transito Sei RT.11 RW.04, Kuala Kapuas, Central Kalimantan, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Newsletter + Payment */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Join Our Newsletter</h3>
            <p className="text-sm mb-4">
              Get updates on conservation efforts and gardening tips.
            </p>
            <div className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-0 placeholder:text-white/60"
              />
              <Button className="bg-[#F4D03F] text-[#2D5A3D] hover:bg-white">
                Subscribe
              </Button>
            </div>

            {/* Payment Logos */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-white/80">We Accept</h4>
              <div className="flex flex-wrap items-center gap-3">
                {[
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Logo-png-transparent-deanasrass199-nl3095949393-%28%C3%A0ss.png/960px-Logo-png-transparent-deanasrass199-nl3095949393-%28%C3%A0ss.png?20250329034455",
                    alt: "PayPal",
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/512px-Visa_2021.svg.png?20240313022811",
                    alt: "Visa",
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/640px-Mastercard_2019_logo.svg.png",
                    alt: "MasterCard",
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Discover_Card_logo.png?20160209033430",
                    alt: "Discover",
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/250px-American_Express_logo_%282018%29.svg.png",
                    alt: "American Express",
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Wiretransfer.png?20240210075358",
                    alt: "Wire Transfer",
                  },
                ].map((logo, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-md p-3 flex items-center justify-center"
                    style={{ width: '150px', height: '45px' }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6">
          <div className="text-center text-sm text-white">
            © {new Date().getFullYear()} Terrapurun. All rights reserved. Developed by Boby Mihing.
          </div>
        </div>
      </div>
    </footer>
  );
}