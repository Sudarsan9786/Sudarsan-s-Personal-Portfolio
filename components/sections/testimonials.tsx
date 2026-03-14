'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      content:
        'Working with this developer was a game-changer for our product. The attention to detail and commitment to quality is exceptional. Highly recommended!',
    },
    {
      content:
        'The dashboard redesign exceeded our expectations. The performance improvements and modern UI have significantly improved our user satisfaction metrics.',
    },
    {
      content:
        'Professional, reliable, and technically excellent. Delivered on time and within budget. Will definitely work together again on future projects.',
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
      id="testimonials"
      title="Testimonials"
      subtitle="What clients say about working with me"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" aria-hidden="true" />
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

