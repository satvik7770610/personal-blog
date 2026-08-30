import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  ExternalLink,
  ArrowRight,
  Maximize2,
} from 'lucide-react';
import { projectsData } from '../data/portfolio';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 lg:px-12 w-full max-w-[1400px] mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col mb-16 border-b border-white/10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#F27D26] text-xs font-mono mb-3 tracking-widest uppercase flex items-center gap-2"
        >
          <span>— 04. FEATURED ENGINEERING</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white mb-4 font-display"
        >
          Selected Projects<br />
          <span className="text-stroke-light">&amp; Systems</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl text-white/60 text-base sm:text-lg leading-relaxed font-light"
        >
          Selected distributed backend systems, automated cloud deployment pipelines, and full-stack software applications with comprehensive technical architectures.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <AnimatePresence mode="popLayout">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="editorial-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-black/80 border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono">
                    <span className="px-2.5 py-1 text-xs uppercase tracking-wider bg-black/80 text-[#F27D26] border border-[#F27D26]/40 backdrop-blur-md">
                      {project.category}
                    </span>

                    <button
                      onClick={() => setActiveProject(project)}
                      id={`quick-view-project-${project.id}`}
                      className="p-2 bg-black/80 text-white/70 hover:text-white border border-white/20 backdrop-blur-md hover:border-[#F27D26] transition-colors"
                      title="Explore Architecture"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-2 mb-2 font-mono">
                    <span className="text-[10px] text-[#F27D26] uppercase tracking-widest font-semibold">
                      0{index + 1} / ARCHITECTURE
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#F27D26] transition-colors font-display uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#F27D26] mb-3">{project.tagline}</p>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6 font-light">
                    {project.overview}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {project.features.slice(0, 3).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 font-light">
                        <span className="text-[#F27D26] font-mono mt-0.5">›</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-2 font-mono">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs uppercase tracking-wider bg-white/[0.03] border border-white/10 text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 sm:px-8 py-4 bg-white/[0.02] border-t border-white/10 flex items-center justify-between gap-3 font-mono">
                <button
                  onClick={() => setActiveProject(project)}
                  id={`open-deep-dive-${project.id}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#F27D26] hover:text-white transition-colors group/btn"
                >
                  <span>System Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    id={`project-github-link-${project.id}`}
                    className="p-2.5 bg-white/[0.03] border border-white/10 text-white/70 hover:text-white hover:border-[#F27D26] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-live-link-${project.id}`}
                      className="p-2.5 bg-white/[0.03] border border-white/10 text-white/70 hover:text-white hover:border-[#F27D26] transition-colors"
                      aria-label="Live Project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
