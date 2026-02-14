import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, TOOL_LOGOS } from '../constants';
import ThreeScene from '../components/ThreeScene';

const useReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (domRef.current) observer.unobserve(domRef.current);
      }
    }, { 
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px"
    });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return { isVisible, domRef };
};

const ProjectCard: React.FC<{ project: any, index: number }> = ({ project }) => {
  const { isVisible, domRef } = useReveal();
  
  return (
    <Link 
      to={`/work/${project.slug}`} 
      ref={domRef}
      className={`group relative block overflow-hidden rounded-[2rem] bg-neutral-900 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      }`}
    >
      <div className="aspect-[3/4] w-full overflow-hidden">
         <img 
            src={project.mainImage} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out" 
         />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-primary font-bold uppercase tracking-[0.4em]">{project.year}</span>
          <div className="flex gap-1.5">
            {project.tags.slice(0, 1).map((tag: string) => (
              <span key={tag} className="text-[7px] text-white/40 font-bold uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tighter uppercase leading-none">
          {project.title}
        </h3>
        <p className="text-slate-400 text-xs max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 line-clamp-2">
          {project.description}
        </p>
        <div className="pt-2 flex items-center gap-2 text-white font-bold text-[9px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
          Explore <span className="material-icons text-[10px]">arrow_forward</span>
        </div>
      </div>
    </Link>
  );
};

const ToolsCarousel: React.FC = () => {
  const extendedLogos = [...TOOL_LOGOS, ...TOOL_LOGOS, ...TOOL_LOGOS];
  return (
    <div className="w-full overflow-hidden py-12 mask-fade-edges pause-on-hover">
      <div className="flex w-max animate-infinite-scroll-ltr gap-16 md:gap-24 items-center px-12">
        {extendedLogos.map((logo, i) => (
          <div key={i} className="flex items-center gap-4 group opacity-40 hover:opacity-100 transition-opacity duration-500">
            <img src={logo.url} alt={logo.name} className="w-8 h-8 md:w-10 md:h-10 object-contain filter brightness-200" />
            <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase hidden md:inline">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const profileImage = "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=800";
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const featuredImages = [
    "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
  ];

  const carouselImages = [...featuredImages, ...featuredImages, ...featuredImages];

  return (
    <div className="relative">
      <ThreeScene />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col justify-center space-y-16">
          <div className={`transition-all duration-1000 delay-[100ms] transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-[11px] font-bold tracking-[0.6em] text-primary uppercase">MUNEEB BASHIR • PRODUCT DESIGNER</p>
          </div>

          <div className="relative">
            <h1 className="text-7xl md:text-[12vw] font-bold tracking-tighter leading-[0.75] uppercase select-none">
              <div className="overflow-hidden inline-block align-bottom">
                <span className={`inline-block transition-all duration-[1200ms] delay-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} text-white`}>
                  SHAPING
                </span>
              </div>
              {" "}
              <div className="overflow-hidden inline-block align-bottom">
                <span className={`inline-block transition-all duration-[1200ms] delay-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} text-neutral-800`}>
                  IDEAS
                </span>
              </div>
              <br />
              <div className="overflow-hidden inline-block align-bottom">
                <span className={`inline-block transition-all duration-[1200ms] delay-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} text-white`}>
                  INTO
                </span>
              </div>
              {" "}
              <div className="overflow-hidden inline-block align-bottom">
                <span className={`inline-block transition-all duration-[1200ms] delay-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} text-neutral-800`}>
                  PIXELS.
                </span>
              </div>
            </h1>
          </div>
          
          <div className={`flex flex-col md:flex-row md:items-end justify-between gap-16 pt-12 transition-all duration-1000 delay-[900ms] transform ${isMounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-primary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img src={profileImage} className="relative w-24 h-24 rounded-full grayscale object-cover border-2 border-white/10" alt="Muneeb" />
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-[#050505]"></div>
              </div>
              <div className="space-y-2">
                  <p className="text-base text-slate-400 max-w-sm font-medium leading-relaxed italic">
                    "Designing high-end interfaces for platforms that value clarity, speed, and aesthetics."
                  </p>
                  <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Delhi, India • Open for Remote</p>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pause-on-hover py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.5em]">PROCESS & MOMENTS</span>
            <div className="flex gap-4">
              <div className="h-[1px] w-24 bg-white/10"></div>
              <span className="text-[10px] text-white/20 font-mono tracking-widest italic">SLIDE TO EXPLORE</span>
            </div>
          </div>
          <div className="flex w-max animate-infinite-scroll gap-6 md:gap-10 px-6">
            {carouselImages.map((src, i) => (
              <div key={i} className="w-[60vw] sm:w-[40vw] md:w-[28vw] aspect-[3/4.5] flex-shrink-0 rounded-[2.5rem] bg-neutral-900 overflow-hidden group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 transition-all duration-700 hover:border-primary/50 relative">
                <div className="absolute inset-0 bg-neutral-950/20 z-10 opacity-40 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={src} 
                  className="w-full h-full object-cover grayscale opacity-30 transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                  alt={`Deliverable ${i}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10 z-20">
                   <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-2">ARCHIVE • 2025</p>
                   <h4 className="text-white text-2xl font-bold tracking-tighter uppercase">PROCESS BLOCK 0{i+1}</h4>
                </div>
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Works Grid */}
        <section id="projects-grid" className="space-y-32 pt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-16">
            <div className="space-y-6">
              <span className="text-[11px] text-primary font-bold uppercase tracking-[0.5em]">01 • WORK</span>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white uppercase">PROJECTS SHOWCASE</h2>
            </div>
            <p className="text-slate-500 max-w-xs text-sm font-medium">A curated selection of cross-platform work ranging from Figma UI systems to WordPress portals.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* Tools Carousel - HOME Left to Right */}
        <div className="pt-40">
          <div className="flex items-center justify-center gap-6 mb-8 opacity-40">
             <div className="h-px w-12 bg-white"></div>
             <span className="text-[10px] font-bold text-white uppercase tracking-[0.5em]">CORE TECH STACK</span>
             <div className="h-px w-12 bg-white"></div>
          </div>
          <ToolsCarousel />
        </div>

        {/* CTA Section */}
        <section className="relative py-80 overflow-hidden group/cta">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none whitespace-nowrap overflow-hidden">
             <div className="text-[25vw] font-black tracking-tighter uppercase leading-none animate-infinite-scroll italic" style={{ animationDuration: '60s', animationDirection: 'reverse' }}>
               SAY HELLO • HIRE ME • START A PROJECT • SAY HELLO • HIRE ME • START A PROJECT •
             </div>
          </div>

          <div className="relative text-center space-y-12 z-10">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4 mb-4 opacity-60 group-hover/cta:opacity-100 transition-opacity duration-700">
                <span className="h-[1px] w-8 bg-primary"></span>
                <span className="text-[10px] text-white font-bold uppercase tracking-[0.6em]">ESTABLISHED IN 1998 • INDIA</span>
                <span className="h-[1px] w-8 bg-primary"></span>
              </div>
              <h2 className="text-8xl md:text-[15vw] font-black tracking-[calc(-0.03em)] text-white uppercase leading-[0.75] transition-all duration-1000 group-hover/cta:tracking-tight">
                WORK <br /> 
                <span className="text-neutral-900 group-hover/cta:text-white transition-colors duration-1000">TOGETHER.</span>
              </h2>
            </div>

            <div className="pt-8 flex flex-col items-center gap-12">
              <Link to="/contact" className="inline-block group relative">
                <div className="absolute -inset-12 bg-primary/30 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s]"></div>
                <div className="absolute inset-0 bg-primary/20 scale-[1.3] blur-[40px] opacity-0 group-hover:opacity-50 transition-opacity duration-1000"></div>
                
                <div className="relative bg-white text-black px-20 md:px-32 py-8 md:py-12 rounded-full font-black text-2xl md:text-3xl tracking-tighter hover:bg-primary hover:text-white transition-all duration-700 transform hover:scale-[1.1] hover:-rotate-1 active:scale-95 shadow-[0_20px_60px_-10px_rgba(99,102,241,0.3)] flex items-center gap-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  <span>START A PROJECT</span>
                  <span className="material-icons text-3xl group-hover:translate-x-3 transition-transform duration-500">east</span>
                </div>
              </Link>

              <div className="flex items-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-white/5 px-8 py-4 rounded-full backdrop-blur-md">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                AVAILABLE FOR NEW OPPORTUNITIES
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
