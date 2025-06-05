import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import IntroductionSection from '@/components/home/IntroductionSection';
import ImpactStatsSection from '@/components/home/ImpactStatsSection';
import FeaturedProductsSection from '@/components/home/FeaturedProductsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CallToActionSection from '@/components/home/CallToActionSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Full width with dark overlay */}
      <section className="w-full">
        <HeroSection />
      </section>

      {/* Introduction Section - Light cream background */}
      <section className="w-full bg-[#e3fceb]">
        <div className="container mx-auto px-4">
          <IntroductionSection />
        </div>
      </section>

      {/* Impact Stats Section - White background */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4">
          <ImpactStatsSection />
        </div>
      </section>

      {/* Featured Products Section - Light cream background */}
      <section className="w-full bg-[#e3fceb]">
        <div className="container mx-auto px-4">
          <FeaturedProductsSection />
        </div>
      </section>

      {/* Testimonials Section - White background */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4">
          <TestimonialsSection />
        </div>
      </section>

      {/* Call to Action Section - Green background */}
      <section className="w-full">
        <CallToActionSection />
      </section>
    </div>
  );
}