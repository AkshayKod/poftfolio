import { motion } from 'framer-motion'
import { FileDown, X } from 'lucide-react'
import { MagneticButton } from '../ui/MagneticButton'
import { usePortfolio } from '../../hooks/usePortfolio'

interface CoverLetterProps {
  onComplete: () => void
}

export function CoverLetter({ onComplete }: CoverLetterProps) {
  const { profile } = usePortfolio()

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0C0C]/90 p-4 backdrop-blur-xl md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-emerald-600/10 blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[90px]"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="glass-card gradient-border relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 shadow-2xl md:p-12"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <button
          type="button"
          onClick={onComplete}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close cover letter"
        >
          <X size={20} />
        </button>

        <div className="mb-8 border-b border-white/10 pb-6 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Formal Application</span>
          <h2 className="hero-heading mt-1 text-3xl font-bold tracking-tight md:text-5xl">
            Cover Letter
          </h2>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-base text-[#bbccd7] md:text-lg leading-relaxed">
          <p className="font-semibold text-white">Dear Hiring Manager,</p>
          <p>
            I am writing to apply for the Software Engineer position at your company. I am a fresher with strong interest in learning and building my career in the software industry. I am hardworking, quick to learn new skills, and enjoy working in a team environment.
          </p>
          <p>
            I am confident that with proper training, I can learn quickly and contribute effectively to your company. I am eager to improve my knowledge, take on new challenges, and grow along with the organization.
          </p>
          <p>
            Thank you for your time and consideration. I would welcome the opportunity to discuss my application further.
          </p>
          <div className="pt-4 font-semibold text-white">
            <p>Sincerely,</p>
            <p className="mt-1 text-xl accent-gradient-text">Akshay G</p>
            <p className="text-xs font-normal text-[#8a8a8a] mt-1">{profile.location} • {profile.social.phone} • {profile.social.email}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <a
            href={profile.coverLetterPdf}
            download="Akshay_G_Cover_Letter.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 transition-colors hover:bg-emerald-500/20"
          >
            <FileDown size={15} /> Download PDF
          </a>
          <MagneticButton onClick={onComplete}>Close Window</MagneticButton>
        </div>
      </motion.div>
    </motion.div>
  )
}
