import { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import './App.css'

const cardDesigns = [
  {
    id: 1,
    name: 'كلاسيكي فاخر',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    pattern: 'stars',
    textColor: '#fbbf24',
    template: 'classic'
  },
  {
    id: 2,
    name: 'وردي ملكي',
    gradient: 'linear-gradient(135deg, #2d1f3d 0%, #4a2c5c 50%, #6b3d7a 100%)',
    pattern: 'moon',
    textColor: '#fbbf24',
    template: 'classic'
  },
  {
    id: 3,
    name: 'ذهبي متألق',
    gradient: 'linear-gradient(135deg, #2c1a0a 0%, #5c3a1a 50%, #7a5a2a 100%)',
    pattern: 'stars',
    textColor: '#ffd700',
    template: 'gold'
  },
  {
    id: 4,
    name: 'أزرق سماوي',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #1a3a5c 50%, #2d5a7a 100%)',
    pattern: 'moon',
    textColor: '#fbbf24',
    template: 'classic'
  },
  {
    id: 5,
    name: 'زمرد ليلي',
    gradient: 'linear-gradient(135deg, #0d2818 0%, #1a4d2e 50%, #2d6a4f 100%)',
    pattern: 'stars',
    textColor: '#fbbf24',
    template: 'classic'
  },
  {
    id: 6,
    name: 'بنفسجي نادر',
    gradient: 'linear-gradient(135deg, #1e1e2f 0%, #3d1e5e 50%, #5c2d7a 100%)',
    pattern: 'moon',
    textColor: '#ffd700',
    template: 'classic'
  },
  {
    id: 7,
    name: 'أبيض ناصع',
    gradient: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
    pattern: 'stars',
    textColor: '#1a1a2e',
    template: 'light'
  },
  {
    id: 8,
    name: 'أحمر فاخر',
    gradient: 'linear-gradient(135deg, #2a0a0a 0%, #5c1a1a 50%, #7a2a2a 100%)',
    pattern: 'moon',
    textColor: '#ffd700',
    template: 'classic'
  },
  {
    id: 9,
    name: 'تركواز ساحر',
    gradient: 'linear-gradient(135deg, #0a2828 0%, #1a4d4d 50%, #2d6a6a 100%)',
    pattern: 'stars',
    textColor: '#ffd700',
    template: 'classic'
  },
  {
    id: 10,
    name: 'بنفلطني فاخر',
    gradient: 'linear-gradient(135deg, #3d1a2e 0%, #5c2d45 50%, #7a3d5c 100%)',
    pattern: 'moon',
    textColor: '#fbbf24',
    template: 'classic'
  },
  {
    id: 11,
    name: 'ذهبي دافئ',
    gradient: 'linear-gradient(135deg, #4a3b0a 0%, #6a5a1a 50%, #7a6a2a 100%)',
    pattern: 'stars',
    textColor: '#ffed4e',
    template: 'gold'
  },
  {
    id: 12,
    name: 'أزرق عميق',
    gradient: 'linear-gradient(135deg, #0a0a28 0%, #1a1a4d 50%, #2d2d6a 100%)',
    pattern: 'moon',
    textColor: '#ffd700',
    template: 'classic'
  }
]

const eidMessages = [
  "عيد مبارك! بارك الله لك ولأسرتك بالفرح والسلام والازدهار",
  "نرجو أن يكون عيدكم مباركاً مليئاً بالفرح والسعادة",
  "عيد مبارك! ليمان نور العيد يضيء قلبك وبيتك",
  "تقبّل الله صيامكم وطاعتكم وكل عام وأنتم بخير",
  "نتمنى لكم عيداً مليئاً بالسعادة والخير والبركات",
  "كل عام وأنتم بخير عيد مبارك",
  "أجمل التهاني بعيد الفطر السعيد",
]

// SVG Icons
const CrescentMoon = ({ className }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4C20 4 12 8 12 20C12 28 16 32 20 32C24 32 28 28 28 20C28 8 20 4 20 4Z" fill="#fde68a"/>
    <path d="M24 8C24 8 18 12 18 20C18 26 20 28 24 28" fill="#0f172a"/>
  </svg>
)

const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8L10 0Z" fill="#fde68a"/>
  </svg>
)

const Lantern = ({ className }) => (
  <svg className={className} viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 0L10 10V45C10 55 16 62 25 62C34 62 40 55 40 45V10L25 0Z" fill="#fde68a"/>
    <path d="M25 8L14 15V45C14 52 19 56 25 56C31 56 36 52 36 45V15L25 8Z" fill="#fbbf24"/>
    <path d="M25 62V68" stroke="#fde68a" strokeWidth="2"/>
    <path d="M15 68H35" stroke="#fde68a" strokeWidth="2"/>
    <circle cx="25" cy="32" r="6" fill="#fde68a" fillOpacity="0.4"/>
  </svg>
)

const MosqueIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L20 20V60H80V20L50 0Z" fill="#fde68a" fillOpacity="0.8"/>
    <path d="M50 8L26 22V60H74V22L50 8Z" fill="#0f172a"/>
    <rect x="46" y="28" width="8" height="32" fill="#fde68a" fillOpacity="0.6"/>
    <path d="M10 60H90" stroke="#fde68a" strokeWidth="2"/>
  </svg>
)

// Social Icons
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.297-.15.744-.496.984-.718.24-.223.535-.298.771-.447.296-.149.761-.178 1.112-.104.37.074.746.099 1.074.099.328 0 .747-.05 1.07-.15.297-.099.596-.223.859-.371.787-.447 1.445-1.467 1.58-1.768.174-.372.174-.496.124-.771-.074-.372-.672-1.198-1.093-1.695-.347-.406-.695-.447-.95-.447h-1.152c-.595 0-1.073.074-1.47.223-.372.149-.745.372-.968.595-.223.223-.446.496-.595.795-.149.298-.149.596 0 .892.149.297.595 1.198 1.495 1.698 1.124.622 1.793.817 2.222.817.596 0 1.124-.124 1.595-.372.372-.223.767-.595 1.02-1.023.074-.149.124-.298.174-.447l.074-.496c.074-.372-.023-.595-.249-.768zM12.601 22.956c-.298 0-.595-.074-.86-.223-.263-.148-.51-.372-.695-.595-.185-.223-.37-.496-.495-.795-.124-.298-.186-.596-.186-.892 0-.595.124-1.124.495-1.595.372-.472.868-.893 1.42-1.29.552-.397 1.124-.794 1.645-1.192.521-.397.942-.795 1.27-1.288.328-.496.521-1.048.521-1.645 0-.297-.074-.595-.223-.86-.148-.263-.372-.51-.595-.695-.223-.184-.496-.37-.795-.495-.298-.124-.595-.186-.892-.186h-.05c-.595.025-1.123.198-1.595.521-.471.322-.893.743-1.27 1.27-.372.521-.695 1.093-.966 1.72-.27.624-.495 1.27-.672 1.937-.176.665-.263 1.32-.263 1.965 0 .694.124 1.343.372 1.937.248.595.595 1.123 1.04 1.58.446.461.968.818 1.565 1.071.597.253 1.243.379 1.937.379.694 0 1.343-.124 1.937-.372.595-.248 1.123-.595 1.58-1.04.461-.446.818-.968 1.071-1.565.253-.597.379-1.243.379-1.937 0-.297-.025-.595-.074-.892-.05-.297-.124-.595-.223-.892-.099-.297-.248-.595-.446-.795l-.074-.074c-.174-.185-.372-.37-.595-.521-.223-.148-.495-.297-.795-.37-.297-.074-.595-.124-.892-.124z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.691 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.691-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)

function App() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState(eidMessages[0])
  const [selectedBg, setSelectedBg] = useState(cardDesigns[0])
  const [showMoon, setShowMoon] = useState(true)
  const [showLantern, setShowLantern] = useState(true)
  const [showMosque, setShowMosque] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const cardRef = useRef(null)
  const [cardImage, setCardImage] = useState(null)

  const handleDownload = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      })
      const link = document.createElement('a')
      link.download = `eid-greeting-${name || 'card'}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    }
  }

  const handleShare = async () => {
    setShowShareMenu(!showShareMenu)
  }

  const generateCardImage = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      })
      return canvas.toDataURL('image/png')
    }
    return null
  }

  const shareToWhatsApp = async () => {
    const websiteUrl = 'https://aid-greating.vercel.app'
    const text = `عيد مبارك! ${name ? `من ${name}` : ''}\n\n${message}\n\n🎄 صنع بطاقتك العيدية بالعربية!\nجرب هنا: ${websiteUrl}`
    const imageData = await generateCardImage()

    // Try Web Share API first (works on mobile)
    if (imageData && navigator.share) {
      try {
        const response = await fetch(imageData)
        const blob = await response.blob()
        const file = new File([blob], 'eid-card.png', { type: 'image/png' })
        await navigator.share({
          files: [file],
          text: text
        })
        return
      } catch (e) {}
    }

    // Fallback: download image
    if (imageData) {
      const link = document.createElement('a')
      link.download = `eid-card-${name || 'eid'}.png`
      link.href = imageData
      link.click()

      setTimeout(() => {
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
      }, 500)
    }
  }

  const shareToFacebook = async () => {
    const websiteUrl = 'https://aid-greating.vercel.app'
    const text = `عيد مبارك! ${name ? `من ${name}` : ''}\n\n${message}\n\n🎄 صنع بطاقتك العيدية بالعربية!\nجرب هنا: ${websiteUrl}`
    const imageData = await generateCardImage()

    // Try Web Share API first
    if (imageData && navigator.share) {
      try {
        const response = await fetch(imageData)
        const blob = await response.blob()
        const file = new File([blob], 'eid-card.png', { type: 'image/png' })
        await navigator.share({
          files: [file],
          text: text
        })
        return
      } catch (e) {}
    }

    // Fallback: download image
    if (imageData) {
      const link = document.createElement('a')
      link.download = `eid-card-${name || 'eid'}.png`
      link.href = imageData
      link.click()

      setTimeout(() => {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(websiteUrl), '_blank', 'width=600,height=400')
      }, 500)
    }
  }

  const shareToTwitter = async () => {
    const websiteUrl = 'https://aid-greating.vercel.app'
    const text = `عيد مبارك! ${name ? `من ${name}` : ''}\n\n${message}\n\n🎄 صنع بطاقتك العيدية بالعربية!\nجرب هنا: ${websiteUrl}`
    const imageData = await generateCardImage()

    // Try Web Share API first
    if (imageData && navigator.share) {
      try {
        const response = await fetch(imageData)
        const blob = await response.blob()
        const file = new File([blob], 'eid-card.png', { type: 'image/png' })
        await navigator.share({
          files: [file],
          text: text
        })
        return
      } catch (e) {}
    }

    // Fallback: download image
    if (imageData) {
      const link = document.createElement('a')
      link.download = `eid-card-${name || 'eid'}.png`
      link.href = imageData
      link.click()

      setTimeout(() => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank')
      }, 500)
    }
  }

  const shareToInstagram = async () => {
    const websiteUrl = 'https://aid-greating.vercel.app'
    const text = `عيد مبارك! ${name ? `من ${name}` : ''}\n\n${message}\n\n🎄 صنع بطاقتك العيدية بالعربية!\nجرب هنا: ${websiteUrl}`
    const imageData = await generateCardImage()

    // Try Web Share API first
    if (imageData && navigator.share) {
      try {
        const response = await fetch(imageData)
        const blob = await response.blob()
        const file = new File([blob], 'eid-card.png', { type: 'image/png' })
        await navigator.share({
          files: [file],
          text: text
        })
        return
      } catch (e) {}
    }

    // Fallback: download image
    if (imageData) {
      const link = document.createElement('a')
      link.download = `eid-card-${name || 'eid'}.png`
      link.href = imageData
      link.click()
      alert(`تم تحميل الصورة! 📸\n\nلنشرها على إنستغرام:\n1. افتح تطبيق إنستغرام\n2. أنشئ منشور جديد\n3. اختر هذه الصورة\n\n🎄 أو اصنع بطاقتك العيدية بالعربية هنا:\n${websiteUrl}`)
    }
  }

  const copyLink = () => {
    const websiteUrl = 'https://aid-greating.vercel.app'
    navigator.clipboard.writeText(websiteUrl)
    alert('تم نسخ الرابط! اصنع بطاقتك العيدية بالعربية من هنا')
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>استوديو بطاقات العيد</h1>
        <p className="subtitle">أنشئ بطاقات تهنئة العيد الجميلة</p>
        <button className="mobile-toggle" onClick={() => setShowControls(!showControls)}>
          {showControls ? 'إخفاء الإعدادات' : 'إظهار الإعدادات'}
        </button>
      </header>

      <main className="main-content">
        <div className={`controls-panel ${showControls ? 'open' : ''}`}>
          <div className="control-group">
            <label>اسمك</label>
            <input
              type="text"
              placeholder="أدخل اسمك"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="control-group">
            <label>الرسالة</label>
            <select value={message} onChange={(e) => setMessage(e.target.value)}>
              {eidMessages.map((msg, idx) => (
                <option key={idx} value={msg}>
                  {msg}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>تصميم البطاقة</label>
            <div className="background-grid">
              {cardDesigns.map((bg) => (
                <button
                  key={bg.id}
                  className={`bg-option ${selectedBg.id === bg.id ? 'active' : ''}`}
                  style={{ background: bg.gradient }}
                  onClick={() => setSelectedBg(bg)}
                  title={bg.name}
                />
              ))}
            </div>
          </div>

          <div className="control-group toggle-group">
            <label>
              <input type="checkbox" checked={showMoon} onChange={(e) => setShowMoon(e.target.checked)} />
              إظهار القمر والنجوم
            </label>
          </div>

          <div className="control-group toggle-group">
            <label>
              <input type="checkbox" checked={showLantern} onChange={(e) => setShowLantern(e.target.checked)} />
              إظهار الفانوس
            </label>
          </div>

          <div className="control-group toggle-group">
            <label>
              <input type="checkbox" checked={showMosque} onChange={(e) => setShowMosque(e.target.checked)} />
              إظهار Mosque
            </label>
          </div>

          <div className="button-group">
            <button className="download-btn" onClick={handleDownload}>
              تحميل البطاقة
            </button>
            <button className="share-btn" onClick={handleShare}>
              مشاركة
            </button>
          </div>

          {showShareMenu && (
            <div className="share-menu">
              <p className="share-title">مشاركة عبر:</p>
              <div className="share-options">
                <button className="share-option whatsapp" onClick={shareToWhatsApp}>
                  <WhatsAppIcon />
                  <span>واتساب</span>
                </button>
                <button className="share-option facebook" onClick={shareToFacebook}>
                  <FacebookIcon />
                  <span>فيسبوك</span>
                </button>
                <button className="share-option instagram" onClick={shareToInstagram}>
                  <InstagramIcon />
                  <span>إنستغرام</span>
                </button>
                <button className="share-option twitter" onClick={shareToTwitter}>
                  <TwitterIcon />
                  <span>تويتر</span>
                </button>
                <button className="share-option link" onClick={copyLink}>
                  <LinkIcon />
                  <span>نسخ الرابط</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="preview-panel">
          <div className={`card-container ${selectedBg.template === 'gold' ? 'gold-glow' : selectedBg.id === 7 ? 'light-card' : selectedBg.id === 4 ? 'emerald-glow' : selectedBg.id === 8 ? 'sapphire-glow' : selectedBg.id === 6 ? 'ruby-glow' : ''}`} ref={cardRef} style={{ background: selectedBg.gradient }}>
            {showMoon && (
              <div className="decorative-elements">
                <div className="moon-wrapper">
                  <CrescentMoon className="crescent-moon" />
                </div>
                <Star className="star-element star-1" />
                <Star className="star-element star-2" />
                <Star className="star-element star-3" />
                <Star className="star-element star-4" />
                <Star className="star-element star-5" />
                <Star className="star-element star-6" />
              </div>
            )}

            {showLantern && (
              <div className="lantern-elements">
                <Lantern className="lantern lantern-left" />
                <Lantern className="lantern lantern-right" />
              </div>
            )}

            {showMosque && (
              <div className="mosque-element">
                <MosqueIcon className="mosque-icon" />
              </div>
            )}

            <div className={`card-content ${selectedBg.template === 'gold' ? 'gold-theme' : selectedBg.template === 'light' ? 'light-theme' : ''}`}>
              <div className="eid-text">عيد مبارك</div>
              <div className="recipient-name">
                {name || 'صديقي العزيز'}
              </div>
              <div className="greeting-message">
                {message}
              </div>
              <div className="from-text">
                من: {name || 'اسمك'}
              </div>
            </div>

            <div className="card-footer">
              <span>🕌</span>
              <span>استوديو بطاقات العيد</span>
              <span>🕌</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>صنع بـ ❤️ للاحتفال بعيد الفطر</p>
      </footer>
    </div>
  )
}

export default App