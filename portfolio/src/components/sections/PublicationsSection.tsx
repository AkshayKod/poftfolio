import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Sparkles, CheckCircle2, Award, Download, FileText, ExternalLink, Eye, X } from 'lucide-react'
import { usePortfolio } from '../../hooks/usePortfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { RevealOnScroll } from '../ui/RevealOnScroll'

export function PublicationsSection() {
  const { publications } = usePortfolio()
  const [modalImg, setModalImg] = useState<{ src: string; title: string } | null>(null)

  if (!publications || publications.length === 0) return null

  return (
    <section id="publications" className="relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="05"
          title="Research & Publications"
          subtitle="Peer-reviewed conference presentations & verified certificates"
        />

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <RevealOnScroll key={pub.id} delay={index * 0.1}>
              <motion.div
                className="glass-card gradient-border relative overflow-hidden rounded-2xl p-8 md:p-10"
                whileHover={{ y: -4, borderColor: 'rgba(0, 255, 135, 0.4)' }}
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl" />
                
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg accent-gradient text-black">
                      <BookOpen size={20} className="text-black" />
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                        <Sparkles size={12} /> IEEE Associated Conference
                      </span>
                    </div>
                  </div>
                  <span className="font-mono rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-[#8a8a8a]">
                    {pub.date}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
                    {pub.title}
                  </h3>
                  
                  <div className="mt-4 flex flex-col gap-2 text-sm text-[#bbccd7]">
                    <p className="flex items-center gap-2 font-medium text-emerald-300">
                      <Award size={16} />
                      {pub.conference}
                    </p>
                    <p className="text-xs text-[#8a8a8a] md:text-sm">
                      {pub.association}
                    </p>
                  </div>

                  <p className="bio-text mt-5 text-base leading-relaxed text-[#bbccd7] md:text-lg">
                    {pub.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#bbccd7] transition-all hover:border-emerald-500/40 hover:text-white"
                      >
                        <CheckCircle2 size={12} className="text-emerald-400" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                    {pub.certificateImage && (
                      <motion.button
                        onClick={() => setModalImg({ src: pub.certificateImage!, title: 'IEEE Conference Presentation Certificate — Akshay G' })}
                        className="accent-gradient inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20"
                        whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(16,185,129,0.4)' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Eye size={16} />
                        <span>View Presentation Certificate</span>
                      </motion.button>
                    )}

                    {pub.paperPdf && (
                      <>
                        <motion.a
                          href={pub.paperPdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-card inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-colors"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FileText size={16} className="text-cyan-400" />
                          <span>View Document (PDF)</span>
                          <ExternalLink size={14} className="text-[#8a8a8a]" />
                        </motion.a>

                        <motion.a
                          href={pub.paperPdf}
                          download="Akshay_G_Real_Time_Sign_Language_Recognition_IEEE.pdf"
                          className="glass-card inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#bbccd7] hover:text-white transition-colors"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Download size={15} />
                          <span>Download Paper</span>
                        </motion.a>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Certificate Modal Lightbox */}
        <AnimatePresence>
          {modalImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalImg(null)}
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
                  <h4 className="font-semibold text-white text-base md:text-lg">{modalImg.title}</h4>
                  <button
                    onClick={() => setModalImg(null)}
                    className="rounded-full bg-white/10 p-1.5 text-[#8a8a8a] hover:bg-white/20 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="overflow-auto max-h-[75vh] flex justify-center">
                  <img
                    src={modalImg.src}
                    alt={modalImg.title}
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
