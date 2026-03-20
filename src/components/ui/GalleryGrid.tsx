import { motion } from 'framer-motion'
import { galleryItems } from '@/data/gallery'

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
      {galleryItems.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className={`relative overflow-hidden rounded-2xl group ${item.span}`}
        >
          <img
            src={item.image}
            alt={item.alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        </motion.div>
      ))}
    </div>
  )
}
