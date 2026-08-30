import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-8 lg:px-12 w-full max-w-[1400px] mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col mb-16 border-b border-white/10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#F27D26] text-xs font-mono mb-3 tracking-widest uppercase flex items-center gap-2"
        >
          <span>— 06. ACADEMIC FOUNDATIONS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white mb-4 font-display"
        >
          Academic<br />
          <span className="text-stroke-light">Foundations</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl text-white/60 text-base sm:text-lg leading-relaxed font-light"
        >
          Rigorous computer science curriculum emphasizing algorithms, distributed architectures, databases, and system design.
        </motion.p>
      </div>

      {/* Education Cards */}
      <div className="w-full space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="editorial-card p-6 sm:p-10"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#F27D26] uppercase tracking-wider mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>{edu.institution}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight font-display">
                  {edu.degree}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-white/60">
                <span className="px-3 py-1 bg-white/[0.03] border border-white/10 text-white/80">
                  <MapPin className="w-3.5 h-3.5 inline mr-1 text-white/40" />
                  {edu.location}
                </span>
                <span className="px-3 py-1 bg-white/[0.03] border border-white/10 text-white/80">
                  <Calendar className="w-3.5 h-3.5 inline mr-1 text-white/40" />
                  {edu.period}
                </span>
                <span className="px-3.5 py-1 bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/30 font-bold">
                  {edu.gpa}
                </span>
              </div>
            </div>

            {/* Coursework & Focus */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#F27D26]" />
                  KEY COMPUTER SCIENCE COURSEWORK
                </h4>

                <div className="flex flex-wrap gap-2 font-mono">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 text-xs uppercase tracking-wider bg-white/[0.02] border border-white/10 text-white/80 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 bg-[#F27D26]" />
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <div className="pt-4 border-t border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {edu.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="p-3 bg-white/[0.02] border border-white/10 flex items-start gap-2.5 text-xs text-white/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
