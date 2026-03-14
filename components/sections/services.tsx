'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Code2,
  Layout,
  Gauge,
  Smartphone,
  Rocket,
  Database,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code2,
      title: 'React Web Applications',
      description:
        'Building modern and scalable frontend applications.',
    },
    {
      icon: Layout,
      title: 'SaaS Dashboard Development',
      description:
        'Designing clean and data-driven dashboards.',
    },
    {
      icon: Smartphone,
      title: 'Landing Page Development',
      description:
        'High converting landing pages for startups.',
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description:
        'Improving page speed and Lighthouse scores.',
    },
    {
      icon: Gauge,
      title: 'UI Implementation from Figma',
      description:
        'Converting designs into production-ready UI.',
    },
    {
      icon: Database,
      title: 'API Integration & Development',
      description:
        'Connecting frontend with backend APIs and third-party services.',
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
      id="services"
      title="Services"
      subtitle="What I can help you build"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">
                    <Icon className="h-10 w-10 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

