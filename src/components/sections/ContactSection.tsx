import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraphicsLayer, RingSet, TypeWatermark, DotGrid } from '../ui/BackgroundGraphics'
import { FadeUp } from '../ui/Animations'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const subject = encodeURIComponent(form.subject || 'Portfolio Inquiry')
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:acharyaakshay367@gmail.com?subject=${subject}&body=${body}`
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 4000)
  }

  const FIELDS: { num: string; name: keyof FormState; label: string; type?: string; tag?: string }[] = [
    { num: '01', name: 'name', label: 'YOUR NAME', type: 'text' },
    { num: '02', name: 'email', label: 'YOUR EMAIL', type: 'email' },
    { num: '03', name: 'subject', label: 'SUBJECT', type: 'text' },
    { num: '04', name: 'message', label: 'MESSAGE', tag: 'textarea' },
  ]

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Background graphics */}
      <GraphicsLayer>
        <RingSet
          className="right-[-12%] bottom-[-14%]"
          size="min(72vw, 560px)"
          color="var(--border)"
          opacity={0.8}
          count={4}
        />
        <DotGrid className="left-[5%] top-[12%] w-44 h-44 graphic-fade hidden md:block" opacity={0.4} />
        <TypeWatermark
          text="10"
          position="top-right"
          size="clamp(8rem, 26vw, 24rem)"
          opacity={0.05}
          italic
        />
      </GraphicsLayer>
      {/* Header */}
      <FadeUp>
        <div
          className="section-pad-x flex items-center justify-between"
          style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: '2rem' }}
        >
          <span className="text-label">10 / CONTACT</span>
          <span className="text-label hidden md:block">GET IN TOUCH</span>
        </div>
      </FadeUp>

      {/* Dramatic CTA heading */}
      <div className="section-pad-x" style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <FadeUp>
          <h2
            className="text-hero"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 13vw, 13rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.04em',
            }}
          >
            <span style={{ color: 'var(--foreground)', fontWeight: 800 }}>LET'S</span>
            <br />
            <span
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(100deg, var(--foreground) 0%, var(--foreground) 45%, var(--accent) 75%, var(--accent) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              TALK.
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="text-body mt-6 max-w-lg"
            style={{ fontSize: '1rem', lineHeight: 1.75 }}
          >
            Open to full-time opportunities, freelance projects, collaborations,
            and interesting conversations about technology and product building.
          </p>
        </FadeUp>
      </div>

      {/* Two column layout */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        {/* Left: form */}
        <FadeUp>
          <div
            className="p-8 lg:p-12"
            style={{ borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {FIELDS.map(field => (
                <div key={field.num} className="relative">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-number">{field.num}</span>
                    <label
                      htmlFor={field.name}
                      className="text-label"
                      style={{ fontSize: '0.55rem' }}
                    >
                      {field.label}
                    </label>
                  </div>
                  {field.tag === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      className="editorial-input"
                      placeholder={`Enter ${field.label.toLowerCase()}...`}
                      rows={4}
                      required
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={form[field.name]}
                      onChange={handleChange}
                      className="editorial-input"
                      placeholder={`Enter ${field.label.toLowerCase()}...`}
                      required
                    />
                  )}
                </div>
              ))}

              <motion.button
                type="submit"
                className="btn-primary w-full justify-center"
                disabled={status === 'sending' || status === 'sent'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                data-cursor="SEND"
              >
                {status === 'sent' ? 'MESSAGE SENT ✓' : status === 'sending' ? 'SENDING...' : 'SEND MESSAGE ↗'}
              </motion.button>
            </form>
          </div>
        </FadeUp>

        {/* Right: contact details */}
        <FadeUp delay={0.1}>
          <div
            className="p-8 lg:p-12 flex flex-col justify-between"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            {/* Direct contact */}
            <div className="space-y-8">
              <div>
                <p className="text-label mb-3">EMAIL</p>
                <a
                  href="mailto:acharyaakshay367@gmail.com"
                  className="font-display font-bold uppercase"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)',
                    letterSpacing: '-0.01em',
                    color: 'var(--foreground)',
                    transition: 'color 0.2s',
                  }}
                  data-cursor="EMAIL"
                >
                  acharyaakshay367@gmail.com
                </a>
              </div>

              <div>
                <p className="text-label mb-3">PHONE</p>
                <a
                  href="tel:+919141030375"
                  className="font-mono"
                  style={{ fontSize: '1rem', color: 'var(--foreground)' }}
                  data-cursor="CALL"
                >
                  +91 9141030375
                </a>
              </div>

              <div>
                <p className="text-label mb-3">LOCATION</p>
                <p className="font-mono" style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
                  Mangalore, Karnataka, India
                </p>
              </div>

              <div>
                <p className="text-label mb-3">SOCIAL</p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: 'GITHUB', href: 'https://github.com/AkshayKod' },
                    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/akshay-g-55821b270' },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase"
                      style={{ color: 'var(--foreground)', transition: 'color 0.2s' }}
                      data-cursor="OPEN"
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--foreground)')}
                    >
                      {s.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Resume download */}
            <div className="mt-12">
              <p className="text-label mb-3">DOCUMENTS</p>
              <div className="flex flex-col gap-2">
                <a
                  href="/Akshay_G_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs inline-flex"
                  data-cursor="DOWNLOAD"
                >
                  DOWNLOAD RÉSUMÉ ↗
                </a>
                <a
                  href="/Akshay_G_Cover_Letter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs inline-flex mt-2"
                  data-cursor="DOWNLOAD"
                >
                  COVER LETTER ↗
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
