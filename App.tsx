import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AiTutorDemo from './components/AiTutorDemo';
import CourseList from './components/CourseList';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { SectionId } from './types';

const App: React.FC = () => {
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[#0f172a] selection:bg-brand-500/30 selection:text-white">
      <Header scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Features />
        <AiTutorDemo />
        <CourseList />
        <Pricing />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;