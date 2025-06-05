import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ImpactStatProps {
  title: string;
  value: string;
  icon: ReactNode;
}

export default function ImpactStat({ title, value, icon }: ImpactStatProps) {
  return (
    <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6 text-center flex flex-col items-center">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-[#2D5A3D] mb-2">{value}</h3>
        <p className="text-gray-600">{title}</p>
      </CardContent>
    </Card>
  );
}