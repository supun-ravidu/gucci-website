'use client';

import { gucciImages } from '@/data/gucciImages';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function GucciGallery() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
      {gucciImages.map((img, i) => (
        <motion.figure
          key={img.src}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, type: 'spring', stiffness: 140 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative mb-6 overflow-hidden rounded-2xl shadow-md break-inside-avoid group bg-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.25 }}
              className={`absolute inset-0 bg-gradient-to-br ${img.accent} transition-opacity duration-500`}
            />
          </div>
          <Image
            src={img.src}
            alt={img.title}
            width={800}
            height={1000}
            loading={i < 3 ? 'eager' : 'lazy'}
            className="w-full h-auto object-cover object-center transition-all duration-500 group-hover:brightness-110"
          />
          <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.02 }}
              viewport={{ once: true }}
              className="text-white font-semibold text-sm tracking-wide"
            >
              {img.title}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.02 }}
              viewport={{ once: true }}
              className="text-neutral-200 text-xs leading-relaxed"
            >
              {img.description}
            </motion.p>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
