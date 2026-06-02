import { BackgroundEffects } from './components/layout/BackgroundEffects'
import { CursorGlow } from './components/layout/CursorGlow'
import { Footer } from './components/layout/Footer'

import { Navbar } from './components/layout/Navbar'
import { AboutSection } from './components/sections/AboutSection'
import { AchievementsSection } from './components/sections/AchievementsSection'
import { ContactSection } from './components/sections/ContactSection'
import { EducationSection } from './components/sections/EducationSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-white">
      <BackgroundEffects />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
