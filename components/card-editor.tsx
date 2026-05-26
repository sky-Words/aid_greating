"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
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
import { cardTemplates, type CardTemplate } from "@/lib/templates"
import { CrescentMoon, Star, GeometricPattern, Mosque, Lantern, Sheep } from "@/components/icons/islamic-icons"
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
    const shareText = `${cardState.greeting} - ${cardState.name || "من محب"}`
    const shareUrl = typeof window !== "undefined" ? window.location.href : ""

    if (navigator.share) {
      try {
        await navigator.share({
          title: "بطاقة عيد الأضحى",
          text: shareText,
          url: shareUrl,
        })
      } catch {
        setShowShareDialog(true)
      }
    } else {
      setShowShareDialog(true)
    }
  }, [cardState.greeting, cardState.name])

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
              <div
                ref={cardRef}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-md"
                style={{ background: cardState.template.bgGradient }}
              >
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  {cardState.template.pattern === "geometric" && (
                    <GeometricPattern
                      className="w-full h-full"
                      style={{ color: cardState.template.accentColor } as React.CSSProperties}
                    />
                  )}
                  {cardState.template.pattern === "stars" && (
                    <div className="absolute inset-0">
                      {[...Array(12)].map((_, i) => (
                        <Star
                          key={i}
                          className="absolute w-4 h-4"
                          style={{
                            color: cardState.template.accentColor,
                            left: `${10 + (i % 4) * 25}%`,
                            top: `${5 + Math.floor(i / 4) * 30}%`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Custom Image */}
                {cardState.customImage && (
                  <div className="absolute top-6 left-1/2 -translate-x-1/2">
                    <div
                      className="w-20 h-20 rounded-full border-4 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${cardState.customImage})`,
                        borderColor: cardState.template.accentColor,
                      }}
                    />
                  </div>
                )}

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  {/* Decoration */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mb-6"
                  >
                    <SelectedDecoration
                      className="w-16 h-16"
                      style={{ color: cardState.template.accentColor } as React.CSSProperties}
                    />
                  </motion.div>

                  {/* Greeting */}
                  <h2
                    className={cn(
                      "arabic-heading leading-relaxed mb-4",
                      fonts.find((f) => f.id === cardState.fontFamily)?.className
                    )}
                    style={{
                      color: cardState.template.textColor,
                      fontSize: `${cardState.fontSize}px`,
                    }}
                  >
                    {cardState.greeting}
                  </h2>

                  {/* Name */}
                  {cardState.name && (
                    <p
                      className="text-lg opacity-80"
                      style={{ color: cardState.template.textColor }}
                    >
                      {cardState.name}
                    </p>
                  )}
                </div>

                {/* Watermark */}
                <div
                  className="absolute bottom-3 left-0 right-0 text-center text-xs opacity-50"
                  style={{ color: cardState.template.textColor }}
                >
                  بطاقات العيد
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6 justify-center">
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                >
                  <Download className="ml-2 h-4 w-4" />
                  {isDownloading ? "جاري التحميل..." : "تحميل PNG"}
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="rounded-full border-primary/30"
                >
                  <Share2 className="ml-2 h-4 w-4" />
                  مشاركة
                </Button>
                <Button
                  onClick={handleWhatsAppShare}
                  className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full"
                >
                  <MessageCircle className="ml-2 h-4 w-4" />
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
            <div className="bg-card rounded-xl p-6 border border-border">
              <Label className="flex items-center gap-2 mb-4 text-foreground">
                <Palette className="h-4 w-4" />
                اختر القالب
              </Label>
              <div className="grid grid-cols-4 gap-2">
                {cardTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() =>
                      setCardState((prev) => ({
                        ...prev,
                        template,
                        greeting: template.defaultGreeting,
                      }))
                    }
                    className={cn(
                      "aspect-square rounded-lg border-2 transition-all overflow-hidden",
                      cardState.template.id === template.id
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-transparent hover:border-primary/50"
                    )}
                    style={{ background: template.bgGradient }}
                  >
                    <CrescentMoon
                      className="w-6 h-6 mx-auto mt-2"
                      style={{ color: template.accentColor } as React.CSSProperties}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="bg-card rounded-xl p-6 border border-border space-y-4">
              <Label className="flex items-center gap-2 text-foreground">
                <Type className="h-4 w-4" />
                النص
              </Label>

              <div>
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
                  className="mt-1 text-right"
                  dir="rtl"
                />
              </div>

              <div>
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
                  className="mt-1 text-right"
                  dir="rtl"
                />
              </div>

              <div>
                <Label className="text-sm text-muted-foreground">
                  حجم الخط: {cardState.fontSize}px
                </Label>
                <Slider
                  value={[cardState.fontSize]}
                  onValueChange={([value]) =>
                    setCardState((prev) => ({ ...prev, fontSize: value }))
                  }
                  min={16}
                  max={40}
                  step={1}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-sm text-muted-foreground">نوع الخط</Label>
                <Select
                  value={cardState.fontFamily}
                  onValueChange={(value) =>
                    setCardState((prev) => ({ ...prev, fontFamily: value }))
                  }
                >
                  <SelectTrigger className="mt-1">
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
            <div className="bg-card rounded-xl p-6 border border-border">
              <Label className="flex items-center gap-2 mb-4 text-foreground">
                <Sparkles className="h-4 w-4" />
                الزخرفة
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {decorations.map((dec) => (
                  <button
                    key={dec.id}
                    onClick={() =>
                      setCardState((prev) => ({ ...prev, decoration: dec.id }))
                    }
                    className={cn(
                      "p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2",
                      cardState.decoration === dec.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <dec.Icon className="w-8 h-8 text-primary" />
                    <span className="text-xs">{dec.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <Label className="flex items-center gap-2 mb-4 text-foreground">
                <ImageIcon className="h-4 w-4" />
                صورة شخصية (اختياري)
              </Label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1"
                >
                  <ImageIcon className="ml-2 h-4 w-4" />
                  رفع صورة
                </Button>
                {cardState.customImage && (
                  <Button
                    variant="destructive"
                    onClick={() =>
                      setCardState((prev) => ({ ...prev, customImage: null }))
                    }
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
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
