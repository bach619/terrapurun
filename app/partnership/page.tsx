"use client";

import React from "react";
import { Handshake, ShieldCheck } from "lucide-react";

export default function Partnership() {
  return (
    <section className="w-full py-16 md:py-20 bg-white px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#065f46] mb-6">
          Coordinated by Official Institutions
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10">
          All activities under the <strong>Puruncraft</strong> initiative are coordinated by
          <span className="text-[#059669] font-semibold"> KPHL Kapuas Kahayan</span> and
          <span className="text-[#059669] font-semibold"> PSDKT Civil Organization</span>, 
          representing a synergy between environmental conservation and local community empowerment.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <PartnershipCard
            icon={ShieldCheck}
            title="KPHL Kapuas Kahayan"
            description="An official forest management institution that supports restoration and conservation efforts of the purun ecosystem through community-based empowerment."
          />
          <PartnershipCard
            icon={Handshake}
            title="PSDKT Civil Organization"
            description="A community organization that promotes creative rural economic collaboration with a strong and sustainable local approach."
          />
        </div>
      </div>
    </section>
  );
}

const PartnershipCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-[#f0fdf4] p-6 rounded-xl border border-[#10b981]/30 w-full shadow hover:shadow-md transition-all">
    <div className="flex items-center gap-4 mb-4 justify-center">
      <div className="p-3 rounded-xl bg-[#bbf7d0] text-[#047857]">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-[#065f46]">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 text-center">{description}</p>
  </div>
);
