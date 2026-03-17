import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database, Layout, Smartphone, Terminal, Cpu, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Artificial Intelligence',
    icon: <Brain size={24} className="text-primary" />,
    skills: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'NLP', 'Computer Vision'],
    className: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/20 to-transparent border-primary/20',
  },
  {
    title: 'Frontend Development',
    icon: <Layout size={24} className="text-accent" />,
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    className: 'md:col-span-1 md:row-span-1 border-white/5',
  },
  {
    title: 'Backend & Databases',
    icon: <Database size={24} className="text-blue-400" />,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
    className: 'md:col-span-1 md:row-span-2 border-white/5',
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone size={24} className="text-purple-400" />,
    skills: ['React Native', 'Expo', 'Flutter', 'Mobile UI Design'],
    className: 'md:col-span-1 md:row-span-1 border-white/5',
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud size={24} className="text-orange-400" />,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
    className: 'md:col-span-2 md:row-span-1 border-white/5',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 container px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-heading">Technical <span className="text-gradient">Arsenal</span></h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Combining specialized AI knowledge with modern web technologies to build intelligent, scalable solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bento-card group ${category.className}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl glass group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-bold text-xl">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-semibold rounded-full glass border-white/5 text-muted-foreground group-hover:text-foreground transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}