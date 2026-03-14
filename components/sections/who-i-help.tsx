'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Rocket, Building2, Briefcase } from 'lucide-react';

export function WhoIHelp() {
  const helpItems = [
    {
      icon: Rocket,
      title: 'Startups',
      description: 'Build SaaS dashboards',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Building2,
      title: 'Businesses',
      description: 'Create high-performance websites',
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Briefcase,
      title: 'Founders',
      description: 'Launch modern landing pages',
      color: 'from-orange-500/20 to-red-500/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Section
      id="who-i-help"
      title="I help:"
      subtitle="Transforming ideas into powerful digital solutions"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {helpItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 group">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

