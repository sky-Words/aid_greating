import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "سياسة الخصوصية | بطاقات عيد الأضحى المبارك",
  description: "سياسة الخصوصية وحماية البيانات الخاصة بموقع بطاقات العيد.",
  openGraph: {
    title: "سياسة الخصوصية | بطاقات عيد الأضحى المبارك",
    description: "سياسة الخصوصية وحماية البيانات",
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="arabic-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            آخر تحديث: يونيو 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg dark:prose-invert mx-auto text-right space-y-8" dir="rtl">
            <div>
              <h2 className="arabic-heading text-xl font-bold text-foreground mb-4">مقدمة</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحن في بطاقات العيد نحترم خصوصيتكم ونلتزم بحماية بياناتكم الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات التي تقدمونها لنا.
              </p>
            </div>

            <div>
              <h2 className="arabic-heading text-xl font-bold text-foreground mb-4">المعلومات التي نجمعها</h2>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>الأسماء والرسائل المدخلة في البطاقات (لا يتم تخزينها على خوادمنا)</li>
                <li>الصور المرفوعة (تُعالج محلياً في متصفحك فقط)</li>
                <li>بيانات الاستخدام المجهولة لتحسين الخدمة</li>
                <li>ملفات تعريف الارتباط (Cookies) للإعلانات</li>
              </ul>
            </div>

            <div>
              <h2 className="arabic-heading text-xl font-bold text-foreground mb-4">كيف نستخدم المعلومات</h2>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>تحسين تجربة المستخدم</li>
                <li>عرض إعلانات مخصصة عبر Google AdSense</li>
                <li>تحليل حركة الموقع وفهم احتياجات المستخدمين</li>
                <li>الرد على استفساراتكم ورسائلكم</li>
              </ul>
            </div>

            <div>
              <h2 className="arabic-heading text-xl font-bold text-foreground mb-4">ملفات تعريف الارتباط (Cookies)</h2>
              <p className="text-muted-foreground leading-relaxed">
                نستخدم ملفات تعريف الارتباط لتحسين تجربتكم وعرض إعلانات ملائمة. يمكنكم التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحكم.
              </p>
            </div>

            <div>
              <h2 className="arabic-heading text-xl font-bold text-foreground mb-4">Google AdSense</h2>
              <p className="text-muted-foreground leading-relaxed">
                نستخدم خدمة Google AdSense لعرض الإعلانات. تستخدم Google ملفات تعريف الارتباط لعرض إعلانات مخصصة بناءً على زياراتكم السابقة. يمكنكم إلغاء الاشتراك في الإعلانات المخصصة من خلال{" "}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  إعدادات إعلانات Google
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="arabic-heading text-xl font-bold text-foreground mb-4">حماية البيانات</h2>
              <p className="text-muted-foreground leading-relaxed">
                نتخذ إجراءات أمنية مناسبة لحماية بياناتكم من الوصول غير المصرح به أو التعديل أو الإفصاح. جميع عمليات إنشاء البطاقات تتم محلياً في متصفحكم ولا يتم إرسال بياناتكم إلى خوادمنا.
              </p>
            </div>

            <div>
              <h2 className="arabic-heading text-xl font-bold text-foreground mb-4">حقوقكم</h2>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>الحق في الوصول إلى بياناتكم</li>
                <li>الحق في تصحيح بياناتكم</li>
                <li>الحق في حذف بياناتكم</li>
                <li>الحق في الاعتراض على معالجة بياناتكم</li>
              </ul>
            </div>

            <div>
              <h2 className="arabic-heading text-xl font-bold text-foreground mb-4">التواصل معنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                إذا كانت لديكم أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا عبر صفحة الاتصال أو البريد الإلكتروني: contact@eid-cards.com
              </p>
            </div>

            <div>
              <h2 className="arabic-heading text-xl font-bold text-foreground mb-4">تحديثات السياسة</h2>
              <p className="text-muted-foreground leading-relaxed">
                قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ آخر تعديل.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
