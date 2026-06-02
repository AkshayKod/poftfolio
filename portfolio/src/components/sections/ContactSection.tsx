import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { usePortfolio } from '../../hooks/usePortfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { MagneticButton } from '../ui/MagneticButton'
import { SocialLinks } from '../layout/SocialLinks'

function FloatingField({
  id,
  label,
  type = 'text',
  required = true,
  multiline = false,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
  multiline?: boolean
}) {
  const className =
    'peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pt-6 pb-2 text-white outline-none transition-all focus:border-emerald-500/50 focus:shadow-[0_0_20px_rgba(16,185,129,0.2)]'
  const labelClass =
    'pointer-events-none absolute left-4 top-4 text-sm text-[#8a8a8a] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-emerald-400 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs'

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          id={id}
          name={id}
          required={required}
          rows={5}
          placeholder=" "
          className={`${className} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          placeholder=" "
          className={className}
        />
      )}
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
    </div>
  )
}

export function ContactSection() {
  const { profile } = usePortfolio()
  const { social } = profile
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: social.email, href: `mailto:${social.email}` },
    {
      icon: Phone,
      label: 'Phone',
      value: social.phone,
      href: `tel:${social.phone.replace(/\s/g, '')}`,
    },
    { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
  ]

  return (
    <section id="contact" className="relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading number="07" title="Contact" subtitle="Let's build something together" />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card flex items-center gap-4 rounded-xl p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg accent-gradient">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8a8a8a]">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-[#bbccd7] transition-colors hover:text-white"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#bbccd7]">{value}</p>
                  )}
                </div>
              </div>
            ))}
            <SocialLinks social={social} />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-card gradient-border space-y-6 rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <FloatingField id="name" label="Name" />
            <FloatingField id="email" label="Email" type="email" />
            <FloatingField id="message" label="Message" multiline />

            <MagneticButton type="submit" variant="primary">
              {sent ? 'Opening mail…' : 'Send Message'}
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
