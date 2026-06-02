import { motion } from 'framer-motion'
import { MagneticButton } from '../ui/MagneticButton'

interface CoverLetterProps {
  onComplete: () => void
}

export function CoverLetter({ onComplete }: CoverLetterProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0C0C]/90 p-4 backdrop-blur-xl md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
        className="glass-card relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 p-8 shadow-2xl md:p-12"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mb-8 border-b border-white/10 pb-6 text-center md:text-left">
          <h2 className="hero-heading text-3xl font-bold tracking-tight md:text-5xl">
            Cover Letter
          </h2>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-base text-[#bbccd7] md:text-lg leading-relaxed">
          <p>Dear Hiring Manager,</p>
          <p>
            I am writing to apply for the Software Engineer position at your company. I am a fresher with a strong interest in learning and building my career in the software industry. I am hardworking, quick to learn new skills, and enjoy working in a team environment.
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
          </div>
        </div>

        <div className="mt-12 flex justify-center md:justify-end">
          <MagneticButton onClick={onComplete}>Continue to Portfolio</MagneticButton>
        </div>
      </motion.div>
    </motion.div>
  )
}
