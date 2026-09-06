import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CustomCursor } from './components/layout/CustomCursor'
import { LoadingScreen } from './components/layout/LoadingScreen'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <div key="main" className="relative min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
            <Navbar />
            <main>
              <HeroSection />
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
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
