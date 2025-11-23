import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { SectionId } from '../types';

interface HeaderProps {
  scrollToSection: (id: SectionId) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '特徴', id: SectionId.FEATURES },
    { label: 'デモ', id: SectionId.DEMO },
    { label: 'コース', id: SectionId.COURSES },
    { label: '料金', id: SectionId.PRICING },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => scrollToSection(SectionId.HERO)}
        >
          <div className="p-2 bg-gradient-to-br from-brand-500 to-accent-purple rounded-lg group-hover:shadow-lg group-hover:shadow-brand-500/50 transition-all">
             <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">AI Code Academy</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button className="px-5 py-2.5 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-200 transition-colors text-sm">
            無料体験に申し込む
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 p-6 absolute w-full h-screen">
           <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="text-xl text-slate-300 font-medium text-left"
              >
                {link.label}
              </button>
            ))}
            <button className="w-full py-4 bg-brand-600 text-white rounded-xl font-bold mt-4">
              無料体験に申し込む
            </button>
           </div>
        </div>
      )}
    </header>
  );
};

export default Header;