import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BackgroundEffects } from './components/layout/BackgroundEffects'
import { CursorGlow } from './components/layout/CursorGlow'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { CoverLetter } from './components/layout/CoverLetter'

import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { PublicationsSection } from './components/sections/PublicationsSection'
import { CertificationsSection } from './components/sections/CertificationsSection'
import { EducationSection } from './components/sections/EducationSection'
import { AchievementsSection } from './components/sections/AchievementsSection'
import { ContactSection } from './components/sections/ContactSection'

function App() {
  const [showCoverLetter, setShowCoverLetter] = useState(false)

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-white">
      <BackgroundEffects />
      <CursorGlow />
      <Navbar onOpenCoverLetter={() => setShowCoverLetter(true)} />
      
      <main className="relative z-10">
        <HeroSection onOpenCoverLetter={() => setShowCoverLetter(true)} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <PublicationsSection />
        <CertificationsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />

      <AnimatePresence>
        {showCoverLetter && (
          <CoverLetter onComplete={() => setShowCoverLetter(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
