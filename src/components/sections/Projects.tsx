import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'AI Vision Analyst',
    description: 'A real-time object detection and classification system built using PyTorch and React. Features a high-speed inference engine for edge devices.',
    image: 'https://images.unsplash.com/photo-1758626056863-9191d5cef12e?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'PyTorch', 'React', 'FastAPI'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Nexus SaaS Platform',
    description: 'A comprehensive project management dashboard with real-time collaboration features, integrated with AI for task prioritization.',
    image: 'https://images.unsplash.com/photo-1762330907387-d4aa874dfb03?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'AI'],
    github: '#',
    demo: '#',
  },
  {
    title: 'IntelliHealth App',
    description: 'A mobile health monitoring application that uses machine learning to predict potential health issues based on wearable data.',
    image: 'https://images.unsplash.com/photo-1762330916030-de880f5ea298?auto=format&fit=crop&q=80&w=800',
    tags: ['React Native', 'TensorFlow Lite', 'Firebase'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Automated Video Editor',
    description: 'An AI-powered tool that automatically edits talking head videos, removing silences and generating captions.',
    image: 'https://images.unsplash.com/photo-1764664281860-c5725fafa634?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'FFmpeg', 'OpenAI API', 'Node.js'],
    github: '#',
    demo: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-heading">Featured <span className="text-gradient">Creations</span></h2>
            <p className="text-muted-foreground text-lg">
              A selection of my recent works ranging from deep learning models to full-stack web applications.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 font-bold text-primary group">
            View All Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full glass border-white/5 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}