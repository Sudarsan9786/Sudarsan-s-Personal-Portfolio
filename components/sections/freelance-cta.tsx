'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function FreelanceCTA() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span>Available for Projects</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Let's build a fast, modern and scalable web experience for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="w-full sm:w-auto text-lg px-8 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Start a project"
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="w-full sm:w-auto text-lg px-8 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Contact me"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

