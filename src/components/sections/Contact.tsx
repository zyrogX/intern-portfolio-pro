import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight font-heading">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              I'm currently seeking <span className="text-white font-bold underline decoration-primary underline-offset-4">Software Engineering internships</span>. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl glass border-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300 shadow-xl shadow-primary/5">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">sameer.imran@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl glass border-white/5 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300 shadow-xl shadow-accent/5">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">LinkedIn</p>
                  <p className="text-xl font-bold hover:text-accent transition-colors cursor-pointer">linkedin.com/in/sameerimran</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl glass border-white/5 group-hover:bg-white/10 group-hover:text-white transition-all duration-300 shadow-xl shadow-white/5">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Github</p>
                  <p className="text-xl font-bold hover:text-white transition-colors cursor-pointer">github.com/sameer-imran</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-10 rounded-3xl glass border-white/5 shadow-2xl shadow-primary/5"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
                  <Send size={40} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-muted-foreground mb-8">Thanks for reaching out, Sameer Imran will get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-2xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest px-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-6 py-4 rounded-2xl glass border-white/5 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/30 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest px-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full px-6 py-4 rounded-2xl glass border-white/5 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/30 font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest px-1">Message Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="Internship Opportunity"
                    className="w-full px-6 py-4 rounded-2xl glass border-white/5 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/30 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest px-1">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hey Sameer, I loved your portfolio..."
                    className="w-full px-6 py-4 rounded-2xl glass border-white/5 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/30 font-medium resize-none"
                  ></textarea>
                </div>
                <button
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 active:translate-y-0"
                >
                  {isSubmitting ? 'Processing...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} <span className="text-white">Sameer Imran</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">Home</a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">About</a>
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">Projects</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
            <Twitter size={14} />
          </div>
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
            <Linkedin size={14} />
          </div>
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
            <Github size={14} />
          </div>
        </div>
      </div>
    </footer>
  );
}