
import React from 'react';
import { UPDATES } from '../constants';

const Now: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Subtle Background Animation: Pulsing Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div 
          className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] animate-pulse" 
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[140px] animate-pulse" 
          style={{ animationDuration: '12s', animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[90px] animate-pulse" 
          style={{ animationDuration: '10s', animationDelay: '4s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-32 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">The Now Page</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">A living log of what I'm doing, what I'm learning, and where I'm headed.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-slate-800 to-transparent -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-24">
            {UPDATES.map((update, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-[#0a0a1a] bg-primary -translate-x-1/2 z-10 hidden md:block"></div>
                
                {/* Content Card */}
                <div className="w-full md:w-[45%] group">
                  <div className="glass p-8 rounded-3xl border border-white/5 group-hover:border-primary/30 transition-all duration-500">
                    <div className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-3">{update.date}</div>
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{update.title}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {update.content}
                    </p>
                  </div>
                </div>

                {/* Spacer for ladder effect */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 p-12 glass rounded-3xl text-center border border-white/5">
          <h3 className="text-xl font-bold text-white mb-4">Focusing on the essentials.</h3>
          <p className="text-slate-400 text-sm mb-8">Currently saying "no" to almost everything so I can say "yes" to the things that truly matter.</p>
          <div className="flex justify-center gap-4">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Available for select projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Now;
