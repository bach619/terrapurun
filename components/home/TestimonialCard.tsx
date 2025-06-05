import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export default function TestimonialCard({ name, role, content, avatar }: TestimonialCardProps) {
  return (
    <Card className="bg-white border-none shadow-lg h-full flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col items-center text-center">
        <QuoteIcon className="h-8 w-8 text-[#F4D03F] mb-4" />
        
        <p className="text-gray-700 flex-1 mb-6">
          "{content}"
        </p>
        
        <div className="flex flex-col items-center mt-auto">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mb-3">
            <Image 
              src={avatar} 
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-[#2D5A3D]">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}