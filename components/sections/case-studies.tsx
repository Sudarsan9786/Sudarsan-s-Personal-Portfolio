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
      implementation: 'Next.js, React, Tailwind CSS',
      results: [
        'Lighthouse Performance 95+',
        'SEO Optimized',
        'Mobile Responsive',
      ],
    },
    {
      title: 'E-Commerce Performance Optimization',
      problem:
        'An e-commerce platform experiencing slow checkout flows, high bounce rates, and poor mobile experience leading to lost sales.',
      solution:
        'Implemented code splitting, image optimization, and progressive web app features. Redesigned checkout flow with optimized state management.',
      implementation: 'Next.js, React, Tailwind CSS',
      results: [
        'Lighthouse Performance 95+',
        'SEO Optimized',
        'Mobile Responsive',
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
                  <p className="text-muted-foreground">
                    Technologies used: {study.implementation}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" aria-hidden="true" />
                    Results
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border"
                      >
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                        <span className="text-sm font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

