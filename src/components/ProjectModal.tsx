import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Github,
  ExternalLink,
  Layers,
  AlertCircle,
  CheckCircle2,
  Cpu,
  Flame,
  Sparkles,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08090d]/90 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#050505] border border-white/20 shadow-2xl p-6 sm:p-10 lg:p-12 z-10 font-sans"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            id="close-project-modal-btn"
            className="absolute top-6 right-6 p-2.5 border border-white/10 hover:border-[#F27D26] bg-white/[0.03] text-white/70 hover:text-white transition-colors"
            aria-label="Close Project Deep Dive"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-8 pr-12">
            <div className="flex items-center gap-2 mb-2 font-mono">
              <span className="px-2.5 py-1 text-xs uppercase tracking-wider bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/30">
                {project.category}
              </span>
              <span className="text-xs text-white/40">2025</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2 font-display">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-mono text-[#F27D26]">{project.tagline}</p>
          </div>

          {/* Banner Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-white/10 mb-8 bg-black/60">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          </div>

          {/* Modal Body Content */}
          <div className="space-y-8 text-sm">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono text-[#F27D26] uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                System Overview
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed font-light">
                {project.overview}
              </p>
            </div>

            {/* Architecture breakdown */}
            <div className="p-6 bg-white/[0.02] border border-white/10">
              <h3 className="text-xs font-mono text-[#F27D26] uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Technical Architecture &amp; Implementation
              </h3>
              <p className="text-white/75 text-sm leading-relaxed font-light mb-4">
                {project.architecture}
              </p>

              {/* Engineering Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 font-mono text-xs">
                {project.challenges && (
                  <div className="p-4 bg-white/[0.02] border border-white/10">
                    <div className="flex items-center gap-2 text-amber-400 font-bold mb-2 uppercase">
                      <AlertCircle className="w-4 h-4" />
                      Engineering Challenge
                    </div>
                    <p className="text-white/70 font-sans text-xs sm:text-sm font-light leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                )}

                {project.solutions && (
                  <div className="p-4 bg-white/[0.02] border border-white/10">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2 uppercase">
                      <CheckCircle2 className="w-4 h-4" />
                      Implemented Solution
                    </div>
                    <p className="text-white/70 font-sans text-xs sm:text-sm font-light leading-relaxed">
                      {project.solutions}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Core Features */}
            <div>
              <h3 className="text-xs font-mono text-[#F27D26] uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Key Engineered Capabilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {project.features.map((feat, i) => (
                  <li key={i} className="p-3.5 bg-white/[0.02] border border-white/10 flex items-start gap-2.5 text-white/75 font-light">
                    <span className="text-[#F27D26] font-mono mt-0.5">›</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Tags */}
            <div className="pt-4 border-t border-white/10 font-mono">
              <h4 className="text-xs text-white/40 uppercase tracking-widest mb-3">TECHNOLOGY STACK:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs uppercase tracking-wider bg-white/[0.03] border border-white/10 text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTAs */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 font-mono">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="modal-project-github-btn"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-bold text-black bg-[#F27D26] hover:bg-[#ff8f3d] transition-all shadow-[0_0_15px_rgba(242,125,38,0.3)]"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code on GitHub</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="modal-project-live-btn"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-bold text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Deployment</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
