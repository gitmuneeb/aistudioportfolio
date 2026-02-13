
import React, { useState, useMemo } from 'react';
import { POSTS } from '../constants';

const Posts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract unique tags from all posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    tags.add('All');
    POSTS.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, []);

  // Filter posts based on search term and selected tag
  const filteredPosts = useMemo(() => {
    return POSTS.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-12">
      <div className="space-y-4">
        <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Writings</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">Insights & Explorations</h1>
      </div>

      {/* Filter Bar */}
      <div className="glass p-6 rounded-3xl border border-white/5 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        {/* Tag Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                selectedTag === tag 
                  ? 'bg-primary border-primary text-white' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative group lg:w-80">
          <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
            search
          </span>
          <input 
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900/50 border-white/10 rounded-2xl pl-12 pr-4 py-3 text-sm text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Grid Results */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer flex flex-col space-y-6">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden glass relative">
                <img 
                  src={post.thumbnail} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0a0a1a]/80 backdrop-blur-md text-[10px] font-bold text-white px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                   <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">{post.date}</p>
                   <div className="h-px w-4 bg-slate-700"></div>
                   <p className="text-[10px] font-bold tracking-widest text-primary uppercase">{post.tags.join(', ')}</p>
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                  {post.summary}
                </p>
                <div className="pt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read Article <span className="material-icons text-sm">arrow_forward</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center glass rounded-3xl border border-dashed border-white/10">
          <span className="material-icons text-4xl text-slate-600 mb-4">sentiment_dissatisfied</span>
          <p className="text-slate-400">No articles match your search or filter criteria.</p>
          <button 
            onClick={() => { setSearchTerm(''); setSelectedTag('All'); }}
            className="mt-4 text-primary font-bold uppercase text-xs tracking-widest hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Posts;
