import React from 'react';
import { motion } from 'motion/react';
import {
  Github,
  GitFork,
  Star,
  GitCommit,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { personalData, githubStatsData } from '../data/portfolio';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-24 px-4 sm:px-8 lg:px-12 w-full max-w-[1400px] mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col mb-16 border-b border-white/10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#F27D26] text-xs font-mono mb-3 tracking-widest uppercase flex items-center gap-2"
        >
          <span>— 05. OPEN SOURCE &amp; REPOSITORIES</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white mb-4 font-display"
        >
          GitHub Code<br />
          <span className="text-stroke-light">&amp; Repositories</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl text-white/60 text-base sm:text-lg leading-relaxed font-light"
        >
          Open source software repositories, clean code architectures, and version-controlled engineering projects.
        </motion.p>
      </div>

      {/* Main GitHub Stats Container */}
      <div className="editorial-card p-6 sm:p-10 mb-8 w-full">
        {/* Profile Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 border border-white/20 bg-white/[0.03] flex items-center justify-center text-[#F27D26]">
              <Github className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white font-mono">@{personalData.githubUsername}</h3>
                <span className="text-[10px] font-mono px-2.5 py-0.5 bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/30 uppercase font-bold">
                  ENGINEER
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/50 font-mono mt-1">
                Full Stack Developer · DevOps &amp; Cloud · SQL
              </p>
            </div>
          </div>

          <a
            href={personalData.github}
            target="_blank"
            rel="noreferrer"
            id="view-github-profile-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold bg-[#F27D26] hover:bg-[#ff8f3d] transition-all shadow-[0_0_15px_rgba(242,125,38,0.25)] self-start sm:self-auto"
          >
            <span>Visit GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Quick Numbers Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 font-mono">
          <div className="p-5 bg-white/[0.02] border border-white/10 text-center">
            <span className="block text-4xl font-black text-[#F27D26] mb-1">
              {githubStatsData.totalRepos}
            </span>
            <span className="text-xs text-white/40 uppercase tracking-wider">Public Repositories</span>
          </div>

          <div className="p-5 bg-white/[0.02] border border-white/10 text-center">
            <span className="block text-4xl font-black text-white mb-1">
              {githubStatsData.totalStars}
            </span>
            <span className="text-xs text-white/40 uppercase tracking-wider">GitHub Stars</span>
          </div>
        </div>

        {/* Language Breakdown */}
        <div className="mb-8 font-mono">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="text-white font-semibold uppercase tracking-wider text-xs flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#F27D26]" />
              Primary Repository Languages
            </span>
          </div>

          {/* Composite Bar */}
          <div className="h-2.5 w-full overflow-hidden flex bg-white/5 mb-3 border border-white/10">
            {githubStatsData.topLanguages.map((lang) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                title={`${lang.name}`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-5 text-xs sm:text-sm text-white/70">
            {githubStatsData.topLanguages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-white">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pinned Repositories Grid */}
        <div>
          <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-4 flex items-center gap-2">
            <GitCommit className="w-3.5 h-3.5 text-[#F27D26]" />
            Featured Repositories
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
            {githubStatsData.pinnedRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                id={`pinned-repo-${repo.name}`}
                className="p-5 bg-white/[0.02] border border-white/10 hover:border-[#F27D26] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#F27D26] transition-colors flex items-center gap-2">
                      <Github className="w-4 h-4 text-white/50" />
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-[#F27D26] transition-colors" />
                  </div>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-5 font-sans font-light">{repo.description}</p>
                </div>

                <div className="flex items-center gap-5 text-xs text-white/50">
                  <span className="flex items-center gap-1.5 text-white/80">
                    <span className="w-2 h-2 bg-[#F27D26]" />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors">
                    <GitFork className="w-3.5 h-3.5 text-indigo-400" />
                    {repo.forks}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
