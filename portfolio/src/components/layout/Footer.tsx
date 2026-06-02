import { motion } from 'framer-motion'
import { usePortfolio } from '../../hooks/usePortfolio'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const { profile, nav } = usePortfolio()

  return (
    <footer className="relative border-t border-white/5 px-6 py-16">
      <div className="mx-auto mb-12 h-px max-w-7xl accent-gradient opacity-40" />

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <p className="hero-heading text-3xl font-bold">{profile.displayName}</p>
          <p className="mt-2 text-sm text-[#8a8a8a]">{profile.specialization}</p>
          <p className="mt-1 text-sm text-[#8a8a8a]">{profile.location}</p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#8a8a8a]">
            NAVIGATE
          </p>
          <ul className="space-y-2">
            {nav.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-sm text-[#bbccd7] transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#education"
                className="text-sm text-[#bbccd7] transition-colors hover:text-white"
              >
                EDUCATION
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="text-sm text-[#bbccd7] transition-colors hover:text-white"
              >
                ACHIEVEMENTS
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#8a8a8a]">
            REACH OUT
          </p>
          <a
            href={`mailto:${profile.social.email}`}
            className="block text-sm text-[#bbccd7] hover:text-white"
          >
            {profile.social.email}
          </a>
          <a
            href={`tel:${profile.social.phone.replace(/\s/g, '')}`}
            className="mt-2 block text-sm text-[#bbccd7] hover:text-white"
          >
            {profile.social.phone}
          </a>
          <SocialLinks social={profile.social} size="sm" className="mt-4" />
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
        <p className="text-xs text-[#8a8a8a]">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <motion.p
          className="text-xs text-[#8a8a8a]"
          whileHover={{ color: '#bbccd7' }}
        >
          Built with{' '}
          <span className="accent-gradient-text font-medium">React + Tailwind CSS</span>
        </motion.p>
      </div>
    </footer>
  )
}
