'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Gauge, Search, Shield, Zap } from 'lucide-react';

export function PerformanceProof() {
  const metrics = [
    {
      icon: Gauge,
      title: 'Google Lighthouse Performance',
      value: '95+',
      description: 'Optimized for speed and performance',
      tool: 'Google Lighthouse',
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      value: '100%',
      description: 'Fully optimized for search engines',
      tool: 'Google PageSpeed Insights',
    },
    {
      icon: Shield,
      title: 'WCAG Accessible',
      value: 'AAA',
      description: 'WCAG compliant and accessible',
      tool: 'Accessibility Testing',
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
      title="Performance Proof"
      subtitle="Built with performance, SEO, and accessibility in mind"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
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
                  <p className="text-sm text-muted-foreground mb-4">{metric.description}</p>
                  <div className="text-xs text-muted-foreground border-t border-border pt-4">
                    Verified with {metric.tool}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

