import type { Metadata } from "next"
import Link from "next/link"
import { TrendingUp, Sparkles } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloatingButton } from "@/components/viral-features"
import { Button } from "@/components/ui/button"
import { cardTemplates } from "@/lib/templates"
import { CrescentMoon, Star, GeometricPattern } from "@/components/icons/islamic-icons"

export const metadata: Metadata = {
  title: "بطاقات رائجة | بطاقات عيد الأضحى المبارك",
  description: "اكتشف أكثر بطاقات عيد الأضحى رواجاً. تصاميم إسلامية راقية يحبها الجميع.",
  openGraph: {
    title: "بطاقات رائجة | بطاقات عيد الأضحى المبارك",
    description: "اكتشف أكثر بطاقات عيد الأضحى رواجاً",
  },
}

export default function TrendingPage() {
  const trendingTemplates = cardTemplates.filter((t) => t.trending)
  const newTemplates = cardTemplates.filter((t) => t.new)
  const allTemplates = cardTemplates

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">الأكثر رواجاً</span>
          </div>
          <h1 className="arabic-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            بطاقات رائجة
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            استكشف أجمل قوالب بطاقات عيد الأضحى التي يحبها الجميع
          </p>
        </div>
      </section>

      {/* AdSense Placeholder */}
      <div className="container mx-auto px-4 py-4">
        <div className="p-4 bg-muted/30 rounded-lg border border-dashed border-border text-center">
          <p className="text-xs text-muted-foreground">مساحة إعلانية - Google AdSense</p>
        </div>
      </div>

      {/* Trending Section */}
      {trendingTemplates.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="arabic-heading text-2xl font-bold text-foreground">الأكثر استخداماً</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {trendingTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* New Templates Section */}
      {newTemplates.length > 0 && (
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="h-6 w-6 text-secondary" />
              <h2 className="arabic-heading text-2xl font-bold text-foreground">جديد هذا الأسبوع</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {newTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Templates Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="arabic-heading text-2xl font-bold text-foreground mb-8">جميع القوالب</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {allTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatingButton />
    </main>
  )
}

function TemplateCard({ template }: { template: (typeof cardTemplates)[0] }) {
  return (
    <Link href={`/editor?template=${template.id}`} className="group">
      <div
        className="relative aspect-[4/5] rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl"
        style={{ background: template.bgGradient }}
      >
        {/* Pattern */}
        <div className="absolute inset-0 opacity-20">
          {template.pattern === "geometric" && (
            <GeometricPattern className="w-full h-full" style={{ color: template.accentColor }} />
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
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <CrescentMoon className="w-12 h-12 mb-4 opacity-80" style={{ color: template.accentColor }} />
          <h3
            className="arabic-heading text-lg md:text-xl font-bold leading-relaxed"
            style={{ color: template.textColor }}
          >
            {template.defaultGreeting}
          </h3>
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

        {/* Hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            استخدم هذا القالب
          </Button>
        </div>
      </div>

      <div className="mt-3 text-center">
        <h4 className="font-medium text-foreground">{template.nameAr}</h4>
        <p className="text-sm text-muted-foreground">{template.categoryAr}</p>
      </div>
    </Link>
  )
}
