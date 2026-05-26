import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TemplatesSection } from "@/components/templates-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection, WhatsAppFloatingButton } from "@/components/viral-features"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* AdSense Placeholder - Top */}
      <div className="container mx-auto px-4 py-4">
        <div className="p-4 bg-muted/30 rounded-lg border border-dashed border-border text-center">
          <p className="text-xs text-muted-foreground">مساحة إعلانية - Google AdSense</p>
        </div>
      </div>
      
      <TemplatesSection />
      
      {/* AdSense Placeholder - Middle */}
      <div className="container mx-auto px-4 py-4">
        <div className="p-4 bg-muted/30 rounded-lg border border-dashed border-border text-center">
          <p className="text-xs text-muted-foreground">مساحة إعلانية - Google AdSense</p>
        </div>
      </div>
      
      <FeaturesSection />
      <CTASection />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  )
}
