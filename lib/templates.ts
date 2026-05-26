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
  // New templates
  {
    id: "ocean-blue",
    name: "Ocean Blue",
    nameAr: "الأزرق المحيطي",
    category: "minimal",
    categoryAr: "بسيط",
    bgGradient: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
    textColor: "#e0f2fe",
    accentColor: "#38bdf8",
    pattern: "stars",
    defaultGreeting: "عيد مبارك عليكم",
    new: true,
  },
  {
    id: "sunset-orange",
    name: "Sunset Orange",
    nameAr: "غروب الشمس",
    category: "luxury",
    categoryAr: "فاخر",
    bgGradient: "linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #7c2d12 100%)",
    textColor: "#fef3c7",
    accentColor: "#fbbf24",
    pattern: "geometric",
    defaultGreeting: "كل عام وأنتم إلى الله أقرب",
  },
  {
    id: "desert-sand",
    name: "Desert Sand",
    nameAr: "رمال الصحراء",
    category: "moroccan",
    categoryAr: "مغربي",
    bgGradient: "linear-gradient(135deg, #44403c 0%, #78716c 50%, #44403c 100%)",
    textColor: "#fef3c7",
    accentColor: "#d4af37",
    pattern: "moroccan",
    defaultGreeting: "تقبل الله طاعتكم",
    trending: true,
  },
  {
    id: "mint-fresh",
    name: "Mint Fresh",
    nameAr: "النعناع المنعش",
    category: "cute",
    categoryAr: "لطيف",
    bgGradient: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #ecfdf5 100%)",
    textColor: "#065f46",
    accentColor: "#10b981",
    pattern: "floral",
    defaultGreeting: "فرحة العيد تجمعنا",
    new: true,
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

// Pre-written greeting texts for cards
export const greetingTexts = [
  // Eid Al-Adha Greetings
  { id: "1", text: "عيد أضحى مبارك", category: "adha" },
  { id: "2", text: "كل عام وأنتم بخير", category: "general" },
  { id: "3", text: "تقبل الله منا ومنكم", category: "adha" },
  { id: "4", text: "أعاده الله علينا وعليكم بالخير", category: "general" },
  { id: "5", text: "عيد سعيد مليء بالفرح", category: "general" },
  { id: "6", text: "بارك الله أيامكم", category: "general" },
  { id: "7", text: "عساكم من عواده", category: "general" },
  { id: "8", text: "كل عام وأنتم إلى الله أقرب", category: "religious" },
  { id: "9", text: "تقبل الله طاعتكم", category: "religious" },
  { id: "10", text: "عيد مبارك عليكم وعلى أحبتكم", category: "family" },
  
  // Family & Friends
  { id: "11", text: "عيد سعيد يا أغلى الناس", category: "family" },
  { id: "12", text: "كل عام وعائلتي بألف خير", category: "family" },
  { id: "13", text: "عيد مبارك يا حبيبي", category: "love" },
  { id: "14", text: "أجمل التهاني لأجمل قلب", category: "love" },
  { id: "15", text: "كل عام وأنتِ نور حياتي", category: "love" },
  
  // Religious
  { id: "16", text: "لبيك اللهم لبيك", category: "hajj" },
  { id: "17", text: "حج مبرور وذنب مغفور", category: "hajj" },
  { id: "18", text: "اللهم تقبل منا صالح الأعمال", category: "religious" },
  { id: "19", text: "جعله الله عيد خير وبركة", category: "religious" },
  { id: "20", text: "أسأل الله أن يتقبل أضحيتكم", category: "adha" },
  
  // Creative & Modern
  { id: "21", text: "فرحة العيد تجمعنا", category: "modern" },
  { id: "22", text: "عيدكم سعادة بلا حدود", category: "modern" },
  { id: "23", text: "أيام مباركة وذكريات جميلة", category: "modern" },
  { id: "24", text: "العيد فرحة والفرحة لقاء", category: "modern" },
  { id: "25", text: "قلوبنا تزهر بفرحة العيد", category: "modern" },
  
  // Short & Simple
  { id: "26", text: "عيد مبارك", category: "simple" },
  { id: "27", text: "كل عام وأنتم بخير", category: "simple" },
  { id: "28", text: "عيد سعيد", category: "simple" },
  { id: "29", text: "مبارك عليكم العيد", category: "simple" },
  { id: "30", text: "تهانينا القلبية", category: "simple" },
]

export const greetingCategories = [
  { id: "all", labelAr: "الكل" },
  { id: "adha", labelAr: "عيد الأضحى" },
  { id: "general", labelAr: "عامة" },
  { id: "religious", labelAr: "دينية" },
  { id: "family", labelAr: "عائلية" },
  { id: "love", labelAr: "رومانسية" },
  { id: "hajj", labelAr: "الحج" },
  { id: "modern", labelAr: "عصرية" },
  { id: "simple", labelAr: "بسيطة" },
]
