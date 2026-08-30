import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  FileText,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Phone,
  Briefcase,
  GraduationCap,
  Award,
  FolderGit2,
  Globe,
  Sparkles,
} from 'lucide-react';
import {
  personalData,
  experienceData,
  educationData,
  certificationsData,
  projectsData,
  skillsData,
} from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    window.print();
  };

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
          className="relative w-full max-w-5xl max-h-[94vh] overflow-y-auto bg-[#050505] border border-white/20 shadow-2xl p-6 sm:p-10 lg:p-12 z-10 font-sans text-white/80"
        >
          {/* Top Actions Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div className="flex items-center gap-2 text-[#F27D26] font-mono text-xs uppercase tracking-widest">
              <FileText className="w-4 h-4" />
              <span>OFFICIAL_RESUME_PREVIEW</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                id="modal-download-resume-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-widest font-bold text-black bg-[#F27D26] hover:bg-[#ff8f3d] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                id="close-resume-modal-btn"
                className="p-2.5 border border-white/10 hover:border-[#F27D26] bg-white/[0.03] text-white/70 hover:text-white transition-colors"
                aria-label="Close Resume Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Format */}
          <div className="bg-white/[0.015] p-6 sm:p-10 lg:p-12 border border-white/10 space-y-8 text-sm leading-relaxed">
            {/* Header */}
            <div className="border-b border-white/10 pb-6">
              <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-display mb-2">
                {personalData.name}
              </h1>
              <p className="text-[#F27D26] font-mono text-sm uppercase tracking-wider mb-4 font-semibold">
                {personalData.primaryPositioning}
              </p>

              <div className="flex flex-wrap gap-5 text-xs sm:text-sm font-mono text-white/70">
                {personalData.phone && (
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#F27D26]" />
                    {personalData.phone}
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#F27D26]" />
                  {personalData.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-white/40" />
                  {personalData.location}
                </span>
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#F27D26] transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-white/40" />
                  github.com/{personalData.githubUsername}
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#F27D26] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-white/40" />
                  linkedin.com/in/satvikreddy0610
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono text-[#F27D26] uppercase tracking-widest font-bold">
                Professional Summary
              </h2>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed font-light">
                Computer Science undergraduate specializing in Cloud Native Software Engineering, with hands-on experience across full-stack development, cloud infrastructure, and DevOps automation. Skilled in building REST APIs with Java and Spring Boot, containerizing and deploying applications with Docker, Kubernetes, and Jenkins CI/CD pipelines on AWS, and writing optimized SQL queries. Strong foundation in DSA, DBMS, OOP, and the SDLC.
              </p>
            </div>

            {/* Technical Skills Summary */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono text-[#F27D26] uppercase tracking-widest font-bold">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono">
                {skillsData.map((cat) => (
                  <div key={cat.id} className="p-4 bg-white/[0.02] border border-white/10">
                    <span className="text-white font-bold block mb-1.5 uppercase text-xs">
                      {cat.name}:
                    </span>
                    <span className="text-white/70 font-sans font-light">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-[#F27D26] uppercase tracking-widest font-bold flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Work Experience
              </h2>
              <div className="space-y-4">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="p-5 bg-white/[0.02] border border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5">
                      <h3 className="font-bold text-white uppercase text-base font-display">{exp.role}</h3>
                      <span className="text-xs sm:text-sm font-mono text-[#F27D26]">{exp.period}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-white/50 mb-3">
                      {exp.company} — {exp.location}
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-white/75 font-light">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#F27D26] font-mono mt-0.5">›</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Academic & Personal Projects */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-[#F27D26] uppercase tracking-widest font-bold flex items-center gap-2">
                <FolderGit2 className="w-4 h-4" />
                Key Projects
              </h2>
              <div className="space-y-4">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="p-5 bg-white/[0.02] border border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5">
                      <h3 className="font-bold text-white uppercase text-base font-display">{proj.title}</h3>
                      <span className="text-xs font-mono text-white/40">2025</span>
                    </div>
                    <p className="text-xs sm:text-sm font-mono text-[#F27D26] mb-3">{proj.tagline}</p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-white/75 font-light mb-4">
                      {proj.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <span className="text-[#F27D26] font-mono mt-0.5">›</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs font-mono text-white/50 uppercase">
                      TECH: {proj.technologies.join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-[#F27D26] uppercase tracking-widest font-bold flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </h2>
              <div className="space-y-3">
                {educationData.map((edu) => (
                  <div key={edu.id} className="p-5 bg-white/[0.02] border border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5">
                      <h3 className="font-bold text-white uppercase text-base font-display">{edu.degree}</h3>
                      <span className="text-xs sm:text-sm font-mono text-[#F27D26]">{edu.period}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-white/50">
                      {edu.institution} · <span className="text-white/80">{edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-[#F27D26] uppercase tracking-widest font-bold flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono">
                {certificationsData.map((cert) => (
                  <div key={cert.id} className="p-4 bg-white/[0.02] border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white uppercase text-xs sm:text-sm">{cert.title}</div>
                      <div className="text-xs text-white/50 mt-0.5">{cert.issuer} ({cert.date})</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Spoken Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h2 className="text-xs font-mono text-[#F27D26] uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Achievements
                </h2>
                <div className="space-y-2 text-xs sm:text-sm text-white/75">
                  {personalData.achievements?.map((ach, idx) => (
                    <div key={idx} className="p-3 bg-white/[0.02] border border-white/10 flex items-start gap-2.5">
                      <span className="text-[#F27D26] font-mono">›</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs font-mono text-[#F27D26] uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Languages
                </h2>
                <div className="space-y-2 text-xs sm:text-sm font-mono">
                  {personalData.languages?.map((lang, idx) => (
                    <div key={idx} className="p-3 bg-white/[0.02] border border-white/10 flex items-center justify-between">
                      <span className="text-white uppercase">{lang.language}</span>
                      <span className="text-[#F27D26] uppercase text-xs">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
