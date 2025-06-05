"use client";

import React from 'react';
import { Award, Users, Recycle, ShoppingBag } from 'lucide-react';
import { impactStats } from '@/lib/data';
import ImpactStat from '@/components/home/ImpactStat';

export default function ImpactStatsSection() {
  return (
    <section className="py-16 bg-white w-full">
      <div className="container text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-12">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat) => (
            <ImpactStat
              key={stat.id}
              title={stat.title}
              value={stat.value}
              icon={
                stat.icon === 'award' ? <Award className="h-10 w-10 text-[#F4D03F]" /> :
                stat.icon === 'users' ? <Users className="h-10 w-10 text-[#F4D03F]" /> :
                stat.icon === 'recycle' ? <Recycle className="h-10 w-10 text-[#F4D03F]" /> :
                <ShoppingBag className="h-10 w-10 text-[#F4D03F]" />
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}