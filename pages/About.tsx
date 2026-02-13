
import React from 'react';

const About: React.FC = () => {
  const profileImage = "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-40">
      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
        <div className="lg:col-span-8 space-y-8">
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] reveal">About Me</p>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[1] reveal delay-1">
            CREATING <span className="text-slate-600 italic">PURPOSEFUL</span> DIGITAL PRODUCTS.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl reveal delay-2 leading-relaxed">
            I am a UI/UX Designer and Web Developer focused on building functional, high-end digital experiences for modern brands and platforms.
          </p>
        </div>
      </div>

      {/* Profile & Biography */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-40">
        <div className="lg:col-span-5 reveal">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-900">
            <img 
              src={profileImage} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
              alt="Muneeb Bashir Profile" 
            />
          </div>
          <div className="mt-8 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest italic">Based in Pakistan</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest italic">Available Worldwide</span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-16 reveal delay-3">
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
                <li>Figma</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Prototyping & Motion</li>
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

      {/* Expertise / Services Grid */}
      <div className="space-y-12 mb-40">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest reveal">Core Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 reveal delay-1">
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
              <h4 className="text-3xl font-bold text-white group-hover:translate-x-2 transition-transform">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-12">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest reveal">Experience</h2>
        <div className="space-y-0 reveal delay-2">
          {[
            { role: "Lead UI/UX Designer", company: "Freelance / Agency", year: "2023 - Present" },
            { role: "Senior Web Developer", company: "Shopify Specialist", year: "2022 - 2023" },
            { role: "Product Designer", company: "Tech Solutions", year: "2021 - 2022" },
            { role: "Creative Designer", company: "Digital Studio", year: "2020 - 2021" },
          ].map((exp, i) => (
            <div key={i} className="group border-b border-white/5 py-10 flex flex-col md:flex-row md:items-center justify-between hover:px-4 transition-all duration-500 hover:bg-white/[0.02]">
              <div className="space-y-1">
                <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h4>
                <p className="text-slate-500 uppercase text-[10px] tracking-widest font-bold">{exp.company}</p>
              </div>
              <span className="text-slate-600 text-sm mt-4 md:mt-0 font-medium">{exp.year}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact CTA */}
      <div className="mt-40 text-center space-y-8 reveal">
        <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">READY TO START?</h3>
        <p className="text-slate-400 max-w-lg mx-auto">Let's build something exceptional together. Whether it's a mobile app or a global e-commerce brand.</p>
        <div className="pt-8">
            <a href="#/contact" className="inline-block bg-white text-black font-bold px-10 py-5 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105">
                GET IN TOUCH
            </a>
        </div>
      </div>
    </div>
  );
};

export default About;
