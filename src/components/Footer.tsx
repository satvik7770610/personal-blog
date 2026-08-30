import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Github, Linkedin, Mail, FileText, ArrowUp, Heart } from 'lucide-react';
import { personalData } from '../data/portfolio';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050505] py-12 px-4 sm:px-8 lg:px-12 relative text-white/60">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1 font-mono">
            <div className="w-6 h-6 border border-white/20 bg-white/[0.03] flex items-center justify-center text-[#F27D26] text-xs">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-bold text-white uppercase tracking-wider font-display">
              {personalData.name}
            </span>
          </div>
          <p className="text-xs text-white/40 font-mono">
            Software Engineer · Cloud &amp; DevOps · Full Stack Developer
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider">
          <a
            href={personalData.github}
            target="_blank"
            rel="noreferrer"
            id="footer-github-link"
            className="hover:text-[#F27D26] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noreferrer"
            id="footer-linkedin-link"
            className="hover:text-[#F27D26] transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${personalData.email}`}
            id="footer-email-link"
            className="hover:text-[#F27D26] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            onClick={onOpenResume}
            id="footer-resume-btn"
            className="hover:text-[#F27D26] transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          className="p-2 border border-white/10 hover:border-[#F27D26] bg-white/[0.03] text-white/70 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-wider"
          title="Scroll back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#F27D26]" />
        </button>
      </div>

      <div className="w-full max-w-[1400px] mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/30 gap-3">
        <span>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</span>
        <span>Built with React, TypeScript, Three.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
};
