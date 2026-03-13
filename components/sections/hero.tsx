'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? 'visible' : 'hidden'}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-block mb-6"
            >
              {/* Profile Picture - Add your image to /public/profile.jpg */}
              {/* Uncomment when you have a profile picture:
              <Image
                src="/profile.jpg"
                alt="Sudarsan Perumal V"
                width={128}
                height={128}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                priority
              />
              */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center text-4xl md:text-5xl font-bold text-primary-foreground">
                SP
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
          >
            Sudarsan Perumal V
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-4"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Building modern, scalable web applications with expertise in React, Next.js, and TypeScript. 
            Creating beautiful, performant, and accessible user experiences for enterprise applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center items-center mb-12"
          >
            <a
              href="mailto:sudarsanv8786@gmail.com"
              className="p-3 rounded-lg hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Send email"
            >
              <Mail className="h-6 w-6" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <button
              onClick={() => scrollToSection('#about')}
              className="p-2 rounded-full hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 animate-bounce"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-6 w-6" aria-hidden="true" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

