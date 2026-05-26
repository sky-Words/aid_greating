"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cardTemplates, categories, type CardTemplate } from "@/lib/templates"
import { CrescentMoon, Star, GeometricPattern } from "@/components/icons/islamic-icons"
import { cn } from "@/lib/utils"

function TemplateCard({ template, index }: { template: CardTemplate; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link href={`/editor?template=${template.id}`}>
        <div
          className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl"
          style={{ background: template.bgGradient }}
        >
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            {template.pattern === "geometric" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <GeometricPattern className="w-full h-full text-current opacity-30" style={{ color: template.accentColor }} />
              </div>
            )}
            {template.pattern === "stars" && (
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <Star
                    key={i}
                    className="absolute w-4 h-4"
                    style={{
                      color: template.accentColor,
                      left: `${15 + (i % 4) * 25}%`,
                      top: `${10 + Math.floor(i / 4) * 40}%`,
                      opacity: 0.4,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Card Content Preview */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <CrescentMoon
              className="w-12 h-12 mb-4 opacity-80"
              style={{ color: template.accentColor }}
            />
            <h3
              className="arabic-heading text-xl md:text-2xl font-bold mb-2 leading-relaxed"
              style={{ color: template.textColor }}
            >
              {template.defaultGreeting}
            </h3>
            <p
              className="text-sm opacity-70"
              style={{ color: template.textColor }}
            >
              اسمك هنا
            </p>
          </div>

          {/* Badges */}
          <div className="absolute top-3 right-3 flex gap-2">
            {template.trending && (
              <span className="flex items-center gap-1 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3" />
                رائج
              </span>
            )}
            {template.new && (
              <span className="flex items-center gap-1 bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                <Sparkles className="w-3 h-3" />
                جديد
              </span>
            )}
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              اختر هذا القالب
            </Button>
          </div>
        </div>

        {/* Template Name */}
        <div className="mt-3 text-center">
          <h4 className="font-medium text-foreground">{template.nameAr}</h4>
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
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-full",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "border-border hover:bg-muted"
              )}
            >
              {category.labelAr}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredTemplates.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link href="/trending">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary/30 hover:bg-primary/10"
            >
              عرض جميع القوالب
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
