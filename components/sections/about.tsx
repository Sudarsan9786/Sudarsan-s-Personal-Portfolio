'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Zap, Users, Target } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Years of Experience', value: '2+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies Mastered', value: '15+' },
    { label: 'Happy Clients', value: '10+' },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Frontend Excellence',
      description: 'Specializing in React, Next.js, and TypeScript to create beautiful, responsive, and interactive user interfaces.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and excellent user experience with modern web technologies.',
    },
    {
      icon: Users,
      title: 'Full Stack',
      description: 'Building end-to-end solutions from frontend interfaces to backend APIs and database design.',
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analyzing complex requirements and delivering innovative solutions that meet business objectives.',
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
      id="about"
      title="About Me"
      // subtitle="Passionate about creating exceptional digital experiences"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-12"
      >
        {/* Bio */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-4">
            I'm a passionate Full Stack Developer with over 2 years of experience building
            modern, scalable web applications. I specialize in creating beautiful, performant, and
            accessible user interfaces with a strong focus on frontend development using React, Next.js, and TypeScript.
          </p>
          <p className="text-lg text-muted-foreground">
            My expertise spans the entire development stack, from crafting pixel-perfect user interfaces to 
            building robust backend systems. I'm committed to writing clean, maintainable code and following 
            industry best practices to deliver exceptional user experiences and scalable solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </motion.div>
    </Section>
  );
}

