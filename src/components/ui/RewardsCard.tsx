import type { LucideIcon } from 'lucide-react'

interface RewardsCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function RewardsCard({ title, description, icon: Icon }: RewardsCardProps) {
  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6 hover:border-accent-400/30 transition-colors group">
      <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 shadow-lg shadow-accent-400/20 group-hover:shadow-accent-400/40 transition-shadow">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-blue-200/50 leading-relaxed">{description}</p>
    </div>
  )
}
