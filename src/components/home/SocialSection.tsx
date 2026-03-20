import { Section } from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

const socials = [
  { label: 'Instagram', icon: Instagram },
  { label: 'Twitter', icon: Twitter },
  { label: 'Facebook', icon: Facebook },
  { label: 'Youtube', icon: Youtube },
]

export function SocialSection() {
  return (
    <Section variant="paper" className="!py-12 md:!py-16">
      <div className="text-center">
        <h2 className="section-heading text-xl sm:text-2xl text-brand-800">Let's Socialize</h2>
        <div className="mt-8 flex items-center justify-center gap-8 sm:gap-12">
          {socials.map((social, i) => (
            <motion.span
              key={social.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 text-center cursor-default"
              aria-label={`${social.label} (coming soon)`}
              title="Social links coming soon"
            >
              <span className="w-14 h-14 rounded-full bg-slate-200/80 flex items-center justify-center text-brand-700 opacity-70">
                <social.icon className="w-7 h-7" aria-hidden />
              </span>
              <span className="text-xs font-medium text-slate-500">{social.label}</span>
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  )
}
