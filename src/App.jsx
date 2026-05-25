import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero/Hero';
import { Marquee } from './components/sections/Marquee';
import { Stats } from './components/sections/Stats';
import { DashboardSection } from './components/sections/DashboardSection';
import { Features } from './components/sections/Features';
import { HowItWorks } from './components/sections/HowItWorks';
import { BlacklistStory } from './components/sections/BlacklistStory';
import { Industries } from './components/sections/Industries';
import { NetworkEffect } from './components/sections/NetworkEffect';
import { CTA } from './components/sections/CTA';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <DashboardSection />
        <Features />
        <HowItWorks />
        <BlacklistStory />
        <Industries />
        <NetworkEffect />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
