import React from 'react';
import { Cpu, Zap, Clock, Trophy } from 'lucide-react';
import { SectionId } from '../types';

const features = [
  {
    icon: <Cpu className="w-8 h-8 text-accent-cyan" />,
    title: "最適化された学習パス",
    description: "AIがあなたの理解度をリアルタイムで分析。苦手分野を特定し、最適な課題を自動生成します。無駄な反復練習はもう必要ありません。"
  },
  {
    icon: <Clock className="w-8 h-8 text-accent-purple" />,
    title: "24時間365日のサポート",
    description: "深夜でも早朝でも、疑問が湧いたその瞬間に解決。AIチューターが3秒以内に回答し、学習のストップを極限まで減らします。"
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "実践的コードレビュー",
    description: "書いたコードをAIが即座にレビュー。構文エラーだけでなく、パフォーマンスや可読性の観点からもプロレベルのフィードバックを提供します。"
  },
  {
    icon: <Trophy className="w-8 h-8 text-brand-400" />,
    title: "キャリア構築支援",
    description: "学習履歴に基づき、あなたにマッチする職種や企業をAIが提案。ポートフォリオ作成から面接対策まで一貫してサポートします。"
  }
];

const Features: React.FC = () => {
  return (
    <section id={SectionId.FEATURES} className="py-24 bg-slate-900 relative">
       {/* Decorative Line */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">
              なぜ、AI Code Academyなのか
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            従来のスクールとは一線を画す、テクノロジーファーストのアプローチ。
            最速でエンジニアになるための環境がここにあります。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-colors duration-300 border border-slate-700/50 hover:border-brand-500/30 group">
              <div className="bg-slate-800 rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;