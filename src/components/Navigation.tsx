import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, ArrowUpRight, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/portfolio';

interface NavigationProps {
  onOpenResume: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { num: '01', label: 'About', href: '#about' },
    { num: '02', label: 'Experience', href: '#experience' },
    { num: '03', label: 'Skills', href: '#skills' },
    { num: '04', label: 'Projects', href: '#projects' },
    { num: '05', label: 'GitHub', href: '#github' },
    { num: '06', label: 'Education', href: '#education' },
    { num: '07', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scroll state
      setIsScrolled(window.scrollY > 40);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Active section spy
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'github', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-[#F27D26] via-amber-400 to-[#F27D26] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 lg:px-12 w-full max-w-[1400px] mx-auto transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`relative transition-all duration-300 px-5 sm:px-7 py-3 flex items-center justify-between border ${
            isScrolled
              ? 'bg-[#050505]/90 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
              : 'bg-[#050505]/50 backdrop-blur-sm border-white/10'
          }`}
        >
          {/* Logo / Personal Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            id="nav-brand-logo"
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 border border-white/20 bg-white/[0.03] flex items-center justify-center text-[#F27D26] font-mono text-xs font-bold group-hover:border-[#F27D26] transition-all">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#e5e5e5] uppercase font-mono group-hover:text-[#F27D26] transition-colors">
                M.S.S. REDDY
              </span>
              <span className="text-[9px] text-white/40 font-mono tracking-widest uppercase">
                ENGINEERING
              </span>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-[0.15em] font-mono font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`py-1 transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white border-b-2 border-[#F27D26]'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  <span className="text-[#F27D26] text-[10px]">{item.num}.</span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              id="nav-resume-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-widest text-white/80 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 transition-all"
            >
              <FileText className="w-3 h-3 text-[#F27D26]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              id="nav-cta-contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-mono uppercase tracking-widest font-bold text-black bg-[#F27D26] hover:bg-[#ff8f3d] transition-all shadow-[0_0_15px_rgba(242,125,38,0.3)]"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="lg:hidden p-2 text-white/80 hover:text-white border border-white/10 bg-white/[0.03]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 bg-[#050505]/95 backdrop-blur-xl border border-white/15 p-6 shadow-2xl lg:hidden font-mono"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`py-2 text-sm uppercase tracking-widest flex items-center justify-between border-b border-white/5 ${
                      isActive ? 'text-[#F27D26] font-bold' : 'text-white/70'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#F27D26] text-xs">{item.num}.</span>
                      {item.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  </a>
                );
              })}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 px-4 text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-white/20 text-white bg-white/[0.03]"
                >
                  <FileText className="w-4 h-4 text-[#F27D26]" />
                  <span>View Official Resume</span>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-2.5 px-4 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 bg-[#F27D26] text-black"
                >
                  <span>Initiate Contact</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
