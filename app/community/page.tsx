"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Leaf, Users } from "lucide-react";

export default function PeatlandImportance() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <div className="flex flex-col items-center bg-[#f8fafc]">
      {/* Reimagined Hero Overview */}
      <section className="relative w-full py-24 lg:py-32 bg-gradient-to-b from-green-100 to-green-50">
        <motion.div
          className="absolute inset-0 opacity-20 bg-[url('/pattern.svg')] bg-cover"
          style={{ scale }}
        />
        <div className="relative z-10 container max-w-5xl mx-auto text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-green-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Peatland Ecosystem Overview
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-green-800 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Discover how peatlands serve as natural carbon vaults, biodiversity sanctuaries,
            and life-sustaining ecosystems for local communities.
          </motion.p>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="w-full py-24 bg-green-50">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            className="p-8 rounded-2xl bg-white shadow-xl border border-green-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-green-900 mb-12 text-center">
              Why Peatlands Matter
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-green-50 to-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all"
                  whileHover={{ y: -6 }}
                >
                  <div className="flex justify-center mb-5">
                    <div className="p-4 rounded-full bg-green-100">
                      <feature.icon className="h-10 w-10 text-green-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-green-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-green-800/90 leading-relaxed">
                    {feature.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="w-full relative py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="p-12 rounded-3xl bg-green-900/5 border border-green-100 shadow-inner">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-green-900 mb-10 text-center">
              Global Impact Dashboard
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <StatPanel value="30%" label="Carbon Storage" color="green" />
              <StatPanel value="5X" label="Biodiversity Density" color="emerald" />
              <StatPanel value="1.5B" label="People Supported" color="teal" />
              <StatPanel value="2030" label="Sustainability Goal" color="lime" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Feature cards
const FEATURES = [
  {
    icon: Shield,
    title: "Carbon Lock Technology",
    content:
      "Peatlands securely lock away centuries of carbon, preventing release and contributing to global climate goals.",
  },
  {
    icon: Leaf,
    title: "Biodiversity Reservoir",
    content:
      "These ecosystems host countless species, many of which are found nowhere else, making conservation vital.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    content:
      "Peatlands provide traditional livelihoods and clean water for indigenous and rural communities worldwide.",
  },
];

// Dashboard stat cards
const StatPanel = ({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) => (
  <motion.div
    className="p-6 rounded-xl bg-white hover:shadow-md transition-all text-center"
    whileHover={{ scale: 1.03 }}
  >
    <div className={`text-4xl font-bold mb-2 text-${color}-600`}>{value}</div>
    <div className={`text-lg text-${color}-700/90`}>{label}</div>
  </motion.div>
);
