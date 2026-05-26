import type { Metadata, Viewport } from 'next'
import { Amiri, Noto_Kufi_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-kufi',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'بطاقات عيد الأضحى المبارك | صمم بطاقتك الآن',
  description: 'صمم أجمل بطاقات التهنئة بمناسبة عيد الأضحى المبارك. قوالب متنوعة، تصاميم إسلامية راقية، مشاركة سهلة عبر واتساب. عيد مبارك سعيد!',
  keywords: ['عيد الأضحى', 'بطاقات العيد', 'تهنئة العيد', 'عيد مبارك', 'بطاقات إسلامية', 'Eid Al-Adha', 'Eid cards', 'Islamic greeting cards'],
  authors: [{ name: 'بطاقات العيد' }],
  openGraph: {
    title: 'بطاقات عيد الأضحى المبارك',
    description: 'صمم أجمل بطاقات التهنئة بمناسبة عيد الأضحى المبارك',
    type: 'website',
    locale: 'ar_MA',
    siteName: 'بطاقات العيد',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'بطاقات عيد الأضحى المبارك',
    description: 'صمم أجمل بطاقات التهنئة بمناسبة عيد الأضحى المبارك',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f0e6' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1410' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script src="https://quge5.com/88/tag.min.js" data-zone="243407" async data-cfasync="false"></script>
      </head>
      <body className={`${amiri.variable} ${notoKufi.variable} font-sans antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
