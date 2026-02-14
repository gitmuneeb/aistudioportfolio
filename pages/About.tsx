import React, { useEffect, useRef, useState } from 'react';
import { TOOL_LOGOS, CERTIFICATIONS } from '../constants';

const useReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return { isVisible, domRef };
};

const ToolsCarousel: React.FC = () => {
  const extendedLogos = [...TOOL_LOGOS, ...TOOL_LOGOS, ...TOOL_LOGOS];
  return (
    <div className="w-full overflow-hidden py-12 mask-fade-edges pause-on-hover bg-white/5 rounded-3xl mb-40">
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

const CertificationCard: React.FC<{ cert: any, index: number }> = ({ cert, index }) => {
  const { isVisible, domRef } = useReveal();
  return (
    <div 
      ref={domRef}
      className={`glass p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-700 group transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
           <span className="material-icons">{cert.icon}</span>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Verified</span>
        </div>
      </div>
      <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter group-hover:text-primary transition-colors">{cert.title}</h4>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{cert.issuer}</p>
      <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
         <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Achieved {cert.year}</span>
         <span className="material-icons text-slate-700 text-sm group-hover:text-white transition-colors">launch</span>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const profileImage = "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-40">
      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
        <div className="lg:col-span-8 space-y-8">
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">About Me</p>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[1] uppercase">
            CREATING <span className="text-slate-600 italic">PURPOSEFUL</span> DIGITAL PRODUCTS.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
            I am a UI/UX Designer and Web Developer focused on building functional, high-end digital experiences for modern brands and platforms.
          </p>
        </div>
      </div>

      {/* Profile & Biography */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-40">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-900 border border-white/5">
            <img 
              src={profileImage} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
              alt="Muneeb Bashir Profile" 
            />
          </div>
          <div className="mt-8 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest italic">Based in Delhi, India</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest italic">Available Worldwide</span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-16">
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4">Background</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              With over 4 years of experience, I’ve worked with startups and established businesses to translate their vision into pixel-perfect interfaces. My approach combines psychological user research with aesthetic excellence.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              I specialize in UI/UX Design (Web & Mobile Apps) using Figma and Adobe Illustrator. On the technical side, I build scalable solutions using WordPress, Shopify, Webflow, and modern stacks like React.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4">Design Tools</h3>
              <ul className="space-y-2 text-slate-400 font-medium">
                <li>Figma & Framer</li>
                <li>Adobe Illustrator & Photoshop</li>
                <li>Canva Pro & Motion</li>
                <li>Prototyping & Flow</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4">Dev Tools</h3>
              <ul className="space-y-2 text-slate-400 font-medium">
                <li>Shopify & WordPress</li>
                <li>Webflow & Framer</li>
                <li>React / TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className="space-y-12 mb-40">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Core Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {[
            { 
              title: "Product Design", 
              desc: "From user research to high-fidelity prototyping. I create intuitive flows for SaaS and Mobile applications." 
            },
            { 
              title: "E-commerce Development", 
              desc: "Custom Shopify and WordPress storefronts designed to convert visitors into loyal customers." 
            },
            { 
              title: "No-Code & SaaS", 
              desc: "Rapidly deploying pixel-perfect sites using Webflow, Framer, and modern front-end technologies." 
            }
          ].map((service, i) => (
            <div key={i} className="bg-[#050505] p-12 space-y-6 hover:bg-neutral-900/50 transition-colors group">
              <span className="text-[10px] text-primary font-mono">0{i+1}</span>
              <h4 className="text-3xl font-bold text-white group-hover:translate-x-2 transition-transform uppercase tracking-tighter">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Carousel - ABOUT Left to Right */}
      <ToolsCarousel />

      {/* Certifications Vault */}
      <div className="space-y-16 mb-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Recognition</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">Certifications</h3>
          </div>
          <p className="text-slate-500 max-w-xs text-sm font-medium">Verified credentials from world-class institutions and design leaders.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, i) => (
             <CertificationCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-12">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Experience</h2>
        <div className="space-y-0">
          {[
            { role: "Lead UI/UX Designer", company: "Freelance / Agency", year: "2023 - Present" },
            { role: "Senior Web Developer", company: "Shopify Specialist", year: "2022 - 2023" },
            { role: "Product Designer", company: "Tech Solutions", year: "2021 - 2022" },
            { role: "Creative Designer", company: "Digital Studio", year: "2020 - 2021" },
          ].map((exp, i) => (
            <div key={i} className="group border-b border-white/5 py-10 flex flex-col md:flex-row md:items-center justify-between hover:px-4 transition-all duration-500 hover:bg-white/[0.02]">
              <div className="space-y-1">
                <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors uppercase tracking-tighter">{exp.role}</h4>
                <p className="text-slate-500 uppercase text-[10px] tracking-widest font-bold">{exp.company}</p>
              </div>
              <span className="text-slate-600 text-sm mt-4 md:mt-0 font-medium font-mono">{exp.year}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact CTA */}
      <div className="mt-40 text-center space-y-12 bg-white/5 py-32 rounded-[3rem] border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">READY TO <br/> <span className="text-neutral-800">START?</span></h3>
        <p className="text-slate-400 max-w-lg mx-auto text-lg leading-relaxed px-6">Let's build something exceptional together. Whether it's a mobile app or a global e-commerce brand.</p>
        <div className="pt-8">
            <a href="#/contact" className="inline-block bg-white text-black font-black px-16 py-8 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105 uppercase tracking-tighter text-xl shadow-2xl">
                GET IN TOUCH
            </a>
        </div>
      </div>
    </div>
  );
};

export default About;