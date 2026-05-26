"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import html2canvas from "html2canvas"
import {
  Download,
  Share2,
  RefreshCw,
  Type,
  Palette,
  ImageIcon,
  Sparkles,
  Copy,
  Check,
  MessageCircle,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cardTemplates, greetingTexts, greetingCategories, type CardTemplate } from "@/lib/templates"
import { CrescentMoon, Star, GeometricPattern, Mosque, Lantern, Sheep, FloralPattern, MoroccanPattern } from "@/components/icons/islamic-icons"
import { SuggestedCaptions } from "@/components/viral-features"
import { cn } from "@/lib/utils"

const fonts = [
  { id: "amiri", name: "أميري", className: "font-serif" },
  { id: "noto-kufi", name: "نوتو كوفي", className: "font-sans" },
]

const decorations = [
  { id: "crescent", name: "هلال", Icon: CrescentMoon },
  { id: "star", name: "نجمة", Icon: Star },
  { id: "mosque", name: "مسجد", Icon: Mosque },
  { id: "lantern", name: "فانوس", Icon: Lantern },
  { id: "sheep", name: "خروف", Icon: Sheep },
  { id: "pattern", name: "زخرفة", Icon: GeometricPattern },
]

// Floating particles component
function FloatingParticles({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{ backgroundColor: color, opacity: 0.4 }}
          initial={{ 
            x: `${20 + Math.random() * 60}%`, 
            y: "100%",
            scale: 0.5 + Math.random() * 0.5
          }}
          animate={{ 
            y: "-10%",
            x: `${20 + Math.random() * 60}%`,
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

// Corner ornament component
function CornerOrnament({ position, color }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right", color: string }) {
  const rotations = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90"
  }
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0"
  }
  
  return (
    <div className={cn("absolute w-16 h-16", positions[position], rotations[position])}>
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color }}>
        <path
          d="M0,0 L40,0 Q20,20 0,40 Z"
          fill="currentColor"
          fillOpacity="0.15"
        />
        <path
          d="M0,0 L30,0 Q15,15 0,30 Z"
          fill="currentColor"
          fillOpacity="0.25"
        />
        <circle cx="8" cy="8" r="3" fill="currentColor" fillOpacity="0.6" />
      </svg>
    </div>
  )
}

interface CardState {
  template: CardTemplate
  name: string
  greeting: string
  fontSize: number
  fontFamily: string
  decoration: string
  customImage: string | null
}

export function CardEditor() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get("template")
  const cardRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [isDownloading, setIsDownloading] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)
  const [copied, setCopied] = useState(false)

  const initialTemplate = templateId
    ? cardTemplates.find((t) => t.id === templateId) || cardTemplates[0]
    : cardTemplates[0]

  const [cardState, setCardState] = useState<CardState>({
    template: initialTemplate,
    name: "",
    greeting: initialTemplate.defaultGreeting,
    fontSize: 24,
    fontFamily: "amiri",
    decoration: "crescent",
    customImage: null,
  })

  useEffect(() => {
    if (templateId) {
      const template = cardTemplates.find((t) => t.id === templateId)
      if (template) {
        setCardState((prev) => ({
          ...prev,
          template,
          greeting: template.defaultGreeting,
        }))
      }
    }
  }, [templateId])

  const handleDownload = useCallback(async () => {
    if (!cardRef.current) return
    setIsDownloading(true)

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      })

      const link = document.createElement("a")
      link.download = `eid-card-${Date.now()}.png`
      link.href = canvas.toDataURL("image/png")
      link.click()
    } catch (error) {
      console.error("Error downloading card:", error)
    } finally {
      setIsDownloading(false)
    }
  }, [])

  const handleShare = useCallback(async () => {
    if (!cardRef.current) return

    const siteUrl = typeof window !== "undefined" ? window.location.origin : ""
    const shareText = `${cardState.greeting}\n\nانشئ بطاقتك الخاصة من هنا:\n${siteUrl}`

    try {
      // Generate the card image
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      })

      // Convert canvas to blob
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((b) => resolve(b!), "image/png")
      })

      const file = new File([blob], "eid-card.png", { type: "image/png" })

      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "بطاقة عيد الأضحى",
          text: shareText,
          files: [file],
        })
      } else if (navigator.share) {
        await navigator.share({
          title: "بطاقة عيد الأضحى",
          text: shareText,
          url: siteUrl,
        })
      } else {
        setShowShareDialog(true)
      }
    } catch {
      setShowShareDialog(true)
    }
  }, [cardState.greeting])

  const handleWhatsAppShare = useCallback(() => {
    const text = encodeURIComponent(`${cardState.greeting} - ${cardState.name || "من محب"}`)
    window.open(`https://wa.me/?text=${text}`, "_blank")
  }, [cardState.greeting, cardState.name])

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setCardState((prev) => ({
          ...prev,
          customImage: event.target?.result as string,
        }))
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleRandomTemplate = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * cardTemplates.length)
    const newTemplate = cardTemplates[randomIndex]
    setCardState((prev) => ({
      ...prev,
      template: newTemplate,
      greeting: newTemplate.defaultGreeting,
    }))
  }, [])

  const SelectedDecoration = decorations.find((d) => d.id === cardState.decoration)?.Icon || CrescentMoon

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Preview Section */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-24">
              <h2 className="text-xl font-bold mb-4 text-foreground">معاينة البطاقة</h2>

              {/* Card Preview */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={cardState.template.id}
                  initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  ref={cardRef}
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden mx-auto max-w-md"
                  style={{ 
                    background: cardState.template.bgGradient,
                    boxShadow: `0 25px 50px -12px rgba(0,0,0,0.4), 0 0 60px ${cardState.template.accentColor}20`
                  }}
                >
                  {/* Decorative border frame */}
                  <div 
                    className="absolute inset-3 rounded-2xl border-2 pointer-events-none"
                    style={{ borderColor: `${cardState.template.accentColor}30` }}
                  />
                  <div 
                    className="absolute inset-5 rounded-xl border pointer-events-none"
                    style={{ borderColor: `${cardState.template.accentColor}15` }}
                  />

                  {/* Corner ornaments */}
                  <CornerOrnament position="top-left" color={cardState.template.accentColor} />
                  <CornerOrnament position="top-right" color={cardState.template.accentColor} />
                  <CornerOrnament position="bottom-left" color={cardState.template.accentColor} />
                  <CornerOrnament position="bottom-right" color={cardState.template.accentColor} />

                  {/* Floating particles */}
                  <FloatingParticles color={cardState.template.accentColor} />

                  {/* Ambient glow effect */}
                  <div 
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                    style={{ backgroundColor: cardState.template.accentColor }}
                  />

                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    {cardState.template.pattern === "geometric" && (
                      <GeometricPattern
                        className="w-full h-full"
                        style={{ color: cardState.template.accentColor } as React.CSSProperties}
                      />
                    )}
                    {cardState.template.pattern === "floral" && (
                      <FloralPattern
                        className="w-full h-full"
                        style={{ color: cardState.template.accentColor } as React.CSSProperties}
                      />
                    )}
                    {cardState.template.pattern === "moroccan" && (
                      <MoroccanPattern
                        className="w-full h-full"
                        style={{ color: cardState.template.accentColor } as React.CSSProperties}
                      />
                    )}
                    {cardState.template.pattern === "stars" && (
                      <div className="absolute inset-0">
                        {[...Array(16)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              opacity: [0.3, 0.7, 0.3],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 2 + Math.random() * 2,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                            className="absolute"
                            style={{
                              left: `${8 + (i % 4) * 24}%`,
                              top: `${8 + Math.floor(i / 4) * 22}%`,
                            }}
                          >
                            <Star
                              className="w-3 h-3"
                              style={{ color: cardState.template.accentColor }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Custom Image */}
                  {cardState.customImage && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute top-8 left-1/2 -translate-x-1/2 z-10"
                    >
                      <div 
                        className="relative w-20 h-20 rounded-full overflow-hidden"
                        style={{
                          boxShadow: `0 0 0 3px ${cardState.template.accentColor}, 0 0 0 6px ${cardState.template.accentColor}30, 0 8px 20px rgba(0,0,0,0.3)`
                        }}
                      >
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${cardState.customImage})` }}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                    {/* Decoration */}
                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        filter: ["drop-shadow(0 4px 8px rgba(0,0,0,0.2))", "drop-shadow(0 8px 16px rgba(0,0,0,0.3))", "drop-shadow(0 4px 8px rgba(0,0,0,0.2))"]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="mb-6"
                    >
                      <div 
                        className="relative"
                        style={{ filter: `drop-shadow(0 0 10px ${cardState.template.accentColor}50)` }}
                      >
                        <SelectedDecoration
                          className="w-20 h-20"
                          style={{ color: cardState.template.accentColor } as React.CSSProperties}
                        />
                      </div>
                    </motion.div>

                    {/* Divider line */}
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="w-24 h-0.5 mb-6 rounded-full"
                      style={{ backgroundColor: `${cardState.template.accentColor}60` }}
                    />

                    {/* Greeting */}
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className={cn(
                        "arabic-heading leading-relaxed mb-4 text-balance",
                        fonts.find((f) => f.id === cardState.fontFamily)?.className
                      )}
                      style={{
                        color: cardState.template.textColor,
                        fontSize: `${cardState.fontSize}px`,
                        textShadow: `0 2px 10px rgba(0,0,0,0.2)`
                      }}
                    >
                      {cardState.greeting}
                    </motion.h2>

                    {/* Name */}
                    <AnimatePresence>
                      {cardState.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-8 h-px" style={{ backgroundColor: `${cardState.template.accentColor}40` }} />
                          <p
                            className="text-lg font-medium"
                            style={{ color: cardState.template.textColor, opacity: 0.85 }}
                          >
                            {cardState.name}
                          </p>
                          <div className="w-8 h-px" style={{ backgroundColor: `${cardState.template.accentColor}40` }} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Watermark */}
                  <div
                    className="absolute bottom-4 left-0 right-0 text-center text-xs font-medium tracking-wide"
                    style={{ color: cardState.template.textColor, opacity: 0.4 }}
                  >
                    بطاقات العيد
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8 justify-center">
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <Download className="ml-2 h-5 w-5" />
                  {isDownloading ? "جاري التحميل..." : "تحميل PNG"}
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-primary/40 hover:bg-primary/10 transition-all"
                >
                  <Share2 className="ml-2 h-5 w-5" />
                  مشاركة
                </Button>
                <Button
                  onClick={handleWhatsAppShare}
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  واتساب
                </Button>
              </div>
            </div>
          </div>

          {/* Editor Controls */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">تخصيص البطاقة</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRandomTemplate}
                className="rounded-full"
              >
                <RefreshCw className="ml-2 h-4 w-4" />
                قالب عشوائي
              </Button>
            </div>

            {/* Template Selection */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <Label className="flex items-center gap-2 mb-4 text-foreground font-semibold">
                <Palette className="h-5 w-5 text-primary" />
                اختر القالب
              </Label>
              <div className="grid grid-cols-4 gap-3">
                {cardTemplates.map((template) => (
                  <motion.button
                    key={template.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      setCardState((prev) => ({
                        ...prev,
                        template,
                        greeting: template.defaultGreeting,
                      }))
                    }
                    className={cn(
                      "relative aspect-square rounded-xl border-2 transition-all overflow-hidden group",
                      cardState.template.id === template.id
                        ? "border-primary ring-2 ring-primary/30 ring-offset-2 ring-offset-background"
                        : "border-transparent hover:border-primary/50"
                    )}
                    style={{ background: template.bgGradient }}
                  >
                    <motion.div
                      animate={cardState.template.id === template.id ? { rotate: [0, 5, -5, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <CrescentMoon
                        className="w-7 h-7 mx-auto mt-3 group-hover:scale-110 transition-transform"
                        style={{ color: template.accentColor } as React.CSSProperties}
                      />
                    </motion.div>
                    {template.trending && (
                      <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
                    )}
                    {template.new && (
                      <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm space-y-5">
              <Label className="flex items-center gap-2 text-foreground font-semibold">
                <Type className="h-5 w-5 text-primary" />
                النص
              </Label>

              <div className="space-y-2">
                <Label htmlFor="greeting" className="text-sm text-muted-foreground">
                  نص التهنئة
                </Label>
                <Input
                  id="greeting"
                  value={cardState.greeting}
                  onChange={(e) =>
                    setCardState((prev) => ({ ...prev, greeting: e.target.value }))
                  }
                  placeholder="عيد أضحى مبارك"
                  className="text-right h-12 text-base rounded-xl"
                  dir="rtl"
                />
              </div>

              {/* Pre-written Greetings */}
              <div className="space-y-3">
                <Label className="text-sm text-muted-foreground flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  اختر نص جاهز
                </Label>
                <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-1">
                  {greetingTexts.map((greeting) => (
                    <motion.button
                      key={greeting.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        setCardState((prev) => ({ ...prev, greeting: greeting.text }))
                      }
                      className={cn(
                        "px-3 py-2 text-sm rounded-full border transition-all",
                        cardState.greeting === greeting.text
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-muted/50 border-border hover:border-primary/50 hover:bg-primary/5"
                      )}
                    >
                      {greeting.text}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm text-muted-foreground">
                  اسمك (اختياري)
                </Label>
                <Input
                  id="name"
                  value={cardState.name}
                  onChange={(e) =>
                    setCardState((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="أدخل اسمك هنا"
                  className="text-right h-12 text-base rounded-xl"
                  dir="rtl"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm text-muted-foreground">حجم الخط</Label>
                  <span className="text-sm font-medium text-primary">{cardState.fontSize}px</span>
                </div>
                <Slider
                  value={[cardState.fontSize]}
                  onValueChange={([value]) =>
                    setCardState((prev) => ({ ...prev, fontSize: value }))
                  }
                  min={16}
                  max={40}
                  step={1}
                  className="py-2"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">نوع الخط</Label>
                <Select
                  value={cardState.fontFamily}
                  onValueChange={(value) =>
                    setCardState((prev) => ({ ...prev, fontFamily: value }))
                  }
                >
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {fonts.map((font) => (
                      <SelectItem key={font.id} value={font.id}>
                        {font.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Decoration */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <Label className="flex items-center gap-2 mb-4 text-foreground font-semibold">
                <Sparkles className="h-5 w-5 text-primary" />
                الزخرفة
              </Label>
              <div className="grid grid-cols-3 gap-3">
                {decorations.map((dec) => (
                  <motion.button
                    key={dec.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() =>
                      setCardState((prev) => ({ ...prev, decoration: dec.id }))
                    }
                    className={cn(
                      "p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 group",
                      cardState.decoration === dec.id
                        ? "border-primary bg-primary/10 shadow-md"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    )}
                  >
                    <motion.div
                      animate={cardState.decoration === dec.id ? { y: [0, -3, 0] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <dec.Icon className={cn(
                        "w-9 h-9 transition-colors",
                        cardState.decoration === dec.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                      )} />
                    </motion.div>
                    <span className={cn(
                      "text-xs font-medium transition-colors",
                      cardState.decoration === dec.id ? "text-primary" : "text-muted-foreground"
                    )}>{dec.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <Label className="flex items-center gap-2 mb-4 text-foreground font-semibold">
                <ImageIcon className="h-5 w-5 text-primary" />
                صورة شخصية (اختياري)
              </Label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 h-12 rounded-xl border-2 border-dashed border-primary/30 hover:border-primary hover:bg-primary/5"
                >
                  <ImageIcon className="ml-2 h-5 w-5" />
                  رفع صورة
                </Button>
                {cardState.customImage && (
                  <Button
                    variant="destructive"
                    size="icon"
                    className="h-12 w-12 rounded-xl"
                    onClick={() =>
                      setCardState((prev) => ({ ...prev, customImage: null }))
                    }
                  >
                    <X className="h-5 w-5" />
                  </Button>
                )}
              </div>
              {cardState.customImage && (
                <div className="mt-4 flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                  <div 
                    className="w-12 h-12 rounded-lg bg-cover bg-center border-2 border-primary/30"
                    style={{ backgroundImage: `url(${cardState.customImage})` }}
                  />
                  <span className="text-sm text-muted-foreground">تم رفع الصورة بنجاح</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Share Dialog */}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>مشاركة البطاقة</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                onClick={handleWhatsAppShare}
                className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
              >
                <MessageCircle className="ml-2 h-4 w-4" />
                واتساب
              </Button>
              <Button
                onClick={handleCopyLink}
                variant="outline"
                className="flex-1"
              >
                {copied ? (
                  <Check className="ml-2 h-4 w-4" />
                ) : (
                  <Copy className="ml-2 h-4 w-4" />
                )}
                {copied ? "تم النسخ" : "نسخ الرابط"}
              </Button>
            </div>
            <SuggestedCaptions />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
