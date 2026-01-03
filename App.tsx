
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-cyan-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-[0.15]"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar scrolled={scrolled} />
        <main className="container mx-auto px-6 lg:px-12">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <footer className="py-12 border-t border-white/5 bg-[#080808] mt-20">
          <div className="container mx-auto px-6 text-center">
            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
              Amr Atalla &copy; {new Date().getFullYear()} // System Status: Nominal
            </p>
          </div>
        </footer>
      </div>

      <Chatbot />
    </div>
  );
};

export default App;
