import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { DarkShowcase } from './components/DarkShowcase';
import { Portfolio } from './components/Portfolio';
import { DataScience } from './components/DataScience';
import { LatestCases } from './components/LatestCases';
import { Pricing } from './components/Pricing';
import { Perks } from './components/Perks';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="font-sans text-gray-900 selection:bg-gray-900 selection:text-white bg-[#f4f5f6]">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <DarkShowcase />
      <Portfolio />
      <DataScience />
      <LatestCases />
      <Pricing />
      <Perks />
      <Footer />
    </main>
  );
}
