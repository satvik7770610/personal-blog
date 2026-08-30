import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Cloud, Server, Container, Database } from 'lucide-react';
import { certificationsData } from '../data/portfolio';

export const Certifications: React.FC = () => {
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'aws':
        return <Cloud className="w-5 h-5 text-[#F27D26]" />;
      case 'devops':
        return <Container className="w-5 h-5 text-[#F27D26]" />;
      case 'java':
        return <Server className="w-5 h-5 text-[#F27D26]" />;
      case 'cloud':
        return <Database className="w-5 h-5 text-[#F27D26]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#F27D26]" />;
    }
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-12 w-full max-w-[1400px] mx-auto relative">
      <div className="flex flex-col mb-12 border-b border-white/10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#F27D26] text-xs font-mono mb-2 tracking-widest uppercase flex items-center gap-2"
        >
          <span>— CREDENTIALS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-black uppercase text-white font-display"
        >
          Industry Verified <span className="text-stroke-light">Certifications</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="editorial-card p-6 flex flex-col justify-between group hover:border-[#F27D26]/50 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 border border-white/20 bg-white/[0.03] flex items-center justify-center group-hover:border-[#F27D26] transition-colors">
                  {getBadgeIcon(cert.type)}
                </div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  {cert.date}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white uppercase font-display mb-1 group-hover:text-[#F27D26] transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-[#F27D26] font-mono mb-2">{cert.issuer}</p>
              <p className="text-xs text-white/60 leading-relaxed font-light mb-4">
                {cert.skills}
              </p>
            </div>

            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                id={`cert-link-${cert.id}`}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white/60 hover:text-white pt-3 border-t border-white/10 transition-colors"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
