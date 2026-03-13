import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Services } from '@/components/sections/services';
import { TechStack } from '@/components/sections/tech-stack';
import { CaseStudies } from '@/components/sections/case-studies';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

