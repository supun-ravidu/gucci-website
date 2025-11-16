'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { Crown, Sparkles, History, ShoppingBag, Users, TrendingUp, ChevronDown, Award, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FloatingParticles } from '@/components/floating-particles';
import { GucciGallery } from '@/components/gucci-gallery';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
            backgroundSize: '100% 100%'
          }}
        />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 origin-left z-[100]"
        style={{ scaleX: smoothProgress }}
      />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 origin-left z-[100] blur-sm"
        style={{ scaleX: smoothProgress }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-red-600/20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-amber-500/5" />
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.2 }}
            >
              <Crown className="w-8 h-8 text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider text-white">GUCCI</span>
              <span className="text-[8px] text-red-500 tracking-widest uppercase">Italian Luxury</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8 text-sm font-medium"
          >
            {['Heritage', 'Icons', 'Products', 'Culture'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-white/70 hover:text-red-500 transition-all relative group"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-red-600 to-amber-500 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://wallpapers.com/images/high/yellow-ladies-gucci-4k-tcu807mmitbxtz7y.webp"
            alt="Gucci fashion background"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          
          {/* Animated accents on top of image */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-neutral-100/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            style={{ opacity, scale, y }}
            className="text-center relative"
          >
            {/* Background Image for entire content area */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden -z-10 -mx-6 -my-8 md:-mx-12 md:-my-12">
              <Image
                src="https://wallpapers.com/images/high/yellow-ladies-gucci-4k-tcu807mmitbxtz7y.webp"
                alt="Gucci fashion background"
                fill
                className="object-cover object-center"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/75 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 px-6 py-8 md:px-12 md:py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full mb-6"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                <span className="text-sm font-medium">Italian Luxury Excellence</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-7xl md:text-9xl font-bold mb-6 tracking-tight text-white drop-shadow-2xl"
              >
                {['G', 'U', 'C', 'C', 'I'].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ 
                      scale: 1.2, 
                      color: "#fbbf24",
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="inline-block cursor-pointer"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-2xl font-medium"
              >
                An iconic Italian luxury fashion house, renowned for high-end leather goods, 
                ready-to-wear clothing, accessories, and fragrances
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-4 justify-center flex-wrap"
              >
                <Button 
                  variant="default" 
                  size="lg"
                  onClick={() => document.getElementById('heritage')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Heritage
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('icons')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Discover Icons
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, y: { duration: 1.5, repeat: Infinity } }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-neutral-400" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-neutral-950 to-black text-white relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(220,38,38,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {[
            { label: 'Founded', value: '1921', icon: Award },
            { label: 'Origin', value: 'Florence', icon: Globe },
            { label: 'Founder', value: 'Guccio Gucci', icon: Crown },
            { label: 'Owner', value: 'Kering SA', icon: Zap }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <stat.icon className="w-8 h-8 text-red-600 group-hover:text-red-500 transition-colors" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-2 text-red-600 group-hover:scale-110 transition-transform"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Heritage Section */}
      <section id="heritage" className="py-20 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://wallpapers.com/images/hd/black-color-background-klz44x5h9f1m2ggg.jpg"
            alt="Heritage background"
            fill
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <History className="w-6 h-6 text-red-600" />
                </motion.div>
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Heritage</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl">A Century of Excellence</h2>
              <div className="space-y-6 text-white/90 leading-relaxed drop-shadow-lg">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Founded in <strong className="text-red-400">1921</strong> by <strong className="text-white">Guccio Gucci</strong> in <strong className="text-white">Florence, Italy</strong>, 
                  the brand was inspired by the luxurious luggage wealthy travelers brought to the Savoy Hotel in London, 
                  where Guccio worked as a bellhop.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  What began as a small leather goods and saddle shop, known for its fine craftsmanship, 
                  has evolved into one of the most influential, recognizable, and valuable luxury brands in the world.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gradient-to-br from-red-900/30 via-neutral-900/30 to-neutral-800/30 backdrop-blur-sm rounded-3xl p-12 h-96 flex items-center justify-center relative overflow-hidden group border border-white/10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="w-32 h-32 text-red-500 opacity-50 group-hover:opacity-80 transition-opacity drop-shadow-2xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Iconic Symbols Section */}
      <section id="icons" className="py-20 px-6 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(220,38,38,0.05) 0px, transparent 2px, transparent 4px, rgba(220,38,38,0.05) 6px)',
          }} />
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Iconic Symbols</h2>
            <p className="text-xl text-white/60">Instantly recognizable marks of luxury and status</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'The Double G Logo',
                description: 'The interlocking G\'s (for Guccio Gucci) became a global symbol of status and luxury.',
                icon: '𝔊𝔊',
                color: 'from-red-500 to-red-600'
              },
              {
                title: 'Green-Red-Green Web',
                description: 'A stripe inspired by a horse\'s girth, a nod to its equestrian heritage.',
                icon: '▓▒▓',
                color: 'from-green-500 to-red-500'
              },
              {
                title: 'The Gucci Flora',
                description: 'A romantic, intricate floral print originally created for Grace Kelly in 1966.',
                icon: '🌸',
                color: 'from-pink-500 to-rose-500'
              },
              {
                title: 'The Horsebit',
                description: 'A metal detail from equestrian hardware that appears on loafers, bags, and accessories.',
                icon: '⚓',
                color: 'from-amber-500 to-yellow-500'
              },
              {
                title: 'The Bamboo Handle',
                description: 'An innovative design from the 1940s, born out of material scarcity during WWII.',
                icon: '🎋',
                color: 'from-emerald-500 to-green-500'
              },
              {
                title: 'Heritage Patterns',
                description: 'Timeless designs that have defined luxury fashion for generations.',
                icon: '◆',
                color: 'from-neutral-500 to-neutral-600'
              }
            ].map((icon, index) => (
              <Card
                key={icon.title}
                initial={{ opacity: 0, y: 20, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                style={{ transformStyle: 'preserve-3d' }}
                className="group relative overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-red-600/10 hover:border-red-600/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${icon.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <CardContent>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-5xl mb-4"
                  >
                    {icon.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">{icon.title}</h3>
                  <p className="text-white/60 leading-relaxed">{icon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-black relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[150px]"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShoppingBag className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Product Range</h2>
            <p className="text-xl text-white/60">Ultra-luxury offerings across categories</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Leather Goods', desc: 'Handbags, wallets, and suitcases', gradient: 'from-amber-900 to-neutral-900' },
              { name: 'Ready-to-Wear', desc: 'Clothing for men and women', gradient: 'from-red-900 to-neutral-900' },
              { name: 'Footwear', desc: 'Loafers, sneakers, and heels', gradient: 'from-neutral-900 to-neutral-800' },
              { name: 'Accessories', desc: 'Belts, sunglasses, scarves, jewelry', gradient: 'from-rose-900 to-neutral-900' },
              { name: 'Beauty', desc: 'Fragrances and cosmetics', gradient: 'from-pink-900 to-neutral-900' },
              { name: 'Home Decor', desc: 'Luxury home furnishings', gradient: 'from-emerald-900 to-neutral-900' },
              { name: 'Watches', desc: 'Swiss-made timepieces', gradient: 'from-blue-900 to-neutral-900' },
              { name: 'Fine Jewelry', desc: 'Precious stones and metals', gradient: 'from-purple-900 to-neutral-900' }
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className={`bg-gradient-to-br ${product.gradient} text-white rounded-xl p-6 cursor-pointer relative overflow-hidden group`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"
                  initial={false}
                />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-2 group-hover:scale-105 transition-transform">{product.name}</h3>
                  <p className="text-sm text-neutral-300 group-hover:text-white transition-colors">{product.desc}</p>
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  ✦
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-24 px-6 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.05)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Iconic Imagery</h2>
            <p className="text-lg text-white/60">Visual expressions of Gucci's craftsmanship, celebrity influence & timeless appeal</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: 'https://www.mytheresa.com/media/1094/1238/100/45/P01119200_b1.jpg',
                title: 'Horsebit 1955 Shoulder Bag',
                desc: 'Iconic horsebit hardware reimagined with modern sophistication and timeless elegance.',
                accent: 'from-amber-500 via-red-500 to-green-600'
              },
              {
                src: 'https://www.mytheresa.com/media/2310/2612/100/e7/P01118016_d3.jpg',
                title: 'Jackie 1961 Small Hobo Bag',
                desc: 'The legendary Jackie bag—soft, structured, and eternally chic.',
                accent: 'from-red-600 via-rose-500 to-neutral-800'
              },
              {
                src: 'https://www.mytheresa.com/media/1094/1238/100/da/P01088193_b1.jpg',
                title: 'GG Marmont Matelassé',
                desc: 'Chevron quilted leather with the iconic double G—a modern classic.',
                accent: 'from-neutral-700 via-neutral-500 to-black'
              },
              {
                src: 'https://www.mytheresa.com/media/1094/1238/100/ef/P01118031_b1.jpg',
                title: 'Dionysus GG Supreme',
                desc: 'Tiger head closure meets monogram canvas—bold, structured, statement-making.',
                accent: 'from-emerald-500 via-amber-600 to-red-600'
              },
              {
                src: 'https://www.mytheresa.com/media/1094/1238/100/1a/P01095579_b1.jpg',
                title: 'Ophidia GG Supreme',
                desc: 'Heritage monogram with web stripe detail—vintage-inspired luxury.',
                accent: 'from-green-600 via-red-500 to-green-700'
              }
            ].map((item, i) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg bg-white"
              >
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.25 }}
                    className={`absolute inset-0 bg-gradient-to-br ${item.accent} transition-opacity duration-500`}
                  />
                </div>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="h-72 w-full object-cover object-center brightness-95 group-hover:brightness-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/0 opacity-60 group-hover:opacity-70 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="text-white text-xl font-bold tracking-tight"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="text-sm text-neutral-200 leading-relaxed"
                  >
                    {item.desc}
                  </motion.p>
                </div>
                {/* Decorative overlay symbol */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 0.15, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute top-4 right-4 text-5xl text-white/40 select-none"
                >
                  ✦
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-black relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Extended Gallery</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Scroll through a curated visual collection highlighting fragrances, craftsmanship, celebrity culture, and iconic design signatures.</p>
          </motion.div>
          <GucciGallery />
        </div>
      </section>

      {/* Revival Era Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-red-950 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent" />
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'linear-gradient(45deg, rgba(220,38,38,0.1) 25%, transparent 25%, transparent 75%, rgba(220,38,38,0.1) 75%)',
            backgroundSize: '60px 60px'
          }}
        />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">2015-2022</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Gucci Revival</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  <strong>Alessandro Michele</strong> was appointed Creative Director in 2015, 
                  introducing a "geek-chic," maximalist, and gender-fluid style.
                </p>
                <p>
                  His bold, quirky, and highly decorative designs resonated deeply with a new, 
                  younger generation of luxury consumers, making Gucci the fastest-growing major 
                  luxury brand at the time.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-red-950/30 backdrop-blur-sm rounded-3xl p-8 border border-red-600/20">
                <h3 className="text-2xl font-bold mb-4">New Era: Sabato De Sarno</h3>
                <p className="mb-4">Appointed in 2023, bringing a shift towards "quiet luxury" and refined elegance.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-300">•</span>
                    <span>Minimalist, sophisticated aesthetic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300">•</span>
                    <span>Focus on impeccable tailoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300">•</span>
                    <span>Timeless, elegant pieces</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cultural Impact Section */}
      <section id="culture" className="py-20 px-6 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-32 h-32 bg-red-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-amber-600/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              <Users className="w-6 h-6 text-red-600" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Cultural Impact</h2>
            <p className="text-xl text-white/60">At the center of fashion, art, and social conversation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Celebrity Endorsements',
                content: 'A long history of being worn by Hollywood icons—from Grace Kelly and Tom Ford-era Madonna to Harry Styles and Jared Leto today.',
                delay: 0
              },
              {
                title: 'Socially Conscious',
                content: 'Vocal about inclusivity, diversity, and sustainability—using recycled materials and committing to carbon neutrality.',
                delay: 0.2
              },
              {
                title: 'Provocative Campaigns',
                content: 'Known for artistic and often surreal advertising campaigns that generate buzz and discussion worldwide.',
                delay: 0.4
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: item.delay, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm rounded-2xl p-8 border border-red-600/10 hover:border-red-600/30 transition-all relative overflow-hidden group"
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"
                />
                <h3 className="text-2xl font-bold mb-4 relative z-10 text-white group-hover:text-red-500 transition-colors">{item.title}</h3>
                <p className="text-white/60 relative z-10 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Designers Hall of Fame */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundImage: 'repeating-conic-gradient(from 0deg, rgba(220,38,38,0.1) 0deg 45deg, transparent 45deg 90deg)',
              backgroundSize: '100% 100%'
            }}
            className="absolute inset-0"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Visionary Designers</h2>
            <p className="text-xl text-white/60">The creative minds who shaped Gucci's legacy</p>
          </motion.div>

          <div className="space-y-16">
            {/* Tom Ford */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-neutral-900 via-red-950/30 to-black backdrop-blur-sm border border-red-600/20 rounded-3xl p-10 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <div className="text-6xl mb-6">🕴️</div>
                    <div className="text-sm text-red-500 font-bold mb-2 uppercase tracking-wider">1994-2004 • The Savior</div>
                    <h3 className="text-4xl font-bold text-white mb-4">Tom Ford</h3>
                    <p className="text-lg text-red-400 mb-6 font-semibold">Porno Chic • Ultra-Glamour • Sexy Minimalism</p>
                    <p className="text-white/70 leading-relaxed mb-6">
                      Closed the infamous logo-mania chapter and injected raw, controlled sex appeal. He used velvet, satin, sleek tailoring, and a dark sensual palette to make Gucci the epitome of cool sophistication.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2" />
                        <div>
                          <div className="text-white font-semibold">Iconic Moment</div>
                          <div className="text-white/60 text-sm">1995 debut show that single-handedly re-established Gucci as a top-tier fashion house</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2" />
                        <div>
                          <div className="text-white font-semibold">Signature</div>
                          <div className="text-white/60 text-sm">Black velvet hip-flare trousers, crisp white shirts, sleek tailoring</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-6"
                >
                  <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-white mb-4">Key Contributions</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500">→</span>
                        <span>Saved Gucci from bankruptcy with provocative, sensual designs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500">→</span>
                        <span>Replaced loud logos with luxurious fabrics and impeccable tailoring</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500">→</span>
                        <span>Created a cultural phenomenon that redefined modern luxury</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-red-950/50 to-black border border-red-600/20 rounded-2xl p-6">
                    <div className="text-red-400 text-sm font-bold mb-2">IMPACT</div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      "He didn't just change the clothes; he created a powerful, provocative image that made Gucci the coolest name in fashion again."
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Alessandro Michele */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="order-2 md:order-1 space-y-6"
                >
                  <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-white mb-4">Philosophy: "More is More"</h4>
                    <p className="text-white/70 mb-4">Self-expression through layering and mixing, rejecting minimalist trends</p>
                    <div className="space-y-3">
                      <div className="bg-emerald-950/30 border border-emerald-600/20 rounded-lg p-4">
                        <div className="text-emerald-400 font-semibold mb-1">The Princetown Loafer</div>
                        <div className="text-white/60 text-sm">Classic loafer with furry backless mule design</div>
                      </div>
                      <div className="bg-purple-950/30 border border-purple-600/20 rounded-lg p-4">
                        <div className="text-purple-400 font-semibold mb-1">Oversized Geek Glasses</div>
                        <div className="text-white/60 text-sm">Key "geek-chic" accessory defining the era</div>
                      </div>
                      <div className="bg-pink-950/30 border border-pink-600/20 rounded-lg p-4">
                        <div className="text-pink-400 font-semibold mb-1">Headbands & Bow Blouses</div>
                        <div className="text-white/60 text-sm">Romantic, vintage-inspired touches</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="order-1 md:order-2 bg-gradient-to-br from-neutral-900 via-emerald-950/30 to-black backdrop-blur-sm border border-emerald-600/20 rounded-3xl p-10 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <div className="text-6xl mb-6">✨</div>
                    <div className="text-sm text-emerald-500 font-bold mb-2 uppercase tracking-wider">2015-2022 • The Alchemist</div>
                    <h3 className="text-4xl font-bold text-white mb-4">Alessandro Michele</h3>
                    <p className="text-lg text-emerald-400 mb-6 font-semibold">Maximalism • Romanticism • Gender Fluidity</p>
                    <p className="text-white/70 leading-relaxed mb-6">
                      Mixed historical references (Renaissance, 70s hippie, 80s punk) with modern, inclusive ethos. Created a romantic, maximalist universe that captivated a new generation.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                        <div>
                          <div className="text-white font-semibold">Revolutionary Approach</div>
                          <div className="text-white/60 text-sm">Threw out the rulebook of "cool" and embraced eclectic self-expression</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                        <div>
                          <div className="text-white font-semibold">Impact</div>
                          <div className="text-white/60 text-sm">Made Gucci the fastest-growing luxury brand, resonating with Gen Z</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Sabato De Sarno */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-black backdrop-blur-sm border border-neutral-600/20 rounded-3xl p-10 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-600/10 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <div className="text-6xl mb-6">🎯</div>
                    <div className="text-sm text-neutral-400 font-bold mb-2 uppercase tracking-wider">2023-Present • The Refiner</div>
                    <h3 className="text-4xl font-bold text-white mb-4">Sabato De Sarno</h3>
                    <p className="text-lg text-neutral-300 mb-6 font-semibold">Quiet Luxury • Pared-Back Sensuality • Precision</p>
                    <p className="text-white/70 leading-relaxed mb-6">
                      A direct reaction to Michele's maximalism. His vision "Gucci Ancora" (Italian for "again") focuses on the essence of the house through quality, fabric, and impeccable tailoring.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-neutral-500 rounded-full mt-2" />
                        <div>
                          <div className="text-white font-semibold">Gucci Ancora</div>
                          <div className="text-white/60 text-sm">New creative code meaning "again," focusing on timeless elegance</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-700 rounded-full mt-2" />
                        <div>
                          <div className="text-white font-semibold">Rosso Ancora</div>
                          <div className="text-white/60 text-sm">Deep burgundy-red signature color replacing eclectic palette</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-6"
                >
                  <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-white mb-4">Key Contributions</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-3">
                        <span className="text-neutral-400">→</span>
                        <span><strong className="text-white">Jackie 1961 Re-edition:</strong> Sleeker, more structured take on the icon</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-neutral-400">→</span>
                        <span><strong className="text-white">Focus on Fabric:</strong> Emphasis on cashmere, silk drape, perfect trouser fit</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-neutral-400">→</span>
                        <span><strong className="text-white">Minimalist Aesthetic:</strong> Responding to changing luxury market dynamics</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Deep Dive */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-amber-950/10 to-black relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[150px]"
          animate={{ y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">The Art of Craftsmanship</h2>
            <p className="text-xl text-white/60">Why Gucci costs what it does—master artisanship revealed</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Bamboo Handle',
                process: 'Hand-Crafted Process',
                desc: 'Still done by hand near Florence. Workers soak bamboo in water, heat it over open flame to make it pliable, then carefully bend it around metal rods. Each handle takes hours of skilled labor, then varnished and polished to perfection.',
                icon: '🎋',
                gradient: 'from-green-600/20 to-emerald-600/20',
                steps: ['Soak in Water', 'Heat Over Flame', 'Bend & Shape', 'Varnish & Polish']
              },
              {
                title: 'Pelle Guccissima',
                process: 'Vegetable-Tanned Leather',
                desc: 'Proprietary full-grain leather known for durability and unique patina. Uses natural tannins in a long, environmentally friendly process (vs. chrome tanning). Develops character over time, becoming more beautiful with age.',
                icon: '🧳',
                gradient: 'from-amber-600/20 to-orange-600/20',
                steps: ['Full-Grain Select', 'Natural Tannins', 'Time-Intensive', 'Patina Development']
              },
              {
                title: 'Double G Jewelry',
                process: 'Master Goldsmith Work',
                desc: 'Fine jewelry using 18k gold, diamonds, and colored gemstones. Craftsmanship rivals dedicated jewelry houses. Each piece requires dozens of hours by master goldsmiths, with meticulous attention to detail.',
                icon: '💍',
                gradient: 'from-yellow-600/20 to-amber-600/20',
                steps: ['18k Gold Base', 'Gemstone Setting', 'Hand Finishing', 'Quality Control']
              }
            ].map((craft, index) => (
              <motion.div
                key={craft.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${craft.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all`} />
                <div className="relative bg-neutral-900/70 backdrop-blur-sm border border-white/10 group-hover:border-amber-600/30 rounded-3xl p-8 transition-all">
                  <div className="text-6xl mb-6">{craft.icon}</div>
                  <div className="text-amber-500 text-xs font-bold mb-2 uppercase tracking-wider">{craft.process}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">{craft.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{craft.desc}</p>
                  <div className="space-y-2">
                    <div className="text-white/50 text-xs font-semibold mb-3">PROCESS STEPS:</div>
                    {craft.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-amber-600/20 rounded-full flex items-center justify-center text-amber-500 text-xs font-bold">
                          {i + 1}
                        </div>
                        <span className="text-white/60 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Gucci Universe */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.05)_0%,_transparent_50%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">The Gucci Universe</h2>
            <p className="text-xl text-white/60">An ecosystem beyond fashion</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Gucci Beauty',
                desc: 'Major luxury beauty player with L\'Obscur Mascara, Rouge à Lèvres Mat lipsticks, and Flora Gorgeous Gardenia perfume in vintage-inspired packaging.',
                icon: '💄',
                color: 'from-pink-600 to-rose-600'
              },
              {
                name: 'Gucci Décor',
                desc: 'Full line of luxury home goods including porcelain, cushions, candles, and tricolor table tennis paddles—bringing Gucci aesthetic home.',
                icon: '🏠',
                color: 'from-amber-600 to-yellow-600'
              },
              {
                name: 'Gucci Valigeria',
                desc: 'Direct legacy of Guccio\'s original vision. High-end luggage and travel accessories celebrating the art of luxurious travel.',
                icon: '🧳',
                color: 'from-neutral-600 to-neutral-700'
              },
              {
                name: 'Gucci Osteria',
                desc: 'Michelin-starred restaurant by Massimo Bottura. Locations in Florence, Beverly Hills, Tokyo, Seoul—merging haute cuisine with elegance.',
                icon: '🍽️',
                color: 'from-red-600 to-rose-600'
              },
              {
                name: 'Gucci Garden',
                desc: 'Located in Florence\'s Piazza della Signoria. Multi-functional space with museum, exclusive boutique, and Gucci Osteria—a creative world.',
                icon: '🌿',
                color: 'from-green-600 to-emerald-600'
              },
              {
                name: 'Gucci Equilibrium',
                desc: 'Dedicated platform for social and environmental sustainability. Focus on carbon neutrality, diversity, inclusion, and ethical practices.',
                icon: '♻️',
                color: 'from-blue-600 to-cyan-600'
              }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 rounded-2xl blur-xl transition-all`} />
                <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-white/10 group-hover:border-red-600/20 rounded-2xl p-8 transition-all">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">{item.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gucci-verse Glossary */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">The Gucci-verse Glossary</h2>
            <p className="text-xl text-white/60">Essential terms every Gucci enthusiast should know</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                term: 'GG Supreme',
                definition: 'Coated canvas with interlocking G pattern, introduced in the 1930s. One of the most recognizable materials in fashion.',
                year: '1930s'
              },
              {
                term: 'Flora Print',
                definition: 'Vibrant, romantic floral print created in 1966 for Grace Kelly. Reissued countless times across products.',
                year: '1966'
              },
              {
                term: 'Web Stripe',
                definition: 'The green-red-green stripe inspired by a horse\'s girth—a nod to equestrian heritage and founding vision.',
                year: '1950s'
              },
              {
                term: 'Horsebit',
                definition: 'Metal hardware derived from equestrian bits. Featured on iconic loafers, bags, and accessories.',
                year: '1953'
              },
              {
                term: 'Bamboo',
                definition: 'Signature material for bag handles since the 1940s. Born from WWII material scarcity, now a timeless icon.',
                year: '1947'
              },
              {
                term: 'Gucci Ancora',
                definition: 'New creative code by Sabato De Sarno meaning "again"—focusing on timeless elegance and essential luxury.',
                year: '2023'
              },
              {
                term: 'Rosso Ancora',
                definition: 'Signature deep burgundy-red color of the De Sarno era, replacing the eclectic Michele palette.',
                year: '2023'
              },
              {
                term: 'Pelle Guccissima',
                definition: 'Proprietary full-grain vegetable-tanned leather known for durability and developing unique patina over time.',
                year: 'Ongoing'
              }
            ].map((item, index) => (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 hover:border-red-600/30 rounded-xl p-6 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">{item.term}</h3>
                  <span className="text-xs text-red-500 font-bold bg-red-950/50 px-3 py-1 rounded-full">{item.year}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{item.definition}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Iconic Products Hall of Fame */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Hall of Fame</h2>
            <p className="text-xl text-white/60">Legendary products that defined luxury fashion</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Horsebit Loafer',
                year: '1953',
                desc: 'First loafer ever featured in the Metropolitan Museum of Art. The horsebit detail became an eternal symbol of effortless Italian style.',
                icon: '👞',
                color: 'from-amber-600 to-yellow-700'
              },
              {
                name: 'The Jackie Bag',
                year: '1961',
                desc: 'Originally "G1247," renamed after Jackie Kennedy made it her signature. Its soft hobo shape and piston closure remain iconic.',
                icon: '👜',
                color: 'from-red-600 to-rose-700'
              },
              {
                name: 'Bamboo Bag',
                year: '1947',
                desc: 'Born from wartime material scarcity. The hand-bent bamboo handle is still crafted in Florence using the original technique.',
                icon: '🎋',
                color: 'from-green-600 to-emerald-700'
              },
              {
                name: 'GG Marmont',
                year: '2016',
                desc: 'Michele-era icon featuring double G logo in chevron quilting with a heart-shaped detail on the back. A modern best-seller.',
                icon: '💝',
                color: 'from-pink-600 to-red-700'
              },
              {
                name: 'Dionysus',
                year: '2015',
                desc: 'Named after the Greek god, defined by double-tiger head closure and structured shape, often adorned with embroidery.',
                icon: '🐅',
                color: 'from-orange-600 to-red-700'
              },
              {
                name: 'Flora Scarf',
                year: '1966',
                desc: 'Created exclusively for Grace Kelly. The romantic floral print became one of Gucci\'s most recognizable patterns.',
                icon: '🌺',
                color: 'from-purple-600 to-pink-700'
              }
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 rounded-2xl transition-opacity blur-xl`} />
                <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-white/10 group-hover:border-red-600/30 rounded-2xl p-8 transition-all">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-6xl mb-4"
                  >
                    {product.icon}
                  </motion.div>
                  <div className="text-xs text-red-500 font-bold mb-2 uppercase tracking-wider">Est. {product.year}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">{product.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Eras: Timeline Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              backgroundImage: 'linear-gradient(45deg, rgba(220,38,38,0.1) 25%, transparent 25%, transparent 75%, rgba(220,38,38,0.1) 75%)',
              backgroundSize: '80px 80px'
            }}
            className="absolute inset-0"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">The Eras of Gucci</h2>
            <p className="text-xl text-white/60">A century of crises, comebacks, and creative revolutions</p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                period: '1921-1950s',
                title: 'The Founding Vision',
                desc: 'Guccio Gucci, inspired by English aristocracy and equestrian culture, opened a leather goods shop in Florence. The horsebit, green-red-green web, and bamboo weren\'t just designs—they were solutions born from war and symbols of a specific lifestyle.',
                highlight: 'Equestrian Heritage',
                color: 'from-amber-600 to-yellow-600'
              },
              {
                period: '1950s-1980s',
                title: 'Hollywood Glamour Era',
                desc: 'Gucci became the favorite of Grace Kelly, Audrey Hepburn, and Jackie Kennedy. The "Jackie O" bag was created. This cemented Gucci\'s status as the red-carpet and jet-set luxury brand.',
                highlight: 'Global Fame',
                color: 'from-rose-600 to-red-600'
              },
              {
                period: '1980s-1990s',
                title: 'Family Feuds & Decline',
                desc: 'Internal battles and over-licensing diluted the brand. Gucci became associated with loud logos and counterfeits, losing its high-fashion cachet and nearly facing bankruptcy.',
                highlight: 'The Dark Years',
                color: 'from-neutral-600 to-neutral-700'
              },
              {
                period: '1994-2004',
                title: 'The Tom Ford Revolution',
                desc: 'Tom Ford saved Gucci from bankruptcy with raw sexuality, sleek glamour, and provocative campaigns. He didn\'t just design clothes—he created a cultural phenomenon that made Gucci the coolest name in fashion.',
                highlight: 'First Resurrection',
                color: 'from-red-600 to-pink-600'
              },
              {
                period: '2006-2014',
                title: 'Frida Giannini Era',
                desc: 'Giannini brought a bohemian, sophisticated aesthetic, focusing on archives like the Flora print. However, she eventually struggled to keep the brand feeling innovative and fresh.',
                highlight: 'Refined Elegance',
                color: 'from-purple-600 to-pink-600'
              },
              {
                period: '2015-2022',
                title: 'Alessandro Michele Revolution',
                desc: 'Michele threw out the rulebook with maximalist, gender-fluid, and romantic designs. He captured a new generation with geek-chic aesthetics, making Gucci the fastest-growing luxury brand.',
                highlight: 'Second Resurrection',
                color: 'from-green-600 to-emerald-600'
              },
              {
                period: '2023-Present',
                title: 'Sabato De Sarno Era',
                desc: 'De Sarno shifts toward "quiet luxury" with minimalist sophistication, impeccable tailoring, and timeless elegance—a response to changing consumer tastes and market dynamics.',
                highlight: 'Modern Refinement',
                color: 'from-neutral-400 to-neutral-600'
              }
            ].map((era, index) => (
              <motion.div
                key={era.period}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="md:w-48 flex-shrink-0"
                  >
                    <div className={`bg-gradient-to-br ${era.color} p-6 rounded-2xl text-center`}>
                      <div className="text-sm font-bold text-white/80 mb-2">{era.period}</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">{era.highlight}</div>
                    </div>
                  </motion.div>
                  <div className="flex-1 bg-neutral-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{era.title}</h3>
                    <p className="text-white/70 leading-relaxed">{era.desc}</p>
                  </div>
                </div>
                {index < 6 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 48 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="w-0.5 bg-gradient-to-b from-red-600 to-transparent mx-auto my-4 md:ml-24"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Empire Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-red-950/20 to-black relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]"
          animate={{ x: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">The Business Empire</h2>
            <p className="text-xl text-white/60">More than fashion—a global luxury powerhouse</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Parent Company',
                value: 'Kering',
                desc: 'Part of Kering SA, a global luxury group managing prestigious brands like Saint Laurent, Balenciaga, and Bottega Veneta.',
                icon: '🏢'
              },
              {
                title: 'Annual Revenue',
                value: '€10B+',
                desc: 'One of the most profitable fashion houses in the world, generating over €10 billion in peak years.',
                icon: '💰'
              },
              {
                title: 'Market Position',
                value: 'Top 3',
                desc: 'In constant competition with LVMH brands like Louis Vuitton and Dior—a rivalry driving the luxury industry.',
                icon: '🏆'
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-red-600/20 rounded-2xl p-8 text-center group"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-sm text-red-500 font-bold mb-2 uppercase tracking-wider">{stat.title}</div>
                <div className="text-4xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">{stat.value}</div>
                <p className="text-white/60 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing & Artisanal Hubs */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(220,38,38,0.1) 0px, transparent 10px, transparent 20px, rgba(220,38,38,0.1) 30px)',
            }}
            className="absolute inset-0"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Made in Italy</h2>
            <p className="text-xl text-white/60">The artisanal hubs where Gucci magic is crafted</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Casellina Factory',
                location: 'Florence',
                specialty: 'Complex Handbags',
                desc: 'Historic headquarters and one of the largest leather goods factories. Where the most intricate handbags are produced by hundreds of master artisans.',
                icon: '🏭',
                color: 'from-red-600 to-rose-600',
                badge: 'Headquarters'
              },
              {
                name: 'Gucci Art Lab',
                location: 'Florence',
                specialty: 'R&D Center',
                desc: '50,000-square-meter innovation hub dedicated to leather goods, shoes, and metals. Where secret prototypes, materials, and techniques are developed.',
                icon: '🔬',
                color: 'from-purple-600 to-pink-600',
                badge: 'Innovation'
              },
              {
                name: 'Gucci Hub',
                location: 'Milan',
                specialty: 'Global HQ & Runway',
                desc: 'Converted Caproni airplane factory now hosting global headquarters and famous runway shows. Symbolizes the blend of heritage and futurism.',
                icon: '✈️',
                color: 'from-blue-600 to-cyan-600',
                badge: 'Flagship'
              },
              {
                name: 'Scandicci Factory',
                location: 'Florence',
                specialty: 'Horsebit Loafers',
                desc: 'Specializes in small leather goods and the iconic Horsebit loafer. Each loafer requires a 60-step process taking days to complete.',
                icon: '👞',
                color: 'from-amber-600 to-yellow-600',
                badge: 'Heritage'
              },
              {
                name: 'Arezzo Region',
                location: 'Tuscany',
                specialty: 'Ready-to-Wear',
                desc: 'Multiple facilities handling ready-to-wear and leather goods. Deeply embedded in Italy\'s historic textile district with generations of expertise.',
                icon: '🧵',
                color: 'from-green-600 to-emerald-600',
                badge: 'Textile Hub'
              }
            ].map((factory, index) => (
              <motion.div
                key={factory.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${factory.color} opacity-10 group-hover:opacity-20 rounded-2xl blur-xl transition-all`} />
                <div className="relative bg-neutral-900/70 backdrop-blur-sm border border-white/10 group-hover:border-red-600/30 rounded-2xl p-8 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{factory.icon}</div>
                    <span className="text-xs font-bold bg-red-950/50 text-red-400 px-3 py-1 rounded-full">{factory.badge}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{factory.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-red-500 text-sm">📍 {factory.location}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-sm">{factory.specialty}</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{factory.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail as Theater - Architecture */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]"
          animate={{ x: [0, 200, 0], y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Retail as Theater</h2>
            <p className="text-xl text-white/60">Immersive architecture defining luxury shopping</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Michele Era */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-pink-600/20 rounded-3xl blur-xl" />
              <div className="relative bg-neutral-900/70 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                <div className="text-sm text-emerald-500 font-bold mb-2 uppercase tracking-wider">2015-2022 • Maximalist Era</div>
                <h3 className="text-3xl font-bold text-white mb-4">Michele Era Stores</h3>
                <p className="text-emerald-400 mb-6 font-semibold">by Christopher Kane</p>
                <p className="text-white/70 leading-relaxed mb-6">
                  Eccentric aristocrat's home aesthetic with plush velvet sofas, eclectic wallpapers, taxidermy, and vintage-inspired display cases.
                </p>
                <div className="space-y-2">
                  {['Velvet & Brocade', 'Vintage Display Cases', 'Taxidermy & Art', 'Maximalist Wallpapers'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* De Sarno Era */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-600/20 to-neutral-400/20 rounded-3xl blur-xl" />
              <div className="relative bg-neutral-900/70 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                <div className="text-sm text-neutral-400 font-bold mb-2 uppercase tracking-wider">2023-Present • Minimalist Era</div>
                <h3 className="text-3xl font-bold text-white mb-4">De Sarno Era Stores</h3>
                <p className="text-neutral-300 mb-6 font-semibold">by Guillermo Santomà</p>
                <p className="text-white/70 leading-relaxed mb-6">
                  Raw elegance with exposed concrete, travertine stone, metal mesh, and mirrored ceilings creating a gallery-like atmosphere.
                </p>
                <div className="space-y-2">
                  {['Exposed Concrete', 'Travertine Stone', 'Metal Mesh Details', 'Mirrored Ceilings'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Flagship Landmarks */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: 'New York',
                location: 'Fifth Avenue',
                desc: 'Massive 46,000-square-foot store with meticulously restored historic facade.',
                icon: '🗽',
                color: 'from-blue-600 to-cyan-600'
              },
              {
                city: 'Tokyo',
                location: 'Ginza',
                desc: 'Stunning honeycomb-like exterior that illuminates at night, becoming an architectural landmark.',
                icon: '🗼',
                color: 'from-pink-600 to-rose-600'
              },
              {
                city: 'Paris',
                location: 'Champs-Élysées',
                desc: 'Housed in a historic building featuring a breathtaking glass dome.',
                icon: '🗼',
                color: 'from-purple-600 to-pink-600'
              }
            ].map((store, index) => (
              <motion.div
                key={store.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${store.color} opacity-10 group-hover:opacity-20 rounded-2xl blur-xl transition-all`} />
                <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-white/10 group-hover:border-red-600/20 rounded-2xl p-6 transition-all">
                  <div className="text-4xl mb-4">{store.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-1">{store.city}</h4>
                  <div className="text-red-500 text-sm mb-3">{store.location}</div>
                  <p className="text-white/60 text-sm leading-relaxed">{store.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intellectual Property & Legal Battles */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-red-950/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(220,38,38,0.1) 0px, transparent 2px, transparent 4px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Brand Protection</h2>
            <p className="text-xl text-white/60">Fierce defense of luxury identity</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'GG Logo Trademark',
                desc: 'One of the most fiercely protected trademarks in fashion. Gucci repeatedly sues counterfeiters and major retailers for selling fakes.',
                icon: '⚖️',
                stat: '1000s',
                statLabel: 'Legal Actions',
                color: 'from-red-600 to-rose-600'
              },
              {
                title: 'The Forevermark',
                desc: 'Micro-etching technology placing microscopic "GG" logos on hardware, zippers, and fabric. Nearly impossible for counterfeiters to replicate.',
                icon: '🔬',
                stat: 'Micro',
                statLabel: 'Authentication',
                color: 'from-blue-600 to-cyan-600'
              },
              {
                title: 'Anti-Counterfeiting',
                desc: 'Global enforcement teams and advanced authentication technologies help identify and eliminate counterfeit products worldwide.',
                icon: '🛡️',
                stat: '24/7',
                statLabel: 'Monitoring',
                color: 'from-amber-600 to-orange-600'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 rounded-3xl blur-xl transition-all`} />
                <div className="relative bg-neutral-900/70 backdrop-blur-sm border border-white/10 group-hover:border-red-600/30 rounded-3xl p-8 transition-all text-center">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                  <div className="text-red-500 text-xs font-bold mb-4 uppercase tracking-wider">{item.statLabel}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NFTs and the Metaverse */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.3, 1], x: [0, -100, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Digital Frontier</h2>
            <p className="text-xl text-white/60">NFTs, metaverse, and the future of luxury</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Gucci & Roblox',
                desc: 'Created "Gucci Garden" experience where avatars explore themed rooms. One digital Dionysus bag sold for $4,115—more than its physical counterpart.',
                value: '$4,115',
                label: 'Digital Bag Sale',
                icon: '🎮',
                gradient: 'from-green-600/20 to-emerald-600/20'
              },
              {
                title: 'Gucci Vault',
                desc: 'Digital concept store and metaverse initiative selling restored vintage Gucci pieces curated by Michele, plus collaborations with digital designers.',
                value: 'Vintage+',
                label: 'Digital Archive',
                icon: '🏛️',
                gradient: 'from-purple-600/20 to-pink-600/20'
              },
              {
                title: 'SuperGucci NFTs',
                desc: 'Collaboration with Superplastic releasing NFT characters with physical hand-painted ceramic sculptures. Bridging physical and digital luxury.',
                value: 'NFT+IRL',
                label: 'Hybrid Luxury',
                icon: '🎨',
                gradient: 'from-red-600/20 to-orange-600/20'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all`} />
                <div className="relative bg-neutral-900/70 backdrop-blur-sm border border-white/10 group-hover:border-purple-600/30 rounded-3xl p-8 transition-all">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <div className="bg-purple-950/50 border border-purple-600/20 rounded-lg px-4 py-2 inline-block mb-4">
                    <div className="text-2xl font-bold text-purple-400">{item.value}</div>
                    <div className="text-xs text-purple-300">{item.label}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-500 transition-colors">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vintage Authentication Guide */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Vintage Authentication</h2>
            <p className="text-xl text-white/60">The secret language of collecting Gucci</p>
          </motion.div>

          {/* Serial Numbers Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-10 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Serial Numbers Evolution</h3>
            <div className="space-y-6">
              {[
                { era: '1960s-1990s', format: 'Simple numeric code', example: '#####', color: 'text-amber-500' },
                { era: 'Late 1980s-1990s', format: 'Model + supplier code', example: '12345.678', color: 'text-rose-500' },
                { era: '1990s-Present', format: 'Current system', example: '123456 · 789012', color: 'text-emerald-500' }
              ].map((item, index) => (
                <motion.div
                  key={item.era}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between bg-black/30 rounded-xl p-6 border border-white/5"
                >
                  <div>
                    <div className="text-white font-bold mb-1">{item.era}</div>
                    <div className="text-white/60 text-sm">{item.format}</div>
                  </div>
                  <div className={`font-mono text-xl ${item.color} bg-black/50 px-4 py-2 rounded-lg`}>
                    {item.example}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hallmarks of Different Eras */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { era: '1970s', features: ['GG logo canvas', 'Brown & beige palette', 'Web stripe prominence'], icon: '🕰️' },
              { era: '1980s', features: ['Bright colors', 'Visetos canvas', 'Monogram + stripes'], icon: '🎨' },
              { era: '1990s (Ford)', features: ['Clean lines', 'Dark colors', 'Minimal logos'], icon: '🖤' },
              { era: '2000s (Giannini)', features: ['Flora print return', 'Feminine shapes', 'Boho aesthetic'], icon: '🌸' }
            ].map((item, index) => (
              <motion.div
                key={item.era}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <h4 className="text-xl font-bold text-white">{item.era}</h4>
                </div>
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* House of Gucci Drama */}
      <section className="py-24 px-6 bg-gradient-to-br from-black via-red-950/20 to-black relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">House of Gucci</h2>
            <p className="text-xl text-white/60">The family drama that shocked the world</p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                name: 'Maurizio Gucci',
                role: 'Last Family Leader',
                story: 'The last Gucci to run the company. His extravagant spending and poor leadership nearly bankrupted the brand before he was ousted in 1993.',
                fate: 'Murdered in 1995',
                icon: '👔',
                color: 'from-neutral-600 to-neutral-700'
              },
              {
                name: 'Patrizia Reggiani',
                role: 'The Black Widow',
                story: 'Maurizio\'s ex-wife, convicted of arranging his murder. Famous for her quote: "I\'d rather cry in a Rolls-Royce than be happy on a bicycle."',
                fate: 'Served 18 years',
                icon: '🕷️',
                color: 'from-red-600 to-rose-600'
              },
              {
                name: 'Aldo Gucci',
                role: 'The Visionary',
                story: 'Expanded Gucci into the US and global markets. His imprisonment for tax evasion began the family\'s public unraveling.',
                fate: 'Tax evasion scandal',
                icon: '🌎',
                color: 'from-amber-600 to-yellow-600'
              }
            ].map((character, index) => (
              <motion.div
                key={character.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${character.color} opacity-10 rounded-3xl blur-xl`} />
                <div className="relative bg-neutral-900/70 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start">
                  <div className="text-6xl">{character.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{character.name}</h3>
                        <div className="text-red-500 text-sm font-semibold">{character.role}</div>
                      </div>
                      <span className="text-xs font-bold bg-red-950/50 text-red-400 px-3 py-1 rounded-full">{character.fate}</span>
                    </div>
                    <p className="text-white/70 leading-relaxed">{character.story}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-red-950/50 to-black border border-red-600/20 rounded-2xl p-8 text-center"
          >
            <div className="text-4xl mb-4">🎬</div>
            <h4 className="text-xl font-bold text-white mb-3">The 2021 Film</h4>
            <p className="text-white/70 leading-relaxed">
              Ridley Scott's <em>House of Gucci</em> dramatized the family saga. The Gucci family publicly criticized the portrayal as "unjust" and "humiliating," adding another chapter to the ongoing drama.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gucci Changemakers - Philanthropy */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Gucci Changemakers</h2>
            <p className="text-xl text-white/60">Commitment to social impact and sustainability</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-950/30 to-black border border-green-600/20 rounded-3xl p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="text-6xl mb-6">🌍</div>
                <h3 className="text-3xl font-bold text-white mb-4">Gucci Equilibrium</h3>
                <p className="text-green-400 font-semibold mb-6">Environmental Sustainability Platform</p>
                <div className="space-y-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-white font-bold mb-2">Carbon Neutral</div>
                    <div className="text-white/60 text-sm">Claims carbon neutrality across entire supply chain</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-white font-bold mb-2">Circular Lines</div>
                    <div className="text-white/60 text-sm">"Gucci-Up" collections using recycled and organic materials</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-white font-bold mb-2">Scholarships</div>
                    <div className="text-white/60 text-sm">Funding for underrepresented students in fashion</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-950/30 to-black border border-purple-600/20 rounded-3xl p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="text-6xl mb-6">✊</div>
                <h3 className="text-3xl font-bold text-white mb-4">Changemakers Fund</h3>
                <p className="text-purple-400 font-semibold mb-6">North America Impact Initiative</p>
                <div className="space-y-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-white font-bold mb-2">Social Justice</div>
                    <div className="text-white/60 text-sm">Multi-million dollar fund for community organizations</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-white font-bold mb-2">Diversity Focus</div>
                    <div className="text-white/60 text-sm">Advocating for inclusivity in fashion industry</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-white font-bold mb-2">Community Support</div>
                    <div className="text-white/60 text-sm">Grassroots organizations making real impact</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Strategy Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(220,38,38,0.05)_0%,_transparent_50%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Digital Innovation</h2>
            <p className="text-xl text-white/60">Pioneering luxury in the digital age</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-Commerce Pioneer',
                desc: 'Early adopter of robust online sales for luxury, making full collections available worldwide with seamless shopping experience.',
                features: ['Global Shipping', 'Virtual Styling', 'Exclusive Online Drops'],
                icon: '🛍️',
                gradient: 'from-red-600/20 to-pink-600/20'
              },
              {
                title: 'Gucci App',
                desc: 'Comprehensive mobile experience with augmented reality try-ons, exclusive content, and direct shopping channel.',
                features: ['AR Try-On', 'Behind the Scenes', 'First Access'],
                icon: '📱',
                gradient: 'from-purple-600/20 to-red-600/20'
              },
              {
                title: 'Experiential Retail',
                desc: 'Ephemeral stores like Gucci Garden (Florence) and Gucci Wooster (NYC)—art installations blending fashion and culture.',
                features: ['Pop-Up Galleries', 'Immersive Exhibits', 'Limited Editions'],
                icon: '🎨',
                gradient: 'from-amber-600/20 to-orange-600/20'
              },
              {
                title: 'Gaming & Metaverse',
                desc: 'Partnerships with Roblox, The Sims, and more—creating virtual Gucci items for digital-native generations.',
                features: ['Roblox Garden', 'Virtual Fashion', 'NFT Collections'],
                icon: '🎮',
                gradient: 'from-green-600/20 to-emerald-600/20'
              }
            ].map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${strategy.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all`} />
                <div className="relative bg-neutral-900/70 backdrop-blur-sm border border-white/10 group-hover:border-red-600/30 rounded-2xl p-8 transition-all">
                  <div className="text-6xl mb-6">{strategy.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">{strategy.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{strategy.desc}</p>
                  <div className="space-y-2">
                    {strategy.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-white/50">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Famous Section */}
      <section className="py-20 px-6 bg-black text-white relative overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-12"
            >
              Why is Gucci So Famous?
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                {
                  title: 'Heritage & Craftsmanship',
                  desc: 'A century-long reputation for high-quality Italian manufacturing',
                  icon: '🏛️'
                },
                {
                  title: 'Powerful Branding',
                  desc: 'Unforgettable logos and symbols that signal status',
                  icon: '✨'
                },
                {
                  title: 'Creative Reinvention',
                  desc: 'Ability to transform dramatically while staying relevant',
                  icon: '🎨'
                },
                {
                  title: 'Cultural Relevance',
                  desc: 'Consistently at the center of fashion, art, and social conversation',
                  icon: '🌟'
                }
              ].map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    borderColor: 'rgba(220, 38, 38, 0.5)',
                    transition: { duration: 0.3 }
                  }}
                  className="border border-white/20 rounded-xl p-6 relative overflow-hidden group"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-red-600 text-5xl font-bold mb-3 flex items-center gap-3"
                  >
                    <span>{index + 1}</span>
                    <span className="text-2xl">{reason.icon}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{reason.title}</h3>
                  <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">{reason.desc}</p>
                  
                  {/* Decorative corner */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-red-600/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-red-600/20 bg-black relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-amber-600/20"
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <Crown className="w-6 h-6 text-red-600" />
            </motion.div>
            <span className="text-xl font-bold">GUCCI</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 mb-4"
          >
            Italian Luxury Excellence Since 1921
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-white/40"
          >
            Design By Supun Ravidu Bandara Rathnayaka. Sri Lanka.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
