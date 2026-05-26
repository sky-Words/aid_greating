export interface CardTemplate {
  id: string
  name: string
  nameAr: string
  category: string
  categoryAr: string
  bgGradient: string
  textColor: string
  accentColor: string
  pattern: "geometric" | "floral" | "minimal" | "stars" | "moroccan"
  defaultGreeting: string
  trending?: boolean
  new?: boolean
}

export const cardTemplates: CardTemplate[] = [
  {
    id: "moroccan-gold",
    name: "Moroccan Gold",
    nameAr: "الذهب المغربي",
    category: "moroccan",
    categoryAr: "مغربي",
    bgGradient: "linear-gradient(135deg, #1a1410 0%, #2d2418 50%, #1a1410 100%)",
    textColor: "#d4af37",
    accentColor: "#c4a052",
    pattern: "moroccan",
    defaultGreeting: "عيد أضحى مبارك سعيد",
    trending: true,
  },
  {
    id: "emerald-mosque",
    name: "Emerald Mosque",
    nameAr: "المسجد الزمردي",
    category: "islamic",
    categoryAr: "إسلامي",
    bgGradient: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)",
    textColor: "#fef3c7",
    accentColor: "#d4af37",
    pattern: "geometric",
    defaultGreeting: "كل عام وأنتم بخير",
    trending: true,
  },
  {
    id: "luxury-gold",
    name: "Luxury Gold",
    nameAr: "الذهب الفاخر",
    category: "luxury",
    categoryAr: "فاخر",
    bgGradient: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)",
    textColor: "#ffd700",
    accentColor: "#c4a052",
    pattern: "stars",
    defaultGreeting: "تقبل الله منا ومنكم",
    new: true,
  },
  {
    id: "minimal-white",
    name: "Minimal White",
    nameAr: "الأبيض البسيط",
    category: "minimal",
    categoryAr: "بسيط",
    bgGradient: "linear-gradient(135deg, #fefefe 0%, #f5f5f5 50%, #fefefe 100%)",
    textColor: "#1a1a1a",
    accentColor: "#c4a052",
    pattern: "minimal",
    defaultGreeting: "عيد مبارك",
  },
  {
    id: "royal-purple",
    name: "Royal Night",
    nameAr: "الليلة الملكية",
    category: "luxury",
    categoryAr: "فاخر",
    bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
    textColor: "#fef3c7",
    accentColor: "#c4a052",
    pattern: "stars",
    defaultGreeting: "أعاده الله علينا وعليكم بالخير",
  },
  {
    id: "family-warm",
    name: "Family Warmth",
    nameAr: "دفء العائلة",
    category: "family",
    categoryAr: "عائلي",
    bgGradient: "linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fef3c7 100%)",
    textColor: "#78350f",
    accentColor: "#92400e",
    pattern: "floral",
    defaultGreeting: "عيد سعيد لكل العائلة",
    new: true,
  },
  {
    id: "crescent-night",
    name: "Crescent Night",
    nameAr: "ليلة الهلال",
    category: "islamic",
    categoryAr: "إسلامي",
    bgGradient: "linear-gradient(135deg, #0c1222 0%, #1e3a5f 50%, #0c1222 100%)",
    textColor: "#fef3c7",
    accentColor: "#d4af37",
    pattern: "stars",
    defaultGreeting: "هلّ الهلال وجاء العيد",
    trending: true,
  },
  {
    id: "pink-floral",
    name: "Pink Floral",
    nameAr: "الزهور الوردية",
    category: "cute",
    categoryAr: "لطيف",
    bgGradient: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fdf2f8 100%)",
    textColor: "#831843",
    accentColor: "#be185d",
    pattern: "floral",
    defaultGreeting: "عيد مبارك يا حبيبي",
  },
]

export const categories = [
  { id: "all", labelAr: "الكل" },
  { id: "moroccan", labelAr: "مغربي" },
  { id: "islamic", labelAr: "إسلامي" },
  { id: "luxury", labelAr: "فاخر" },
  { id: "minimal", labelAr: "بسيط" },
  { id: "family", labelAr: "عائلي" },
  { id: "cute", labelAr: "لطيف" },
]

export const suggestedCaptions = [
  "عيد أضحى مبارك! تقبل الله منا ومنكم صالح الأعمال 🌙✨",
  "كل عام وأنتم بألف خير بمناسبة عيد الأضحى المبارك 🐑💚",
  "أعاده الله علينا وعليكم بالخير واليمن والبركات 🕌",
  "عيد مبارك سعيد! أتمنى لكم أياماً مليئة بالفرح والسرور 🎉",
  "تقبل الله طاعتكم وأعاد عليكم هذا العيد بالصحة والعافية 💛",
]
