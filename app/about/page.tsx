import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloatingButton } from "@/components/viral-features"
import { CrescentMoon, Mosque, Star } from "@/components/icons/islamic-icons"

export const metadata: Metadata = {
  title: "من نحن | بطاقات عيد الأضحى المبارك",
  description: "تعرف على قصتنا ورسالتنا في نشر الفرحة والتهاني بمناسبة عيد الأضحى المبارك.",
  openGraph: {
    title: "من نحن | بطاقات عيد الأضحى المبارك",
    description: "تعرف على قصتنا ورسالتنا في نشر الفرحة",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-16 bg-muted/30 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Star className="absolute top-10 right-20 w-8 h-8 text-primary" />
          <Star className="absolute top-20 left-32 w-6 h-6 text-primary" />
          <Star className="absolute bottom-10 right-1/3 w-4 h-4 text-primary" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <CrescentMoon className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="arabic-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            من نحن
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            نشر الفرحة والتهاني في كل بيت عربي
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg dark:prose-invert mx-auto text-right" dir="rtl">
            <h2 className="arabic-heading text-2xl font-bold text-foreground mb-6">قصتنا</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              بدأت فكرة بطاقات العيد من رغبة بسيطة في تسهيل مشاركة التهاني والتبريكات بمناسبة الأعياد الإسلامية. في عصر التواصل الرقمي، أردنا أن نوفر أداة سهلة وجميلة تمكّن الجميع من إنشاء بطاقات تهنئة راقية دون الحاجة لخبرة في التصميم.
            </p>

            <h2 className="arabic-heading text-2xl font-bold text-foreground mb-6 mt-10">رسالتنا</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              نسعى لنشر الفرحة والبهجة في كل بيت عربي من خلال تصاميم إسلامية أصيلة تعكس جمال تراثنا وثقافتنا. نؤمن بأن التهنئة الصادقة لا تحتاج لميزانية ضخمة، بل تحتاج فقط للقليل من الحب والاهتمام.
            </p>

            <h2 className="arabic-heading text-2xl font-bold text-foreground mb-6 mt-10">قيمنا</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span><strong className="text-foreground">الجودة:</strong> نحرص على تقديم تصاميم عالية الجودة تليق بالمناسبات الدينية</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span><strong className="text-foreground">البساطة:</strong> نجعل عملية التصميم سهلة وممتعة للجميع</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span><strong className="text-foreground">المجانية:</strong> نؤمن بأن السعادة يجب أن تكون متاحة للجميع</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span><strong className="text-foreground">الأصالة:</strong> نستلهم تصاميمنا من التراث الإسلامي والمغربي العريق</span>
              </li>
            </ul>

            <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20 text-center">
              <Mosque className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-foreground font-medium text-lg">
                &ldquo;خير الناس أنفعهم للناس&rdquo;
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                حديث شريف
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatingButton />
    </main>
  )
}
