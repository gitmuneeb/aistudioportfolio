
import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a1a] flex flex-col items-center justify-center transition-opacity duration-1000">
      <div className="relative overflow-hidden w-64 h-px bg-white/10 mb-8">
        <div 
          className="absolute inset-0 bg-primary transition-all duration-300 ease-out"
          style={{ width: `${count}%` }}
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="text-4xl font-bold tracking-tighter text-white animate-pulse">
          MUNEEB BASHIR
        </span>
        <span className="text-xs font-bold tracking-[0.4em] text-slate-500 uppercase">
          PORTFOLIO &copy; 2025
        </span>
      </div>
    </div>
  );
};

export default Loader;
