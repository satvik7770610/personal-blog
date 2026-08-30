import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Send,
  Check,
  Copy,
  Github,
  Linkedin,
  Phone,
  MapPin,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import { personalData } from '../data/portfolio';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 lg:px-12 w-full max-w-[1400px] mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col mb-16 border-b border-white/10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#F27D26] text-xs font-mono mb-3 tracking-widest uppercase flex items-center gap-2"
        >
          <span>— 07. CONTACT &amp; CONNECT</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white mb-4 font-display"
        >
          Let&apos;s Build Something<br />
          <span className="text-stroke-light">Impactful.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl text-white/60 text-base sm:text-lg leading-relaxed font-light"
        >
          Whether you have a software engineering role, a distributed systems challenge, or a cloud architecture initiative, I&apos;d love to connect.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
        {/* Left Column: Direct info & Quick copy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 h-full flex flex-col"
        >
          <div className="editorial-card p-6 sm:p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-white mb-2 font-display uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F27D26]" />
                Direct Communication
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mb-6 leading-relaxed font-light">
                Feel free to reach out directly via email, phone, or connect through LinkedIn and GitHub.
              </p>

              {/* Direct Info list */}
              <div className="space-y-3 mb-6 font-mono text-xs">
                {personalData.phone && (
                  <div className="p-3.5 bg-white/[0.02] border border-white/10 flex items-center justify-between">
                    <span className="text-white/40 uppercase tracking-widest text-[10px]">PHONE</span>
                    <span className="text-white font-semibold flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#F27D26]" />
                      {personalData.phone}
                    </span>
                  </div>
                )}

                <div className="p-3.5 bg-white/[0.02] border border-white/10 flex items-center justify-between">
                  <span className="text-white/40 uppercase tracking-widest text-[10px]">LOCATION</span>
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F27D26]" />
                    {personalData.location}
                  </span>
                </div>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 bg-white/[0.02] border border-white/10 mb-6">
                <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1.5">
                  PRIMARY EMAIL
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs sm:text-sm font-mono text-[#F27D26] font-bold truncate">
                    {personalData.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    id="copy-email-btn"
                    className="p-2 border border-white/10 hover:border-[#F27D26] bg-white/[0.03] text-white/70 hover:text-white transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                id="contact-linkedin-link"
                className="p-3.5 bg-white/[0.02] border border-white/10 hover:border-[#F27D26] flex items-center justify-between text-xs text-white/70 hover:text-[#F27D26] transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-white/50 group-hover:text-[#F27D26]" />
                  <span className="uppercase tracking-wider">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                id="contact-github-link"
                className="p-3.5 bg-white/[0.02] border border-white/10 hover:border-[#F27D26] flex items-center justify-between text-xs text-white/70 hover:text-[#F27D26] transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-white/50 group-hover:text-[#F27D26]" />
                  <span className="uppercase tracking-wider">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 editorial-card p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 pb-4 mb-6 border-b border-white/10 font-mono">
              <MessageSquare className="w-4 h-4 text-[#F27D26]" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Send a Direct Message</h3>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center bg-white/[0.02] border border-emerald-500/30">
                <div className="w-12 h-12 border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white font-display uppercase mb-1">Message Sent!</h4>
                <p className="text-xs text-white/60 mb-4 font-light">
                  Thank you for reaching out, Satvik will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#F27D26] border border-[#F27D26]/40 hover:bg-[#F27D26] hover:text-black transition-colors"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[10px] text-white/50 uppercase tracking-wider mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-3 bg-white/[0.02] border border-white/10 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-[#F27D26] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] text-white/50 uppercase tracking-wider mb-1.5">
                      YOUR EMAIL *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-3 bg-white/[0.02] border border-white/10 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-[#F27D26] transition-all font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-[10px] text-white/50 uppercase tracking-wider mb-1.5">
                    SUBJECT / TOPIC
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity"
                    className="w-full px-3.5 py-3 bg-white/[0.02] border border-white/10 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-[#F27D26] transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[10px] text-white/50 uppercase tracking-wider mb-1.5">
                    MESSAGE *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-3.5 py-3 bg-white/[0.02] border border-white/10 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-[#F27D26] transition-all font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-form-btn"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-xs uppercase tracking-widest font-bold text-black bg-[#F27D26] hover:bg-[#ff8f3d] transition-all shadow-[0_0_15px_rgba(242,125,38,0.3)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
