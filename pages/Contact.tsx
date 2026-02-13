
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muneebbashir' },
    { name: 'X / Twitter', url: 'https://x.com/muneebbashir' },
    { name: 'Instagram', url: 'https://www.instagram.com/muneebbashir/' },
    { name: 'Facebook', url: 'https://www.facebook.com/muneebbashir.official/' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center mb-12 space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">GET IN TOUCH</h1>
        <p className="text-slate-400 text-lg">
          Need a UI/UX expert or a high-converting website?<br />
          Let's discuss your next Shopify, WordPress, or Webflow project.
        </p>
      </div>

      <div className="max-w-2xl mx-auto glass p-8 md:p-12 rounded-3xl border border-white/10 relative">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-icons">check_circle</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Message Sent!</h2>
            <p className="text-slate-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-primary font-bold hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                required 
                className="w-full bg-slate-800/50 border-0 focus:ring-2 focus:ring-primary text-white rounded-xl p-4 transition-all"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                required 
                className="w-full bg-slate-800/50 border-0 focus:ring-2 focus:ring-primary text-white rounded-xl p-4 transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Message</label>
              <textarea 
                required 
                rows={4}
                className="w-full bg-slate-800/50 border-0 focus:ring-2 focus:ring-primary text-white rounded-xl p-4 transition-all"
                placeholder="Tell me about your project (UI/UX, Shopify, etc.)..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-primary hover:bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <div className="max-w-2xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {socialLinks.map(social => (
          <a 
            key={social.name} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass p-4 rounded-xl text-center text-[10px] font-bold text-slate-400 hover:text-white hover:border-white/20 transition-all uppercase tracking-widest"
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
