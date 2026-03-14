import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { WhoIHelp } from '@/components/sections/who-i-help';
import { Projects } from '@/components/sections/projects';
import { Services } from '@/components/sections/services';
import { TechStack } from '@/components/sections/tech-stack';
import { PerformanceProof } from '@/components/sections/performance-proof';
import { CaseStudies } from '@/components/sections/case-studies';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import { FreelanceCTA } from '@/components/sections/freelance-cta';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <WhoIHelp />
      <About />
      <Services />
      <TechStack />
      <PerformanceProof />
      <Projects />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <FreelanceCTA />
      <Footer />
    </main>
  );
}

