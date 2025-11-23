import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Code2, Loader2 } from 'lucide-react';
import { askAiTutor } from '../services/geminiService';
import { ChatMessage, SectionId } from '../types';

const AiTutorDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: 'こんにちは！AI Code Academyの専属メンターです。\nプログラミングの学習で行き詰まっていませんか？「ReactのStateがわからない」「Pythonでスクレイピングしたい」など、どんな質問でも投げかけてください。'
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setLoading(true);

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    // Call API
    const response = await askAiTutor(userMessage);

    // Add AI response
    setMessages(prev => [...prev, {
      role: 'model',
      content: response.explanation,
      codeSnippet: response.codeSnippet,
      language: response.language
    }]);

    setLoading(false);
  };

  return (
    <section id={SectionId.DEMO} className="py-24 bg-[#0B1120] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-900/5 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Text */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-accent-cyan font-bold mb-4 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">LIVE DEMO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">AIがあなたの</span><br/>
              専属メンターになる
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              疑問が生じたその瞬間に解決できるスピード感。
              実際の授業で使用するAIチャットボットを、今すぐ体験してみてください。
              複雑なコードの解説からデバッグ、キャリア相談まで、あらゆる質問に対応します。
            </p>
            
            <div className="space-y-4">
               <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-brand-500/50 transition-colors">
                 <div className="p-2 bg-brand-900/50 rounded-lg text-brand-400">
                   <Code2 className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="text-white font-bold mb-1">コード生成・解説</h4>
                   <p className="text-slate-400 text-sm">「◯◯をする関数を書いて」と頼むだけで、最適なコードとその仕組みを瞬時に解説します。</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Side: Chat Interface */}
          <div className="lg:w-1/2 w-full">
            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/20 border border-slate-700 flex flex-col h-[600px] relative">
              {/* Chat Header */}
              <div className="bg-slate-800/90 p-4 border-b border-slate-700 flex items-center justify-between backdrop-blur-md sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75"></div>
                  </div>
                  <span className="font-mono text-sm font-bold text-slate-200">Gemini-2.5 Tutor</span>
                </div>
                <div className="px-2 py-1 bg-slate-700 rounded text-[10px] text-slate-300 font-mono">
                  Online
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-900/50 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-fade-in-up`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === 'model' ? 'bg-gradient-to-br from-brand-500 to-accent-purple' : 'bg-slate-600'}`}>
                      {msg.role === 'model' ? <Bot className="w-6 h-6 text-white" /> : <User className="w-6 h-6 text-white" />}
                    </div>
                    
                    <div className={`max-w-[85%] space-y-3`}>
                      <div className={`p-4 rounded-2xl shadow-sm ${msg.role === 'user' ? 'bg-brand-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'}`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                      </div>
                      
                      {msg.codeSnippet && (
                        <div className="rounded-xl overflow-hidden border border-slate-700 bg-[#1e1e1e] shadow-lg mt-2">
                          <div className="bg-[#2d2d2d] px-4 py-2 text-xs text-slate-400 flex justify-between items-center border-b border-slate-700">
                            <span className="font-mono font-bold text-brand-300">{msg.language}</span>
                            <span className="text-[10px] uppercase opacity-70">Read-only</span>
                          </div>
                          <pre className="p-4 overflow-x-auto text-sm font-mono text-brand-100 leading-relaxed">
                            <code>{msg.codeSnippet}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {loading && (
                   <div className="flex gap-4 animate-pulse">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-accent-purple flex items-center justify-center flex-shrink-0 opacity-80">
                       <Bot className="w-6 h-6 text-white" />
                     </div>
                     <div className="bg-slate-800 px-5 py-4 rounded-2xl rounded-tl-none border border-slate-700 flex items-center gap-3">
                       <Loader2 className="w-4 h-4 text-brand-400 animate-spin" />
                       <span className="text-xs text-slate-400 font-mono">Thinking...</span>
                     </div>
                   </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-slate-800/80 border-t border-slate-700 backdrop-blur-md">
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="プログラミングの質問を入力してください..."
                    className="w-full bg-slate-900 border border-slate-600 text-white text-sm rounded-xl pl-5 pr-14 py-4 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-500 shadow-inner"
                    disabled={loading}
                  />
                  <button 
                    type="submit" 
                    disabled={loading || !input.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-brand-600 hover:bg-brand-500 text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg shadow-brand-500/20"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </button>
                </form>
                <div className="text-center mt-3 flex justify-center gap-4">
                   <p className="text-[10px] text-slate-500">Powered by Gemini 2.5 Flash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTutorDemo;