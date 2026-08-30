import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TerminalSquare, ArrowUpRight } from 'lucide-react';
import { experienceData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 lg:px-12 w-full max-w-[1400px] mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col mb-16 border-b border-white/10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#F27D26] text-xs font-mono mb-3 tracking-widest uppercase flex items-center gap-2"
        >
          <span>— 02. CAREER &amp; TRACK RECORD</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white mb-4 font-display"
        >
          Work &amp; Engineering<br />
          <span className="text-stroke-light">Experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl text-white/60 text-base sm:text-lg leading-relaxed font-light"
        >
          Practical software engineering history spanning backend system architectures, cloud infrastructure orchestration, and full-stack software development.
        </motion.p>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full">
        {/* Vertical timeline line */}
        <div className="absolute top-4 bottom-4 left-4 sm:left-6 w-[1px] bg-white/10" />

        <div className="space-y-10">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Timeline node icon */}
              <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-2 w-3.5 h-3.5 bg-[#050505] border-2 border-[#F27D26] shadow-[0_0_10px_rgba(242,125,38,0.5)]" />

              {/* Experience Card */}
              <div className="editorial-card p-6 sm:p-10">
                {/* Header Information */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-[#F27D26] uppercase tracking-wider mb-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight font-display">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-white/60">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.03] border border-white/10 text-[#F27D26]">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.03] border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-white/40" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  {exp.description}
                </p>

                {/* Responsibilities list */}
                <div className="mb-6 space-y-3">
                  <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest">
                    KEY DELIVERABLES &amp; IMPACT
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="p-4 bg-white/[0.02] border border-white/10 flex items-start gap-3">
                        <span className="text-[#F27D26] font-mono mt-0.5 text-xs font-bold">0{rIdx + 1}</span>
                        <span className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 font-mono">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest mr-2">TECH STACK:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs uppercase tracking-wider bg-white/[0.03] border border-white/10 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
