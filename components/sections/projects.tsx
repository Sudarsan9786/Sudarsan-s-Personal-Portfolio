'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Lock, Code2 } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Nool ERP',
      description:
        'A comprehensive Enterprise Resource Planning system built with modern web technologies, featuring inventory management, sales tracking, and business analytics.',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      isDisabled: true,
      disabledMessage: 'This is a private project and is not publicly available.',
      icon: Code2,
      image: '/projects/nool-erp.jpg',
      hasImage: true,
    },
    {
      title: 'Badminton App',
      description:
        'A modern badminton management application with match tracking, player statistics, tournament management, and real-time score updates.',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      isDisabled: true,
      disabledMessage: 'This is a private project and is not publicly available.',
      icon: Code2,
      image: '/projects/badminton-app.jpg',
      hasImage: true,
    },
    {
      title: 'Interior Design Website',
      description:
        'A beautiful and modern interior design portfolio website showcasing design projects, services, and client testimonials with an elegant user interface.',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      isDisabled: true,
      disabledMessage: 'This is a private project and is not publicly available.',
      icon: Code2,
      image: '/projects/interior-design.jpg',
      hasImage: true,
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
      id="projects"
      title="Projects"
      subtitle="Some of my recent work"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`h-full flex flex-col hover:shadow-lg transition-shadow overflow-hidden ${
                  project.isDisabled ? 'opacity-75' : ''
                }`}
              >
                {/* Project Image */}
                {project.hasImage ? (
                  <div className="relative w-full h-48 bg-muted overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      priority={index === 0}
                      placeholder="empty"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                    />
                    {project.isDisabled && (
                      <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                        <Lock className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                ) : (
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      {project.isDisabled && (
                        <Lock className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                      )}
                    </div>
                  </CardHeader>
                )}

                <CardHeader className={project.hasImage ? 'pb-4' : 'pb-4 pt-4'}>
                  {!project.hasImage && (
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      {project.isDisabled && (
                        <Lock className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                      )}
                    </div>
                  )}
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  {project.isDisabled ? (
                    <div className="relative group w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled
                        className="w-full opacity-50 cursor-not-allowed focus-visible:outline-none"
                      >
                        <Lock className="h-4 w-4 mr-2" aria-hidden="true" />
                        Private Project
                      </Button>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                        {project.disabledMessage}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-foreground"></div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className="w-full inline-flex items-center justify-center h-9 px-3 text-sm rounded-lg font-medium transition-colors border border-border bg-transparent hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
