'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';

export function TechStack() {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'REST APIs', category: 'API' },
    { name: 'Jest', category: 'Testing' },
    { name: 'Cypress', category: 'Testing' },
    { name: 'Git', category: 'Version Control' },
    { name: 'Webpack', category: 'Build Tool' },
    { name: 'Vite', category: 'Build Tool' },
    { name: 'Framer Motion', category: 'Animation' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Section
      id="tech-stack"
      title="Tech Stack"
      subtitle="Technologies and tools I work with"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-6xl mx-auto"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -4 }}
            className="group"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative border border-border rounded-xl bg-card/50 backdrop-blur-sm p-4 h-full flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-default">
                <div className="mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <span className="text-base font-bold text-primary">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="font-semibold text-sm leading-tight mb-1">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.category}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
