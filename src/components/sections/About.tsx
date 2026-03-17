import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 container px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 glass shadow-2xl shadow-primary/10 group">
            <img
              src="https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?auto=format&fit=crop&q=80&w=800"
              alt="Sameer Imran"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 p-8 glass rounded-3xl border border-white/10 shadow-2xl shadow-primary/20 animate-float">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 rounded-2xl bg-primary/20 text-primary">
                <Sparkles size={24} />
              </div>
              <p className="text-3xl font-black italic">4.0</p>
            </div>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">GPA Performance</p>
          </div>
        </motion.div>

        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight font-heading">Bridging <span className="text-gradient">AI & Engineering</span></h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
            <p>
              I'm <span className="text-white font-bold">Sameer Imran</span>, a passionate software engineer with a Bachelor's in CS from <span className="text-white">BIIT rwp</span>. 
              My specialization in Artificial Intelligence has given me a unique lens through which I view software development—not just as building tools, but as creating <span className="text-primary font-bold">intelligent ecosystems</span>.
            </p>
            <p>
              I thrive on solving complex problems and turning abstract ideas into functional, beautiful digital experiences. My approach combines rigorous logic with a keen eye for design, ensuring every project is as <span className="text-white">functional</span> as it is <span className="text-white">aesthetic</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4 group">
              <div className="p-4 rounded-2xl glass border-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                <Target size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Goal Oriented</h4>
                <p className="text-sm text-muted-foreground">Laser focused on delivering high impact results for every internship challenge.</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="p-4 rounded-2xl glass border-white/5 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Fast Learner</h4>
                <p className="text-sm text-muted-foreground">Quick to adapt to new stacks and industry-leading best practices.</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="p-4 rounded-2xl glass border-white/5 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Collaborative</h4>
                <p className="text-sm text-muted-foreground">Strong communicator who believes in the power of cross-functional teams.</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="p-4 rounded-2xl glass border-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Clean Code</h4>
                <p className="text-sm text-muted-foreground">Dedicated to writing maintainable, scalable, and secure software.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}