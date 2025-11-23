import React from 'react';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in-up border border-brand-500/30 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium text-brand-100">最新AIモデル Gemini 2.5 搭載</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up [animation-delay:200ms] leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-100 to-brand-300 drop-shadow-lg">
            未踏のコードへ、
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan via-brand-400 to-accent-purple drop-shadow-lg">
            AIと共に駆け上がる。
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          学習速度を10倍に加速させる、次世代のプログラミングスクール。<br className="hidden md:block"/>
          24時間365日、あなた専属のAIメンターが学習を完全サポートします。
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up [animation-delay:600ms]">
          <button 
            onClick={() => scrollToSection(SectionId.DEMO)}
            className="group relative px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-brand-500/40 hover:shadow-brand-500/60 flex items-center gap-3 overflow-hidden transform hover:-translate-y-1"
          >
            <span className="relative z-10 text-lg">AIメンターを体験する</span>
            <Terminal className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={() => scrollToSection(SectionId.COURSES)}
            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/80 text-slate-200 border border-slate-600 hover:border-slate-500 rounded-xl font-bold transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            コース一覧を見る
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Code decoration */}
        <div className="mt-20 mx-auto max-w-4xl glass-panel rounded-t-xl p-2 border-b-0 opacity-90 animate-fade-in-up [animation-delay:800ms] shadow-2xl shadow-brand-900/50 transform hover:scale-[1.01] transition-transform duration-500">
          <div className="flex gap-2 px-4 py-2 border-b border-slate-700/50 items-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 text-center text-xs text-slate-500 font-mono">future_engineer.ts</div>
          </div>
          <div className="p-6 font-mono text-left text-sm md:text-base text-slate-300 overflow-hidden bg-[#0B1120]/80 rounded-b-lg">
            <p><span className="text-accent-purple">const</span> <span className="text-brand-300">yourPotential</span> = <span className="text-accent-cyan">await</span> aiAcademy.<span className="text-yellow-300">unlock</span>();</p>
            <p className="mt-2"><span className="text-accent-purple">if</span> (yourPotential.<span className="text-brand-300">isLimitless</span>) {'{'}</p>
            <p className="pl-6 text-slate-400">// AIがあなたの可能性を最大化します</p>
            <p className="pl-6"><span className="text-brand-300">you</span>.<span className="text-yellow-300">buildFuture</span>(<span className="text-green-300">'With Confidence'</span>);</p>
            <p>{'}'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;