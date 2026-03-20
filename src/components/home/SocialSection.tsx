import { Section } from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

const socials = [
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'Twitter', icon: Twitter, href: '#' },
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'Youtube', icon: Youtube, href: '#' },
]

export function SocialSection() {
  return (
    <Section dark className="!py-12 md:!py-16">
      <div className="text-center">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-[0.15em] text-white">
          Let's Socialize
        </h2>
        <div className="mt-8 flex items-center justify-center gap-8 sm:gap-12">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-400/20 transition-colors">
                <social.icon className="w-7 h-7 text-white group-hover:text-accent-300 transition-colors" />
              </div>
              <span className="text-xs font-medium text-blue-200/50 group-hover:text-accent-300 transition-colors">
                {social.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  )
}
