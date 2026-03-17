import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, BrainCircuit, Globe } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 blur-[120px] rounded-full -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 blur-[140px] rounded-full -z-10 animate-float" style={{ animationDelay: '2s' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container px-4 md:px-6 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 glass mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Available for Internships</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tighter font-heading">
          Hi, I'm <span className="text-gradient">Sameer Imran</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          A <span className="text-white font-semibold italic underline decoration-primary underline-offset-4">Software Engineer</span> specializing in 
          <span className="text-primary font-bold"> Artificial Intelligence</span> from <span className="text-white">BIIT rwp</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <a
            href="#projects"
            className="px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-2xl glass font-bold text-lg hover:bg-white/10 transition-all border border-white/10"
          >
            Get In Touch
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-16">
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
              <BrainCircuit size={32} />
            </div>
            <span className="text-sm font-bold text-muted-foreground group-hover:text-white transition-colors">AI Specialist</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
              <Code size={32} />
            </div>
            <span className="text-sm font-bold text-muted-foreground group-hover:text-white transition-colors">Web Architect</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
              <Cpu size={32} />
            </div>
            <span className="text-sm font-bold text-muted-foreground group-hover:text-white transition-colors">System Design</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
              <Globe size={32} />
            </div>
            <span className="text-sm font-bold text-muted-foreground group-hover:text-white transition-colors">Open Source</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}