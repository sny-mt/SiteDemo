import React from 'react';
import { Check } from 'lucide-react';
import { SectionId } from '../types';

const Pricing: React.FC = () => {
  return (
    <section id={SectionId.PRICING} className="py-24 bg-[#0B1120] relative overflow-hidden">
       {/* Bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[500px] bg-brand-900/20 filter blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">料金プラン</h2>
          <p className="text-slate-400">あなたの学習スタイルに合わせた最適なプランをお選びください。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Basic Plan */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold text-slate-300 mb-2">ライトプラン</h3>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-3xl font-bold text-white">¥9,800</span>
              <span className="text-slate-500 mb-1">/月</span>
            </div>
            <p className="text-slate-400 text-sm mb-8">独学をサポートするAIチャットボット利用が中心のプラン。</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Check className="w-4 h-4 text-brand-500" /> AIチューター利用 (制限あり)
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Check className="w-4 h-4 text-brand-500" /> 全コース動画視聴
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Check className="w-4 h-4 text-brand-500" /> コミュニティ参加
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-slate-600 text-white font-bold hover:bg-slate-700 transition-colors">
              選択する
            </button>
          </div>

          {/* Pro Plan - Featured */}
          <div className="bg-gradient-to-b from-brand-900/80 to-slate-900 p-8 rounded-2xl border border-brand-500/50 shadow-2xl shadow-brand-500/10 relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent-cyan to-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              人気No.1
            </div>
            <h3 className="text-xl font-bold text-white mb-2">スタンダードプラン</h3>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-bold text-white">¥29,800</span>
              <span className="text-slate-400 mb-1">/月</span>
            </div>
            <p className="text-brand-100 text-sm mb-8">AI機能をフル活用し、短期間で習得を目指す標準プラン。</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-white text-sm">
                <div className="p-1 bg-brand-500 rounded-full"><Check className="w-3 h-3 text-white" /></div> 
                <strong>AIチューター無制限利用</strong>
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <div className="p-1 bg-brand-500 rounded-full"><Check className="w-3 h-3 text-white" /></div>
                コード自動レビュー機能
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <div className="p-1 bg-brand-500 rounded-full"><Check className="w-3 h-3 text-white" /></div>
                週1回のメンタリング (30分)
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <div className="p-1 bg-brand-500 rounded-full"><Check className="w-3 h-3 text-white" /></div>
                全コースアクセス権
              </li>
            </ul>
            <button className="w-full py-4 rounded-lg bg-brand-600 text-white font-bold hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/25">
              今すぐ始める
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold text-slate-300 mb-2">ブートキャンプ</h3>
            <div className="flex items-end gap-1 mb-6">
               <span className="text-3xl font-bold text-white">¥98,000</span>
               <span className="text-slate-500 mb-1">/月</span>
            </div>
            <p className="text-slate-400 text-sm mb-8">転職保証付き。プロのエンジニアによる徹底指導。</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Check className="w-4 h-4 text-brand-500" /> 専属人間のメンター付
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Check className="w-4 h-4 text-brand-500" /> キャリア・転職支援
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Check className="w-4 h-4 text-brand-500" /> チーム開発演習
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-slate-600 text-white font-bold hover:bg-slate-700 transition-colors">
              相談する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;