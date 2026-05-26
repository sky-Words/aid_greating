"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CrescentMoon, Mosque, Star, Lantern } from "@/components/icons/islamic-icons"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden islamic-pattern">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Stars */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="h-3 w-3 md:h-4 md:w-4 text-primary/40" />
          </motion.div>
        ))}

        {/* Floating Lanterns */}
        <motion.div
          className="absolute top-20 right-10 md:right-20"
          animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Lantern className="h-16 w-16 md:h-24 md:w-24 text-primary/30" />
        </motion.div>
        <motion.div
          className="absolute top-32 left-10 md:left-20"
          animate={{ y: [0, -10, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <Lantern className="h-12 w-12 md:h-20 md:w-20 text-primary/25" />
        </motion.div>

        {/* Crescent Moon */}
        <motion.div
          className="absolute top-10 left-1/2 -translate-x-1/2 md:top-16"
          animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="relative">
            <CrescentMoon className="h-20 w-20 md:h-32 md:w-32 text-primary" />
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* Mosque Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48">
          <Mosque className="absolute bottom-0 left-1/4 h-24 w-24 md:h-40 md:w-40 text-foreground/5" />
          <Mosque className="absolute bottom-0 right-1/4 h-20 w-20 md:h-32 md:w-32 text-foreground/5" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">عيد الأضحى المبارك 1446</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="arabic-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            صمم أجمل بطاقات
            <span className="block text-primary text-glow-gold">عيد الأضحى</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            قوالب متنوعة وتصاميم إسلامية راقية. أضف اسمك ورسالتك الخاصة وشاركها مع أحبابك عبر واتساب
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/editor">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg glow-gold"
              >
                <Sparkles className="ml-2 h-5 w-5" />
                ابدأ التصميم الآن
              </Button>
            </Link>
            <Link href="/trending">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-primary/30 hover:bg-primary/10"
              >
                استكشف القوالب
              </Button>
            </Link>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-secondary/50">
                <Download className="h-4 w-4 text-secondary-foreground" />
              </div>
              <span>تحميل مجاني</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-secondary/50">
                <Share2 className="h-4 w-4 text-secondary-foreground" />
              </div>
              <span>مشاركة فورية</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <span>قوالب متجددة</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
