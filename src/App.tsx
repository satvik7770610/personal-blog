import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHubSection } from './components/GitHubSection';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CustomCursor } from './components/CustomCursor';
import { Toast } from './components/Toast';
import { ThreeCanvas } from './components/ThreeCanvas';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] relative font-sans selection:bg-[#F27D26]/30 selection:text-[#F27D26]">
      {/* Interactive 3D Canvas running throughout the entire page */}
      <ThreeCanvas />

      {/* Background Dot Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.035] subtle-dot-grid z-0" />

      {/* Custom Spring Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navigation onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GitHubSection />
        <Education />
        <Certifications />
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Feedback Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
