'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function CaseStudies() {
  const caseStudies = [
    {
      title: 'Enterprise Dashboard Redesign',
      problem:
        'A legacy dashboard with poor performance, outdated UI, and low user engagement. Users reported slow load times and difficulty finding key metrics.',
      solution:
        'Redesigned the entire dashboard using React and Next.js, implemented server-side rendering for faster initial loads, and created an intuitive data visualization system.',
      implementation: [
        'Migrated from legacy jQuery to React with TypeScript',
        'Implemented Next.js SSR for 60% faster load times',
        'Created reusable component library',
        'Added real-time data updates with WebSockets',
        'Optimized bundle size by 40%',
      ],
      results: [
        '60% reduction in page load time',
        '45% increase in user engagement',
        '30% improvement in task completion rate',
        'Zero critical bugs in production',
      ],
    },
    {
      title: 'E-Commerce Performance Optimization',
      problem:
        'An e-commerce platform experiencing slow checkout flows, high bounce rates, and poor mobile experience leading to lost sales.',
      solution:
        'Implemented code splitting, image optimization, and progressive web app features. Redesigned checkout flow with optimized state management.',
      implementation: [
        'Implemented route-based code splitting',
        'Optimized images with WebP format and lazy loading',
        'Added PWA capabilities for offline support',
        'Refactored state management with Zustand',
        'Implemented skeleton loading states',
      ],
      results: [
        '50% improvement in Core Web Vitals',
        '35% increase in mobile conversions',
        '25% reduction in bounce rate',
        '90+ Lighthouse performance score',
      ],
    },
  ];

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

  return (
    <Section
      id="case-studies"
      title="Case Studies"
      subtitle="Real-world solutions and results"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-12"
      >
        {caseStudies.map((study, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" aria-hidden="true" />
                    Problem
                  </h3>
                  <p className="text-muted-foreground">{study.problem}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" aria-hidden="true" />
                    Solution
                  </h3>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" aria-hidden="true" />
                    Implementation
                  </h3>
                  <ul className="space-y-2">
                    {study.implementation.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" aria-hidden="true" />
                    Results
                  </h3>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

