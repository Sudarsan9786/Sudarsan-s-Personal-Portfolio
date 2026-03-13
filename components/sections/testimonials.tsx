'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Tech Startup',
      company: 'TechCorp',
      content:
        'Working with this developer was a game-changer for our product. The attention to detail and commitment to quality is exceptional. Highly recommended!',
      avatar: '/placeholder-avatar-1.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      company: 'SaaS Company',
      content:
        'The dashboard redesign exceeded our expectations. The performance improvements and modern UI have significantly improved our user satisfaction metrics.',
      avatar: '/placeholder-avatar-2.jpg',
    },
    {
      name: 'Mike Johnson',
      role: 'CTO',
      company: 'Enterprise Solutions',
      content:
        'Professional, reliable, and technically excellent. Delivered on time and within budget. Will definitely work together again on future projects.',
      avatar: '/placeholder-avatar-3.jpg',
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
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <div className="text-sm font-semibold">
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    {/* Uncomment when you have avatars */}
                    {/* <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    /> */}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
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

