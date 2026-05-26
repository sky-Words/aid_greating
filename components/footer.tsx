"use client"

import Link from "next/link"
import { CrescentMoon } from "@/components/icons/islamic-icons"

const footerLinks = {
  main: [
    { href: "/", label: "الرئيسية" },
    { href: "/editor", label: "صمم بطاقتك" },
    { href: "/trending", label: "بطاقات رائجة" },
  ],
  support: [
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "اتصل بنا" },
    { href: "/privacy", label: "سياسة الخصوصية" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <CrescentMoon className="h-8 w-8 text-primary" />
              <span className="arabic-heading text-xl font-bold">بطاقات العيد</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              صمم أجمل بطاقات التهنئة بمناسبة عيد الأضحى المبارك. قوالب متنوعة وتصاميم إسلامية راقية تناسب جميع الأذواق.
            </p>
            <p className="mt-4 text-sm text-primary arabic-heading">
              صُنعت بحب بمناسبة عيد الأضحى المبارك
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">روابط سريعة</h3>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">الدعم</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} بطاقات العيد. جميع الحقوق محفوظة.
          </p>
          {/* AdSense Placeholder */}
          <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-dashed border-border">
            <p className="text-xs text-muted-foreground">مساحة إعلانية - Google AdSense</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
