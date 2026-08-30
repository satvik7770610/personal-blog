import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Server,
  Cloud,
  Container,
  Database,
  Layout,
  TerminalSquare,
  Sparkles,
  CheckCircle,
  Cpu,
  Layers,
} from 'lucide-react';
import { skillsData } from '../data/portfolio';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabIcons: Record<string, React.ReactNode> = {
    all: <Layers className="w-3.5 h-3.5" />,
    languages: <Code2 className="w-3.5 h-3.5" />,
    'backend-web': <Server className="w-3.5 h-3.5" />,
    databases: <Database className="w-3.5 h-3.5" />,
    'cloud-devops': <Cloud className="w-3.5 h-3.5" />,
    'core-cs': <Cpu className="w-3.5 h-3.5" />,
    'tools-practices': <TerminalSquare className="w-3.5 h-3.5" />,
  };

  const filteredCategories =
    activeTab === 'all'
      ? skillsData
      : skillsData.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 lg:px-12 w-full max-w-[1400px] mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col mb-16 border-b border-white/10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#F27D26] text-xs font-mono mb-3 tracking-widest uppercase flex items-center gap-2"
        >
          <span>— 03. TECHNICAL CAPABILITIES</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white mb-4 font-display"
        >
          Engineering Stack<br />
          <span className="text-stroke-light">&amp; Core Disciplines</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl text-white/60 text-base sm:text-lg leading-relaxed font-light"
        >
          Core programming languages, backend frameworks, cloud infrastructure, container orchestration, and foundational computer science principles.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-12 font-mono">
        <button
          onClick={() => setActiveTab('all')}
          id="skill-tab-all"
          className={`px-4 py-2 text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'all'
              ? 'bg-[#F27D26] text-black font-bold shadow-[0_0_15px_rgba(242,125,38,0.3)]'
              : 'bg-white/[0.03] text-white/60 hover:text-white border border-white/10 hover:border-white/30'
          }`}
        >
          {tabIcons.all}
          <span>All Capabilities</span>
        </button>

        {skillsData.map((category) => (
          <button
            key={category.id}
            id={`skill-tab-${category.id}`}
            onClick={() => setActiveTab(category.id)}
            className={`px-4 py-2 text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === category.id
                ? 'bg-[#F27D26] text-black font-bold shadow-[0_0_15px_rgba(242,125,38,0.3)]'
                : 'bg-white/[0.03] text-white/60 hover:text-white border border-white/10 hover:border-white/30'
            }`}
          >
            {tabIcons[category.id] || <Sparkles className="w-3.5 h-3.5" />}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="space-y-12">
        <AnimatePresence mode="wait">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="editorial-card p-6 sm:p-8"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-white/20 bg-white/[0.03] flex items-center justify-center text-[#F27D26]">
                    {tabIcons[category.id] || <Code2 className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white font-display">
                      {category.name}
                    </h3>
                    <p className="text-xs text-white/50 font-mono">{category.skills.length} core technologies</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F27D26] bg-[#F27D26]/10 px-3 py-1 border border-[#F27D26]/20 self-start sm:self-auto">
                  VERIFIED SPECIALIZATION
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: sIdx * 0.05 }}
                    className="p-4 bg-white/[0.02] border border-white/10 hover:border-[#F27D26]/50 transition-all group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#F27D26]" />
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#F27D26] transition-colors font-mono">
                            {skill.name}
                          </h4>
                          {skill.category && (
                            <span className="text-[10px] text-white/40 uppercase font-mono">
                              {skill.category}
                            </span>
                          )}
                        </div>
                      </div>

                      {skill.experience && (
                        <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider px-2 py-0.5 bg-white/[0.03] border border-white/10">
                          {skill.experience}
                        </span>
                      )}
                    </div>

                    {skill.description && (
                      <p className="text-xs text-white/60 leading-relaxed font-light">
                        {skill.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
