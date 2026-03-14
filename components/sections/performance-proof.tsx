'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Gauge, Search, Shield, Zap, Code2, FileCode } from 'lucide-react';

export function PerformanceProof() {
  const metrics = [
    {
      icon: Gauge,
      title: 'Lighthouse Performance',
      value: '90+',
      description: 'Optimized for speed and performance',
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      value: '100%',
      description: 'Fully optimized for search engines',
    },
    {
      icon: Shield,
      title: 'WCAG Accessible',
      value: 'AAA',
      description: 'WCAG compliant and accessible',
    },
    {
      icon: Zap,
      title: 'Responsive Design',
      value: '100%',
      description: 'Perfect on all devices',
    },
    {
      icon: Code2,
      title: 'Clean Architecture',
      value: '✓',
      description: 'Maintainable and scalable code',
    },
    {
      icon: FileCode,
      title: 'Type Safe Code',
      value: 'TypeScript',
      description: 'Full type safety with TypeScript',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Section
      id="performance"
      title="Built with Performance and Quality in Mind"
      subtitle="Technical excellence in every project"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

