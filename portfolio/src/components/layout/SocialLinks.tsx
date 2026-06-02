import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import type { SocialLinks as SocialLinksType } from '../../types/portfolio'

interface SocialLinksProps {
  social: SocialLinksType
  size?: 'sm' | 'md'
  className?: string
}

const iconMap = [
  { key: 'github' as const, Icon: GitHubIcon, label: 'GitHub' },
  { key: 'linkedin' as const, Icon: LinkedInIcon, label: 'LinkedIn' },
  { key: 'email' as const, Icon: Mail, label: 'Email' },
  { key: 'phone' as const, Icon: Phone, label: 'Phone' },
]

export function SocialLinks({ social, size = 'md', className = '' }: SocialLinksProps) {
  const dim = size === 'sm' ? 'h-9 w-9' : 'h-11 w-11'
  const iconSize = size === 'sm' ? 16 : 18

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {iconMap.map(({ key, Icon, label }) => {
        const value = social[key]
        if (!value) return null

        const href =
          key === 'email'
            ? `mailto:${value}`
            : key === 'phone'
              ? `tel:${value.replace(/\s/g, '')}`
              : value

        return (
          <motion.a
            key={key}
            href={href}
            target={key === 'email' || key === 'phone' ? undefined : '_blank'}
            rel={key === 'email' || key === 'phone' ? undefined : 'noopener noreferrer'}
            aria-label={label}
            className={`glass-card flex ${dim} items-center justify-center rounded-full text-[#bbccd7] transition-colors hover:text-white`}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={iconSize} />
          </motion.a>
        )
      })}
    </div>
  )
}
