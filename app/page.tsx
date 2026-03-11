'use client';

import ModernUIWrapper from '@/components/ModernUIWrapper';
import ModernNavigation from '@/components/ModernNavigation';
import ModernHero from '@/components/sections/ModernHero';
import ModernPhilosophy from '@/components/sections/ModernPhilosophy';
import ModernWhoThisIsFor from '@/components/sections/ModernWhoThisIsFor';
import ModernAlignFramework from '@/components/sections/ModernAlignFramework';
import ModernJourney from '@/components/sections/ModernJourney';
import ModernNetwork from '@/components/sections/ModernNetwork';
import ModernOutcomes from '@/components/sections/ModernOutcomes';
import ModernApplication from '@/components/sections/ModernApplication';
import ModernFaculty from '@/components/sections/ModernFaculty';
import ModernFooter from '@/components/sections/ModernFooter';

export default function Home() {
  return (
    <ModernUIWrapper>
      <ModernNavigation />
      <main>
        <ModernHero />
        <ModernPhilosophy />
        <ModernWhoThisIsFor />
         <ModernJourney />
        <ModernAlignFramework />
       
        <ModernNetwork />
        <ModernOutcomes />
        <ModernApplication />
        <ModernFaculty />
        <ModernFooter />
      </main>
    </ModernUIWrapper>
  );
}
