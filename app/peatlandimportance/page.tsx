"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Shield, Globe, Users } from "lucide-react";

export default function PeatlandTabs() {
  const [activeTab, setActiveTab] = useState("ecological");

  return (
    <div className="w-full py-16 md:py-24 bg-[#f0fdf4] px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#065f46] text-center mb-4">
            Sustainable Peatlands
          </h1>
          <p className="text-gray-700 text-base md:text-lg text-center max-w-2xl mx-auto">
            Vital for climate balance, biodiversity, and community livelihood — peatlands are Earth's natural carbon vaults. Let's restore and protect them.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("ecological")}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              activeTab === "ecological"
                ? "bg-[#10b981] text-white"
                : "bg-white text-[#065f46] border border-[#10b981]"
            }`}
          >
            Ecological Powerhouse System
          </button>
          <button
            onClick={() => setActiveTab("carbon")}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              activeTab === "carbon"
                ? "bg-[#10b981] text-white"
                : "bg-white text-[#065f46] border border-[#10b981]"
            }`}
          >
            Global Carbon Distribution Matrix
          </button>
          <button
            onClick={() => setActiveTab("why")}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              activeTab === "why"
                ? "bg-[#10b981] text-white"
                : "bg-white text-[#065f46] border border-[#10b981]"
            }`}
          >
            Why Peatlands Matter More Than Ever
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "ecological" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              <TabCard
                icon={Shield}
                title="Carbon Sequestration 2.0"
                stats={["100x Forest Efficiency", "Millennial Storage"]}
              >
                Peatlands sequester CO₂ through advanced phytochemical processes, locking carbon in dense organic matrices for millennia.
              </TabCard>
              <TabCard
                icon={Leaf}
                title="Biodiversity Nexus"
                stats={["40% Endemic Species", "92% Survival Rate"]}
              >
                Complex ecosystem supports rare flora/fauna through symbiotic relationships and evolutionary adaptation systems.
              </TabCard>
              <TabCard
                icon={Users}
                title="Community Interface"
                stats={["350+ Household", "200 Traditional Crafts"]}
              >
                Sustainable livelihood matrix supporting indigenous knowledge systems and eco-friendly economic models.
              </TabCard>
            </div>
          )}

          {activeTab === "carbon" && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
              <div className="lg:col-span-3 relative flex items-center justify-center min-h-[250px]">
                <div className="absolute inset-0 bg-[url('/carbon-grid.png')] bg-contain bg-no-repeat opacity-10" />
                <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6 w-full max-w-md lg:max-w-none">
                  <ProgressBar percentage={42} label="Peatlands" />
                  <ProgressBar percentage={28} label="Forests" />
                  <ProgressBar percentage={18} label="Oceans" />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-4 md:space-y-6">
                <DataFlow label="Annual Carbon Capture" value="0.37 GT" trend="+1.2%" />
                <DataFlow label="Emission Prevention" value="1.8 GT" trend="-4.7%" />
                <DataFlow label="Restoration Progress" value="38%" trend="+12.3%" />
              </div>
            </div>
          )}

          {activeTab === "why" && (
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#059669] mb-6">
                Why Peatlands Matter More Than Ever
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
               Peatlands are far from wastelands; they are vital ecosystems providing irreplaceable services. Though they cover a mere 3% of Earth's land surface, these remarkable environments store more carbon than all the world's forests combined, acting as crucial natural climate regulators. Beyond their carbon storage capacity, peatlands serve as natural flood buffers, critical havens for unique biodiversity, and hold deep cultural significance for many communities. Yet, despite their immense value, they remain among the most threatened ecosystems on our planet, facing severe degradation from drainage for agriculture and development, unsustainable extraction, deforestation, and the escalating impacts of climate change. The continued destruction of peatlands has profound and far-reaching consequences for global climate stability, biodiversity conservation, and human well-being. Recognizing their true worth and urgently prioritizing their conservation and restoration is not just an environmental imperative, but an essential investment in a healthier, more resilient, and sustainable future for all.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Understanding their value isn't enough — it's time we restore, protect, and integrate peatlands into our global climate strategy. Investing in peatlands means securing a livable future. 
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const TabCard = ({ icon: Icon, title, children, stats }) => (
  <motion.div 
    className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white to-[#f0fdf4] border border-[#10b981]/30"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-4 flex justify-center">
      <div className="p-3 rounded-xl bg-[#10b981]/20">
        <Icon className="w-10 h-10 text-[#059669]" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-[#059669] mb-3 text-center">{title}</h3>
    <div className="mb-4 flex gap-2 flex-wrap justify-center">
      {stats.map((stat, i) => (
        <span key={i} className="px-3 py-1 bg-[#10b981]/20 rounded-full text-sm text-[#047857]">
          {stat}
        </span>
      ))}
    </div>
    <p className="text-gray-700 text-center text-sm">{children}</p>
  </motion.div>
);

const ProgressBar = ({ percentage, label }) => (
  <div className="space-y-1 w-full">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium text-[#047857]">{label}</span>
      <span className="text-sm text-[#047857]">{percentage}%</span>
    </div>
    <div className="w-full h-3 bg-[#d1fae5] rounded-full">
      <motion.div
        className="h-3 bg-[#10b981] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </div>
  </div>
);

const DataFlow = ({ label, value, trend }) => (
  <motion.div 
    className="p-3 md:p-4 rounded-xl bg-[#ecfdf5] border border-[#10b981]/30"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-xs md:text-sm text-[#047857] uppercase mb-2">{label}</div>
    <div className="text-lg md:text-xl text-[#059669] font-bold">{value}</div>
    <div className="text-xs md:text-sm text-[#10b981]">{trend}</div>
  </motion.div>
);