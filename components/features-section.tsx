"use client"

import { motion } from "framer-motion"
import { Palette, Download, Share2, Smartphone, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "تصاميم متنوعة",
    description: "قوالب إسلامية راقية مستوحاة من الفن المغربي والتراث العربي",
  },
  {
    icon: Download,
    title: "تحميل فوري",
    description: "حمّل بطاقتك بجودة عالية وبصيغة PNG جاهزة للمشاركة",
  },
  {
    icon: Share2,
    title: "مشاركة سهلة",
    description: "شارك بطاقتك مباشرة عبر واتساب أو انسخ الرابط",
  },
  {
    icon: Smartphone,
    title: "متوافق مع الجوال",
    description: "تجربة سلسة على جميع الأجهزة بدون تحميل تطبيقات",
  },
  {
    icon: Zap,
    title: "سريع وسهل",
    description: "صمم بطاقتك في أقل من دقيقة بخطوات بسيطة",
  },
  {
    icon: Shield,
    title: "مجاني بالكامل",
    description: "استمتع بجميع المميزات مجاناً بدون أي رسوم خفية",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="arabic-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            لماذا تختار بطاقات العيد؟
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            نقدم لك أفضل تجربة لتصميم بطاقات التهنئة بمناسبة عيد الأضحى المبارك
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
