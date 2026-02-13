
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FooterCanvas from './FooterCanvas';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const [footerProgress, setFooterProgress] = useState(0);

  const navLinks = [
    { name: 'WORK', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'POSTS', path: '/posts' },
    { name: 'NOW', path: '/now' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muneebbashir', icon: 'linkedin' },
    { name: 'X', url: 'https://x.com/muneebbashir', icon: 'x' },
    { name: 'Instagram', url: 'https://www.instagram.com/muneebbashir/', icon: 'instagram' },
  ];

  // Subtle parallax effect for footer
  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight) {
        const progress = (windowHeight - rect.top) / rect.height;
        setFooterProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 py-8 px-6 md:px-12 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-black text-sm tracking-tighter group-hover:bg-primary group-hover:text-white transition-all duration-500">
              MB
            </div>
            <span className="font-bold text-xs tracking-[0.4em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:inline">Muneeb Bashir</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold tracking-[0.3em] transition-all hover:text-white ${
                  location.pathname === link.path ? 'text-white' : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-icons">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 p-6">
            <button className="absolute top-8 right-6 text-white" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="material-icons text-4xl">close</span>
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-4xl font-bold text-white tracking-tighter"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer 
        ref={footerRef}
        className="relative py-32 px-6 md:px-12 border-t border-white/5 mt-20 overflow-hidden bg-[#070707]"
      >
        {/* Dynamic Background Element */}
        <FooterCanvas />

        {/* Parallax Background Text */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none"
          style={{ transform: `translateY(${(1 - footerProgress) * 100}px)` }}
        >
          <span className="text-[30vw] font-black tracking-tighter leading-none">MUNEEB</span>
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-32">
            <div 
              className="space-y-8"
              style={{ transform: `translateY(${(1 - footerProgress) * 40}px)`, opacity: footerProgress }}
            >
                <h3 className="text-3xl font-bold text-white tracking-tighter uppercase">Muneeb Bashir</h3>
                <p className="text-slate-500 text-base max-w-xs leading-relaxed font-medium italic">
                  "Crafting high-end digital experiences that balance aesthetic excellence with functional performance."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Lahore, Pakistan</span>
                </div>
            </div>
            
            <div 
              className="space-y-8"
              style={{ transform: `translateY(${(1 - footerProgress) * 60}px)`, opacity: footerProgress }}
            >
                <h4 className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Navigation</h4>
                <div className="flex flex-col space-y-4">
                    {navLinks.map(link => (
                        <Link key={link.path} to={link.path} className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                          <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300"></span>
                          {link.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div 
              className="space-y-8"
              style={{ transform: `translateY(${(1 - footerProgress) * 80}px)`, opacity: footerProgress }}
            >
                <h4 className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Connect</h4>
                <div className="flex flex-col space-y-4">
                    {socialLinks.map(social => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                          <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300"></span>
                          {social.name}
                        </a>
                    ))}
                </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
            <div className="text-[11px] font-bold text-slate-700 uppercase tracking-[0.4em]">
              © 2025 ALL RIGHTS RESERVED
            </div>
            <div className="flex gap-12">
              <div className="text-[11px] font-bold text-slate-700 uppercase tracking-[0.4em]">
                PAKISTAN • 31°52'N 74°18'E
              </div>
              <div className="text-[11px] font-bold text-slate-700 uppercase tracking-[0.4em] hidden md:block">
                DESIGNED BY MB
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
