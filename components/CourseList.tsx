import React from 'react';
import { Layout, Database, Smartphone, Cloud } from 'lucide-react';
import { SectionId } from '../types';

const courses = [
  {
    title: "Webアプリケーション開発",
    description: "React, Next.js, Node.jsを用いたモダンなWeb開発を習得。ゼロからSNSやECサイトを構築します。",
    icon: <Layout className="w-10 h-10 text-brand-400" />,
    level: "Beginner to Pro",
    tags: ["React", "TypeScript", "Tailwind"]
  },
  {
    title: "AI & データサイエンス",
    description: "Pythonの基礎から機械学習、ディープラーニングの実装まで。実際のデータセットを用いた分析を行います。",
    icon: <Database className="w-10 h-10 text-accent-purple" />,
    level: "Intermediate",
    tags: ["Python", "PyTorch", "Pandas"]
  },
  {
    title: "モバイルアプリ開発",
    description: "React NativeやFlutterを使用して、iOSとAndroid両対応のアプリを効率的に開発するスキルを磨きます。",
    icon: <Smartphone className="w-10 h-10 text-accent-cyan" />,
    level: "Beginner",
    tags: ["Flutter", "Dart", "Firebase"]
  },
  {
    title: "クラウドインフラ構築",
    description: "AWSやGoogle Cloudを用いたサーバー構築、Docker/Kubernetesによるコンテナ運用を学びます。",
    icon: <Cloud className="w-10 h-10 text-yellow-400" />,
    level: "Advanced",
    tags: ["AWS", "Docker", "Terraform"]
  }
];

const CourseList: React.FC = () => {
  return (
    <section id={SectionId.COURSES} className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              目指すキャリアに合わせた<br/>専門コース
            </h2>
            <p className="text-slate-400">
              基礎から応用まで、現場で即戦力となるスキル体系を網羅。
            </p>
          </div>
          <button className="hidden md:block text-brand-400 hover:text-brand-300 font-medium transition-colors">
            全カリキュラムをダウンロード &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="group relative bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-500/50 transition-all hover:shadow-xl hover:shadow-brand-900/20 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-125 duration-500">
                {course.icon}
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-slate-700/50 flex items-center justify-center mb-6 group-hover:bg-brand-900/30 transition-colors">
                  {course.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                <p className="text-slate-400 mb-6 line-clamp-2">{course.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-slate-900 border border-slate-600 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                   <span className="text-sm text-slate-500 font-medium">{course.level}</span>
                   <button className="text-brand-400 text-sm font-bold group-hover:translate-x-1 transition-transform">
                     詳細を見る &rarr;
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button className="text-brand-400 hover:text-brand-300 font-medium transition-colors">
            全カリキュラムをダウンロード &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseList;