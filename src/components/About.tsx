import React from 'react';
import { motion } from 'motion/react';
import {
  Server,
  Cloud,
  Code2,
  GitBranch,
  Award,
  Globe,
  CheckCircle2,
  Layers,
  Cpu,
} from 'lucide-react';
import { personalData } from '../data/portfolio';

export const About: React.FC = () => {
  const corePillars = [
    {
      icon: Server,
      title: 'Backend & REST APIs',
      description:
        'Building high-performance RESTful APIs with Java and Spring Boot, integrating relational databases, and implementing role-based authentication.',
      tag: 'Java · Spring Boot · REST APIs',
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description:
        'Deploying and orchestrating cloud services on AWS (EC2, Lambda, S3, IAM), configuring secure VPC boundaries, and monitoring infrastructure.',
      tag: 'AWS · EC2 · Lambda · S3 · IAM',
    },
    {
      icon: GitBranch,
      title: 'DevOps & Automation',
      description:
        'Containerizing applications with Docker, establishing Jenkins CI/CD automation pipelines, and managing Linux server environments.',
      tag: 'Docker · Jenkins · CI/CD · Kubernetes',
    },
    {
      icon: Code2,
      title: 'Full-Stack & Databases',
      description:
        'Developing responsive React frontend interfaces and designing optimized relational MySQL & PostgreSQL database schemas with query tuning.',
      tag: 'React · MySQL · SQL Optimization',
    },
  ];

  const engineeringPrinciples = [
    {
      num: '01',
      title: 'Scalable Cloud Architecture',
      desc: 'Building applications ready for cloud environments using Docker containers and AWS EC2 & Lambda serverless compute.',
    },
    {
      num: '02',
      title: 'Automated CI/CD Workflows',
      desc: 'Streamlining build, test, and release cycles using Jenkins pipelines and GitHub Actions for continuous delivery.',
    },
    {
      num: '03',
      title: 'Optimized Database Schemas',
      desc: 'Structuring relational schemas in MySQL & PostgreSQL with index optimizations and efficient query execution.',
    },
    {
      num: '04',
      title: 'Solid Computer Science Roots',
      desc: 'Applying strong fundamentals in Data Structures & Algorithms, DBMS, OOP design, and the complete SDLC.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-8 lg:px-12 w-full max-w-[1400px] mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col mb-16 border-b border-white/10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#F27D26] text-xs font-mono mb-3 tracking-widest uppercase flex items-center gap-2"
        >
          <span>— 01. ABOUT &amp; PROFESSIONAL SUMMARY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white mb-4 font-display"
        >
          Cloud Native Engineering<br />
          <span className="text-stroke-light">&amp; Full-Stack Systems</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl text-white/60 text-base sm:text-lg leading-relaxed font-light"
        >
          Computer Science undergraduate specializing in Cloud Native Software Engineering, with hands-on experience across full-stack development, cloud infrastructure, and DevOps automation. Skilled in building REST APIs with Java and Spring Boot, containerizing and deploying applications with Docker, Kubernetes, and Jenkins CI/CD pipelines on AWS, and writing optimized SQL queries.
        </motion.p>
      </div>

      {/* Main Narrative + Key Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
        {/* Left Column: Focus Statement & Highlights */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 editorial-card p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#F27D26] uppercase tracking-wider mb-4">
              <Cpu className="w-4 h-4" />
              <span>CORE ARCHITECTURAL FOCUS</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 uppercase font-display tracking-tight">
              Designing Resilient Systems for Scale &amp; Automation
            </h3>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              My engineering approach prioritizes modular backend design, robust data integrity, automated CI/CD deployment pipelines, and high cloud availability.
            </p>

            <div className="space-y-3 font-mono text-xs text-white/80 border-t border-white/10 pt-6">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F27D26] mt-0.5 shrink-0" />
                <span>Specialized in Java &amp; Spring Boot REST Microservices</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F27D26] mt-0.5 shrink-0" />
                <span>Docker &amp; Kubernetes container orchestration</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F27D26] mt-0.5 shrink-0" />
                <span>AWS Cloud Infrastructure (EC2, Lambda, S3, IAM)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F27D26] mt-0.5 shrink-0" />
                <span>Relational Schema Optimization in MySQL &amp; PostgreSQL</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
            <span>LOCATION: {personalData.location}</span>
            <span className="text-[#F27D26]">CGPA: 9.18</span>
          </div>
        </motion.div>

        {/* Right Column: 4 Technical Pillars */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {corePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="editorial-card p-6 flex flex-col justify-between group hover:border-[#F27D26]/50 transition-all"
              >
                <div>
                  <div className="w-10 h-10 border border-white/20 bg-white/[0.03] flex items-center justify-center text-[#F27D26] mb-4 group-hover:border-[#F27D26] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 uppercase font-display tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed mb-4 font-light">
                    {pillar.description}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-[#F27D26] uppercase tracking-wider border-t border-white/10 pt-3">
                  {pillar.tag}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Engineering Principles 4-column Strip */}
      <div>
        <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">
          ENGINEERING PRINCIPLES &amp; STANDARDS
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {engineeringPrinciples.map((principle, idx) => (
            <motion.div
              key={principle.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all"
            >
              <span className="text-xl font-black text-[#F27D26] font-mono block mb-2">
                {principle.num}
              </span>
              <h5 className="text-sm font-bold text-white mb-1.5 uppercase font-display">
                {principle.title}
              </h5>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
