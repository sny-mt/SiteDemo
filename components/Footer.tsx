import React from 'react';
import { Terminal, Github, Twitter, Linkedin } from 'lucide-react';
import { SectionId } from '../types';

interface FooterProps {
  scrollToSection: (id: SectionId) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="w-6 h-6 text-brand-400" />
              <span className="text-xl font-bold text-white tracking-tight">AI Code Academy</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              最先端のAI技術を活用し、<br/>
              世界で活躍するエンジニアを育成する<br/>
              次世代型プログラミングスクール。
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Learn</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection(SectionId.COURSES)} className="text-slate-400 hover:text-brand-400 text-sm transition-colors">コース一覧</button></li>
              <li><button onClick={() => scrollToSection(SectionId.DEMO)} className="text-slate-400 hover:text-brand-400 text-sm transition-colors">AIチューター体験</button></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">カリキュラム詳細</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">卒業生の作品</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">私たちについて</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">採用情報</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">特定商取引法に基づく表記</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © 2024 AI Code Academy. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Powered by Google Gemini API
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;