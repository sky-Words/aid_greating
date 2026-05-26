"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cardTemplates, categories, type CardTemplate } from "@/lib/templates"
import { CrescentMoon, Star, GeometricPattern, FloralPattern, MoroccanPattern } from "@/components/icons/islamic-icons"
import { cn } from "@/lib/utils"

function TemplateCard({ template, index }: { template: CardTemplate; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link href={`/editor?template=${template.id}`}>
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
          style={{ 
            background: template.bgGradient,
            boxShadow: `0 20px 40px -12px rgba(0,0,0,0.25), 0 0 40px ${template.accentColor}15`
          }}
        >
          {/* Decorative border frame */}
          <div 
            className="absolute inset-2 rounded-2xl border pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ borderColor: `${template.accentColor}40` }}
          />

          {/* Corner ornaments */}
          <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: template.accentColor }}>
              <path d="M0,0 L35,0 Q15,15 0,35 Z" fill="currentColor" fillOpacity="0.2" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none rotate-90">
            <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: template.accentColor }}>
              <path d="M0,0 L35,0 Q15,15 0,35 Z" fill="currentColor" fillOpacity="0.2" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none -rotate-90">
            <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: template.accentColor }}>
              <path d="M0,0 L35,0 Q15,15 0,35 Z" fill="currentColor" fillOpacity="0.2" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none rotate-180">
            <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: template.accentColor }}>
              <path d="M0,0 L35,0 Q15,15 0,35 Z" fill="currentColor" fillOpacity="0.2" />
            </svg>
          </div>

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            {template.pattern === "geometric" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <GeometricPattern className="w-full h-full text-current opacity-30" style={{ color: template.accentColor }} />
              </div>
            )}
            {template.pattern === "floral" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <FloralPattern className="w-full h-full text-current opacity-40" style={{ color: template.accentColor }} />
              </div>
            )}
            {template.pattern === "moroccan" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <MoroccanPattern className="w-full h-full text-current opacity-40" style={{ color: template.accentColor }} />
              </div>
            )}
            {template.pattern === "stars" && (
              <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="absolute"
                    style={{
                      left: `${12 + (i % 4) * 24}%`,
                      top: `${8 + Math.floor(i / 4) * 35}%`,
                    }}
                  >
                    <Star
                      className="w-3 h-3"
                      style={{ color: template.accentColor }}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Ambient glow */}
          <div 
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
            style={{ backgroundColor: template.accentColor }}
          />

          {/* Card Content Preview */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: `drop-shadow(0 0 8px ${template.accentColor}40)` }}
            >
              <CrescentMoon
                className="w-14 h-14 mb-4"
                style={{ color: template.accentColor }}
              />
            </motion.div>
            
            {/* Divider */}
            <div 
              className="w-16 h-0.5 mb-4 rounded-full opacity-50"
              style={{ backgroundColor: template.accentColor }}
            />
            
            <h3
              className="arabic-heading text-lg md:text-xl font-bold mb-2 leading-relaxed text-balance"
              style={{ color: template.textColor, textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
            >
              {template.defaultGreeting}
            </h3>
            <p
              className="text-sm opacity-60"
              style={{ color: template.textColor }}
            >
              اسمك هنا
            </p>
          </div>

          {/* Badges */}
          <div className="absolute top-3 right-3 flex gap-2">
            {template.trending && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1 bg-primary/95 text-primary-foreground text-xs px-2.5 py-1 rounded-full shadow-lg"
              >
                <TrendingUp className="w-3 h-3" />
                رائج
              </motion.span>
            )}
            {template.new && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1 bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full shadow-lg"
              >
                <Sparkles className="w-3 h-3" />
                جديد
              </motion.span>
            )}
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-xl">
                اختر هذا القالب
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Template Name */}
        <div className="mt-4 text-center">
          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{template.nameAr}</h4>
          <p className="text-sm text-muted-foreground">{template.categoryAr}</p>
        </div>
      </Link>
    </motion.div>
  )
}

export function TemplatesSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredTemplates = activeCategory === "all"
    ? cardTemplates
    : cardTemplates.filter((t) => t.category === activeCategory)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="arabic-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            اختر قالبك المفضل
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            تصاميم متنوعة تناسب جميع الأذواق. من الكلاسيكي الفاخر إلى العصري البسيط
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <Button
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full px-5 h-10 font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "border-border hover:bg-primary/10 hover:border-primary/50"
                )}
              >
                {category.labelAr}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {filteredTemplates.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link href="/trending">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-10 h-12 border-2 border-primary/40 hover:bg-primary/10 hover:border-primary font-semibold transition-all"
            >
              عرض جميع القوالب
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
