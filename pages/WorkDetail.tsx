
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const WorkDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) return <Navigate to="/" />;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-16">
      <div className="text-center space-y-4">
        <Link to="/" className="text-slate-500 hover:text-white transition-colors inline-flex items-center gap-2">
          <span className="material-icons text-sm">arrow_back</span> Back to Work
        </Link>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">{project.title}</h1>
        <p className="text-slate-500 text-lg">{project.year}</p>
      </div>

      <img 
        src={project.mainImage} 
        alt={project.title} 
        className="w-full rounded-2xl shadow-2xl border border-white/5" 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Background</h2>
            <p className="text-slate-400 text-lg leading-relaxed">{project.background}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Role</h2>
            <p className="text-slate-400 text-lg leading-relaxed">{project.role}</p>
          </section>
        </div>

        <aside className="space-y-8">
          <div>
            <h3 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Focus</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="bg-white/5 text-white px-3 py-1 rounded-full text-xs border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-sm font-bold text-white mb-2">Outcome</h3>
            <p className="text-sm text-slate-400">{project.outcome}</p>
          </div>
        </aside>
      </div>

      <section className="space-y-12 pt-16 border-t border-white/5">
        <h2 className="text-3xl font-bold text-white">Screens / Deliverables</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.screenshots.map((src, i) => (
            <img key={i} src={src} className="rounded-xl border border-white/5 w-full shadow-lg" alt={`Deliverable ${i}`} />
          ))}
        </div>
      </section>

      <div className="pt-24 text-center">
        <Link to="/" className="text-2xl font-bold text-primary hover:underline">
          Next Project →
        </Link>
      </div>
    </div>
  );
};

export default WorkDetail;
