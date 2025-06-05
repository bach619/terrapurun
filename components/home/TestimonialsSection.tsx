"use client";

import React from 'react';
import { testimonials } from '@/lib/data';
import TestimonialCard from '@/components/home/TestimonialCard';

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white w-full">
      <div className="container text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-12">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
}