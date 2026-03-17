import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    title: 'Bachelors in Computer Science',
    subtitle: 'Specialization in Artificial Intelligence',
    organization: 'Barani Institute of Information Technology (BIIT rwp)',
    location: 'Rawalpindi, Pakistan',
    period: '2020 - 2024',
    description: 'Focused on core CS fundamentals with a strong emphasis on Deep Learning, Machine Learning, and Computer Vision. Completed several AI-driven capstone projects.',
    icon: <GraduationCap size={24} className="text-primary" />,
  },
  {
    type: 'experience',
    title: 'Software Engineer Intern',
    subtitle: 'Full Stack Development',
    organization: 'TechVision Solutions',
    location: 'Remote',
    period: 'June 2023 - Sept 2023',
    description: 'Assisted in building responsive web applications using React and Node.js. Optimized database queries and implemented automated testing.',
    icon: <Briefcase size={24} className="text-accent" />,
  },
  {
    type: 'experience',
    title: 'AI Research Assistant',
    subtitle: 'Independent Study',
    organization: 'BIIT AI Lab',
    location: 'Rawalpindi, Pakistan',
    period: 'Jan 2023 - May 2023',
    description: 'Conducted research on sentiment analysis models and fine-tuned BERT for local languages. Documented findings and presented at a local tech seminar.',
    icon: <Briefcase size={24} className="text-accent" />,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 container px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-heading">Academic & <span className="text-gradient">Professional Journey</span></h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A track record of academic excellence from BIIT and practical engineering experience.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.organization + exp.period}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl glass border-white/5 relative group"
          >
            <div className="flex-shrink-0">
              <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                {exp.icon}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                  <p className="text-lg font-medium text-primary/80">{exp.subtitle}</p>
                </div>
                <div className="flex flex-col items-start md:items-end text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5"><Calendar size={14} /> {exp.period}</div>
                  <div className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</div>
                </div>
              </div>
              <p className="font-bold text-lg mb-2 text-white/90">{exp.organization}</p>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}