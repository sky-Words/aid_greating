"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MessageCircle, Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { suggestedCaptions } from "@/lib/templates"

export function WhatsAppFloatingButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 left-6 z-50"
    >
      <Link
        href="https://wa.me/?text=%D8%B9%D9%8A%D8%AF%20%D8%A3%D8%B6%D8%AD%D9%89%20%D9%85%D8%A8%D8%A7%D8%B1%D9%83%21%20%D8%B5%D9%85%D9%85%20%D8%A8%D8%B7%D8%A7%D9%82%D8%AA%D9%83%20%D8%A7%D9%84%D8%A2%D9%86"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <motion.div
            className="absolute inset-0 bg-[#25D366] rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export function SuggestedCaptions({ onSelect }: { onSelect?: (caption: string) => void }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (caption: string, index: number) => {
    navigator.clipboard.writeText(caption)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
    onSelect?.(caption)
  }

  return (
    <div className="space-y-3">
      <h4 className="font-medium text-foreground mb-3">نصوص مقترحة للمشاركة:</h4>
      {suggestedCaptions.map((caption, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
        >
          <p className="flex-1 text-sm text-foreground leading-relaxed">{caption}</p>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 h-8 w-8"
            onClick={() => handleCopy(caption, index)}
          >
            {copiedIndex === index ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
            )}
          </Button>
        </motion.div>
      ))}
    </div>
  )
}

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="arabic-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            جاهز لتصميم بطاقتك؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            ابدأ الآن وشارك أجمل التهاني مع عائلتك وأصدقائك بمناسبة عيد الأضحى المبارك
          </p>
          <Link href="/editor">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg glow-gold"
            >
              صمم بطاقتك مجاناً
            </Button>
          </Link>
          
          {/* Trust Badge */}
          <p className="mt-6 text-sm text-muted-foreground">
            صُنعت بحب بمناسبة عيد الأضحى المبارك
          </p>
        </motion.div>
      </div>
    </section>
  )
}
