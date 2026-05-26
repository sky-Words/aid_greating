import type { Metadata } from "next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { CardEditor } from "@/components/card-editor"
import { Footer } from "@/components/footer"
import { WhatsAppFloatingButton } from "@/components/viral-features"

export const metadata: Metadata = {
  title: "صمم بطاقتك | بطاقات عيد الأضحى المبارك",
  description: "صمم بطاقة تهنئة فريدة بمناسبة عيد الأضحى المبارك. أضف اسمك ورسالتك وشاركها مع أحبابك.",
  openGraph: {
    title: "صمم بطاقتك | بطاقات عيد الأضحى المبارك",
    description: "صمم بطاقة تهنئة فريدة بمناسبة عيد الأضحى المبارك",
  },
}

export default function EditorPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-10 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="arabic-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            صمم بطاقتك الخاصة
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            اختر القالب المناسب، أضف اسمك ورسالتك، ثم حمّل البطاقة أو شاركها مباشرة
          </p>
        </div>
      </section>

      {/* AdSense Placeholder */}
      <div className="container mx-auto px-4 py-4">
        <div className="p-4 bg-muted/30 rounded-lg border border-dashed border-border text-center">
          <p className="text-xs text-muted-foreground">مساحة إعلانية - Google AdSense</p>
        </div>
      </div>

      <Suspense fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">جاري التحميل...</div>
        </div>
      }>
        <CardEditor />
      </Suspense>

      <Footer />
      <WhatsAppFloatingButton />
    </main>
  )
}
