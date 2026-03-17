import React, { Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact, Footer } from './components/sections/Contact';
import { ScrollToTop } from './components/ui/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      <main className="relative">
        {/* Glow Effects */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-primary/10 blur-[160px] rounded-full animate-float" />
          <div className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-accent/10 blur-[160px] rounded-full animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;