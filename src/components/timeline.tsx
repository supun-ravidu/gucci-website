'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-neutral-300 to-neutral-300" />

      <div className="space-y-16">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:gap-8`}
            >
              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-full md:w-5/12 ${
                  isEven ? 'md:text-right' : 'md:text-left'
                } text-left`}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="text-3xl font-bold text-red-600 mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </motion.div>

              {/* Center Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  delay: index * 0.2 + 0.3
                }}
                viewport={{ once: true }}
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center z-10 shadow-lg"
              >
                <Calendar className="w-8 h-8 text-white" />
              </motion.div>

              {/* Spacer for alignment */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
