import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ShieldCheck, Eye, FileText, ExternalLink, X } from 'lucide-react'
import { usePortfolio } from '../../hooks/usePortfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { staggerContainer, scaleIn } from '../../utils/motion'

export function CertificationsSection() {
  const { certifications } = usePortfolio()
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string } | null>(null)

  if (!certifications || certifications.length === 0) return null

  return (
    <section id="certifications" className="relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="06"
          title="Certifications"
          subtitle="Professional training & verified simulations"
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={scaleIn}
              className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 md:p-8"
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-40" />

              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                    <ShieldCheck size={26} />
                  </div>
                  <span className="font-mono rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#8a8a8a]">
                    {cert.year}
                  </span>
                </div>

                <div className="mt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    {cert.issuer}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-white md:text-xl">
                    {cert.title}
                  </h3>
                </div>

                {cert.image && (
                  <div className="mt-5">
                    <motion.button
                      onClick={() => setSelectedImg({ src: cert.image!, title: `${cert.title} — ${cert.issuer}` })}
                      className="glass-card inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-emerald-300 border border-emerald-500/20 bg-emerald-950/20 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Eye size={14} className="text-emerald-400" />
                      <span>View Document / Certificate</span>
                    </motion.button>
                  </div>
                )}

                {cert.pdfUrl && (
                  <div className="mt-5">
                    <motion.a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card inline-flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-950/20 px-4 py-2 text-xs font-semibold text-cyan-300 transition-colors hover:border-cyan-500/40 hover:bg-cyan-500/10"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FileText size={14} className="text-cyan-400" />
                      <span>View PDF</span>
                      <ExternalLink size={13} className="text-[#8a8a8a]" />
                    </motion.a>
                  </div>
                )}
              </div>

              {cert.topics && cert.topics.length > 0 && (
                <div className="mt-6 border-t border-white/5 pt-4">
                  <p className="text-xs text-[#8a8a8a] mb-2 font-mono">Key Competencies:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1 text-xs text-[#bbccd7]"
                      >
                        <CheckCircle size={11} className="text-emerald-400/80" />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Modal Viewer */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-[#121212] p-4 shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <h4 className="font-semibold text-white text-base md:text-lg">{selectedImg.title}</h4>
                  <button
                    onClick={() => setSelectedImg(null)}
                    className="rounded-full bg-white/10 p-1.5 text-[#8a8a8a] hover:bg-white/20 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="overflow-auto max-h-[75vh] flex justify-center">
                  <img
                    src={selectedImg.src}
                    alt={selectedImg.title}
                    className="rounded-lg object-contain max-h-[72vh] w-auto shadow-md"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
