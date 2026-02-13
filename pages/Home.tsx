
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import ThreeScene from '../components/ThreeScene';

// Improved Reveal Hook - Triggers once and stays visible
const useReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, stop observing to keep it visible
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

const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  const { isVisible, domRef } = useReveal();
  
  return (
    <Link 
      to={`/work/${project.slug}`} 
      ref={domRef}
      className={`group block space-y-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      } ${index % 2 !== 0 ? 'md:mt-48' : ''}`}
    >
      <div className="aspect-[4/5] rounded-[2.5rem] bg-neutral-900 overflow-hidden relative shadow-2xl border border-white/5">
         <img 
            src={project.mainImage} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-20 transition-opacity"></div>
         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
            <div className="bg-white text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-2xl">
              View Case Study
            </div>
         </div>
      </div>
      <div className="flex justify-between items-start pt-2 px-2">
        <div className="space-y-4">
            <h3 className="text-4xl md:text-6xl font-bold text-white group-hover:text-primary transition-colors leading-none tracking-tighter uppercase">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag: string) => (
                <span key={tag} className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.3em] bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
        </div>
        <span className="text-slate-800 font-mono text-xs mt-3 hidden sm:block">{project.year}</span>
      </div>
    </Link>
  );
};

const Home: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const profileImage = "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=800";
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const featuredImages = [
    "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400"
  ];

  const carouselImages = [...featuredImages, ...featuredImages];

  return (
    <div className="relative">
      <ThreeScene />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-64">
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
                  <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Lahore, Pakistan • Open for Remote</p>
              </div>
            </div>
            
            <div className="flex items-center gap-12">
              {['LinkedIn', 'X', 'Instagram'].map((name) => (
                <a key={name} href="#" className="group relative overflow-hidden h-6">
                  <div className="flex flex-col group-hover:-translate-y-6 transition-transform duration-500 ease-in-out">
                    <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase">{name}</span>
                    <span className="text-[11px] font-bold tracking-[0.4em] text-white uppercase">{name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Works Grid */}
        <section className="space-y-40">
          <div className="flex items-end justify-between border-b border-white/5 pb-16">
            <div className="space-y-6">
              <span className="text-[11px] text-primary font-bold uppercase tracking-[0.5em]">01 • WORK</span>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white uppercase">SELECTED PROJECTS</h2>
            </div>
            <div className="flex items-center gap-4 text-slate-700 font-mono text-xs hidden md:flex">
              <span>(SCROLL TO EXPLORE)</span>
              <span className="material-icons animate-bounce text-sm">south</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-48">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* Dynamic Carousel / Gallery */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pause-on-hover py-20">
          <div className="flex w-max animate-infinite-scroll gap-12">
            {carouselImages.map((src, i) => (
              <div key={i} className="w-[400px] md:w-[700px] aspect-video flex-shrink-0 rounded-[3rem] bg-neutral-900 overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
                <img 
                  src={src} 
                  className="w-full h-full object-cover grayscale opacity-30 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" 
                  alt={`Deliverable ${i}`} 
                />
              </div>
            ))}
          </div>
        </section>

        {/* Huge Footer CTA */}
        <section className="py-64 text-center space-y-20">
          <div className="space-y-6">
            <span className="text-[11px] text-primary font-bold uppercase tracking-[0.5em] reveal-hidden">Let's work together</span>
            <h2 className="text-7xl md:text-[14vw] font-bold tracking-tighter text-white uppercase leading-[0.75] reveal-hidden">
              HAVE A <span className="text-neutral-800">PROJECT?</span>
            </h2>
          </div>
          <div className="pt-10">
            <Link to="/contact" className="inline-block group relative">
              <div className="absolute -inset-8 bg-primary/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative bg-white text-black px-24 py-10 rounded-full font-black text-2xl tracking-tighter hover:bg-primary hover:text-white transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-2xl">
                GET IN TOUCH
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
