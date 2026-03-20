import { motion } from 'framer-motion'

interface MediaCardProps {
  image: string
  title: string
  description?: string
  tag?: string
  className?: string
  aspectRatio?: 'square' | 'video' | 'portrait'
  overlay?: boolean
}

export function MediaCard({
  image,
  title,
  description,
  tag,
  className = '',
  aspectRatio = 'video',
  overlay = true,
}: MediaCardProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`group relative overflow-hidden rounded-2xl ${aspectClasses[aspectRatio]} ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      )}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        {tag && (
          <span className="inline-block mb-2 px-2.5 py-0.5 text-xs font-semibold rounded-full gradient-accent text-white">
            {tag}
          </span>
        )}
        <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-blue-200/60 line-clamp-2">{description}</p>
        )}
      </div>
    </motion.div>
  )
}
