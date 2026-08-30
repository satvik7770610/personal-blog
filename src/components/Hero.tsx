import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  FileText,
  Terminal,
  Server,
  Cloud,
  Code2,
  GitBranch,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { personalData, projectsData } from '../data/portfolio';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: pos - offset, behavior: 'smooth' });
    }
  };

  const featuredProject = projectsData[0];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-8 lg:px-12 w-full max-w-[1400px] mx-auto"
    >
      {/* Hero Content Container */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* Main Grid: Headline + Metadata Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-9">
            {/* Upper kicker */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#F27D26] text-xs sm:text-sm font-mono mb-4 tracking-widest uppercase flex items-center gap-2"
            >
              <span>—</span>
              <span>Available for Software Engineering &amp; Cloud Roles</span>
            </motion.p>

            {/* Massive Bold Headline with Outline Surname */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[64px] sm:text-[92px] md:text-[110px] lg:text-[124px] font-black leading-[0.86] tracking-tighter uppercase mb-6 font-display"
            >
              <span className="block text-white">Satvik</span>
              <span className="block text-stroke-light hover:text-white transition-colors duration-300">
                Reddy
              </span>
            </motion.h1>

            {/* Positioning Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl font-light text-white/80 max-w-3xl leading-relaxed"
            >
              <span className="font-semibold text-white">Software Engineer</span> specializing in{' '}
              <span className="text-[#F27D26] font-normal">Cloud Native Architectures</span>,{' '}
              <span className="text-white font-normal">Java Spring Boot Microservices</span>, and{' '}
              <span className="text-white/90 font-normal">DevOps CI/CD Automation</span> on AWS.
            </motion.p>
          </div>

          {/* Quick Stats side card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 editorial-card p-6 font-mono text-xs space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-white/40 uppercase tracking-widest text-[10px]">ENGINEERING CGPA</span>
              <span className="text-[#F27D26] font-bold text-sm">9.18 / 10.0</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-white/40 uppercase tracking-widest text-[10px]">EXPERIENCE</span>
              <span className="text-white font-bold text-xs">Software Engineer Intern</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-white/40 uppercase tracking-widest text-[10px]">PRIMARY STACK</span>
              <span className="text-white/80 text-xs">Java · AWS · Docker</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/40 uppercase tracking-widest text-[10px]">LOCATION</span>
              <span className="text-white/80 text-xs">{personalData.location}</span>
            </div>
          </motion.div>
        </div>

        {/* CTAs & Navigation Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10 font-mono"
        >
          <button
            onClick={() => scrollToSection('projects')}
            id="hero-view-work-btn"
            className="px-6 py-3.5 text-xs uppercase tracking-widest font-bold text-black bg-[#F27D26] hover:bg-[#ff8f3d] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(242,125,38,0.3)]"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenResume}
            id="hero-view-resume-btn"
            className="px-6 py-3.5 text-xs uppercase tracking-widest font-bold text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/20 transition-all flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5 text-[#F27D26]" />
            <span>Official Resume</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            id="hero-contact-cta-btn"
            className="px-6 py-3.5 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors flex items-center gap-2 ml-auto"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F27D26]" />
          </button>
        </motion.div>
      </div>

      {/* Hero Bottom Strip: Technical highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs text-white/60"
      >
        <div className="flex items-center gap-2.5">
          <Server className="w-4 h-4 text-[#F27D26]" />
          <span>Java &amp; Spring Boot APIs</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Cloud className="w-4 h-4 text-[#F27D26]" />
          <span>AWS Cloud Infrastructure</span>
        </div>
        <div className="flex items-center gap-2.5">
          <GitBranch className="w-4 h-4 text-[#F27D26]" />
          <span>Docker &amp; Jenkins CI/CD</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Code2 className="w-4 h-4 text-[#F27D26]" />
          <span>PostgreSQL &amp; MySQL Schemas</span>
        </div>
      </motion.div>
    </section>
  );
};
