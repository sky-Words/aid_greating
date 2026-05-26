import type { Metadata } from "next"
import { Mail, MessageCircle, MapPin } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloatingButton } from "@/components/viral-features"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "اتصل بنا | بطاقات عيد الأضحى المبارك",
  description: "تواصل معنا لأي استفسار أو اقتراح. نسعد بسماع آرائكم ومقترحاتكم.",
  openGraph: {
    title: "اتصل بنا | بطاقات عيد الأضحى المبارك",
    description: "تواصل معنا لأي استفسار أو اقتراح",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="arabic-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            اتصل بنا
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            نسعد بتواصلكم معنا لأي استفسار أو اقتراح
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="arabic-heading text-2xl font-bold text-foreground mb-6">
                معلومات التواصل
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">البريد الإلكتروني</h3>
                    <p className="text-muted-foreground">contact@eid-cards.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">واتساب</h3>
                    <p className="text-muted-foreground">+212 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">الموقع</h3>
                    <p className="text-muted-foreground">المغرب</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-muted/50 rounded-2xl">
                <h3 className="font-medium text-foreground mb-3">ساعات العمل</h3>
                <p className="text-muted-foreground">
                  نرد على رسائلكم في أسرع وقت ممكن
                  <br />
                  متاحون على مدار الساعة خلال موسم العيد
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="arabic-heading text-2xl font-bold text-foreground mb-6">
                أرسل رسالة
              </h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">الاسم الكامل</Label>
                  <Input
                    id="name"
                    placeholder="أدخل اسمك"
                    className="mt-2"
                    dir="rtl"
                  />
                </div>

                <div>
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="mt-2"
                    dir="ltr"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">الموضوع</Label>
                  <Input
                    id="subject"
                    placeholder="موضوع الرسالة"
                    className="mt-2"
                    dir="rtl"
                  />
                </div>

                <div>
                  <Label htmlFor="message">الرسالة</Label>
                  <Textarea
                    id="message"
                    placeholder="اكتب رسالتك هنا..."
                    className="mt-2 min-h-32"
                    dir="rtl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                >
                  إرسال الرسالة
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatingButton />
    </main>
  )
}
