<div align="center">

# 👑 GUCCI
### *Italian Luxury Excellence*

<img src="https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js" />
<img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css" />
<img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer" />

*A cinematic, scroll-driven single-page experience celebrating 100+ years of Gucci's legacy*

[Live Demo](#) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started)

---

</div>

## 🎬 Overview

An **immersive digital encyclopedia** dedicated to Gucci—the iconic Italian luxury fashion house. This isn't just a website; it's a **narrative journey** through a century of craftsmanship, innovation, and cultural influence. Every scroll reveals new layers of the brand's DNA, from the 1921 founding in Florence to today's creative renaissance.

### ✨ What Makes This Special

```
🎨 Black Animated Theme       →  Professional dark aesthetic with glowing accents
🌊 Parallax Scrolling         →  Depth-based motion creates cinematic flow  
💎 Glass-Morphism Design      →  Translucent cards with backdrop blur effects
🎭 3D Transform Animations    →  Cards that rotate, scale, and float on hover
📜 Comprehensive Content      →  20+ sections covering every aspect of Gucci
🖼️ Product Showcase           →  High-quality imagery from Mytheresa & curated galleries
```

---

## 🎪 Featured Sections

<details>
<summary><b>🏛️ Heritage & History</b> - The Foundation</summary>

- **A Century of Excellence** - From Guccio Gucci's 1921 vision to global icon
- **The Eras Timeline** - 7 distinct periods from founding to present day
- **House of Gucci Drama** - The family saga, murder, and 2021 film controversy

</details>

<details>
<summary><b>👨‍🎨 Visionary Designers</b> - Creative Minds</summary>

- **Tom Ford (1994-2004)** - "The Savior" who rescued Gucci with porno chic glamour
- **Alessandro Michele (2015-2022)** - "The Alchemist" of maximalist romanticism
- **Sabato De Sarno (2023-Present)** - "The Refiner" bringing quiet luxury

</details>

<details>
<summary><b>👜 Product Universe</b> - Iconic Pieces</summary>

- **Hall of Fame** - Horsebit Loafer, Jackie Bag, Bamboo Bag, GG Marmont, Dionysus, Flora Scarf
- **Iconic Imagery** - 5 Mytheresa product showcases with hover effects
- **Extended Gallery** - 9 curated images celebrating fragrances, leather, and culture

</details>

<details>
<summary><b>🏭 Behind the Scenes</b> - The Craft</summary>

- **Craftsmanship Deep Dive** - Bamboo handle, Pelle Guccissima leather, Double G jewelry
- **Manufacturing Hubs** - 5 Italian factories from Casellina HQ to Arezzo textile district
- **Retail as Theater** - Store architecture evolution from Michele to De Sarno

</details>

<details>
<summary><b>🌐 The Gucci Universe</b> - Beyond Fashion</summary>

- **6 Sub-Brands** - Beauty, Décor, Valigeria, Osteria, Garden, Equilibrium
- **Gucci-verse Glossary** - 8 essential terms every enthusiast should know
- **Digital Frontier** - NFTs, Roblox $4,115 bag, metaverse initiatives

</details>

---

## 🎨 Design Philosophy

### Color Palette
```css
Primary:    #DC2626 (Red-600)      /* Gucci signature red */
Secondary:  #F59E0B (Amber-500)    /* Luxe golden accents */
Background: #000000 (Black)        /* Professional dark base */
Surface:    #171717 (Neutral-900)  /* Elevated cards */
Text:       #FFFFFF / #A3A3A3      /* White / Neutral-400 */
```

### Animation Principles
- **Scroll Progress Bar** - Dual-layer gradient with glow effect
- **Stagger Delays** - Sequential element reveals (0.1s increments)
- **Spring Physics** - Natural bounce on interactions
- **3D Transforms** - rotateY, rotateX, scale with preserve-3d
- **Parallax Motion** - Background elements move slower than foreground

---

## 🚀 Tech Stack

### Core Framework
```json
{
  "next": "16.0.3",           // App Router + Turbopack for blazing fast HMR
  "react": "19.2.0",          // Latest with React Compiler
  "typescript": "^5"          // Full type safety
}
```

### Styling & Animation
```json
{
  "tailwindcss": "4.0.0-beta.14",  // Utility-first CSS v4
  "framer-motion": "^12.23.24",    // Advanced animations & gestures
  "lucide-react": "^0.553.0"       // 1000+ beautiful icons
}
```

### Component Architecture
```
src/
├── app/
│   ├── page.tsx              # Main single-page application
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles + smooth scroll
├── components/
│   ├── ui/
│   │   ├── button.tsx        # Animated button with 3 variants
│   │   └── card.tsx          # Animated card with hover lift
│   ├── gucci-gallery.tsx     # Masonry image gallery
│   └── floating-particles.tsx # Ambient 20-particle system
└── data/
    └── gucciImages.ts        # 9 curated images with metadata
```

---

## 🎯 Key Features

### 🎭 Advanced Animations
- ✨ **Letter-by-Letter Hero** - GUCCI title reveals character by character with spring physics
- 📊 **Scroll Progress** - Dual-layer gradient bar tracks reading progress with glow
- 🎪 **Parallax Backgrounds** - Multi-layer depth with independent movement speeds
- 🃏 **3D Card Transforms** - Hover effects with rotateY, scale, and preserve-3d
- 💫 **Floating Particles** - 20 ambient orbs with random motion paths
- 🌊 **Stagger Animations** - Sequential reveals with useInView triggers

### 🎨 Visual Excellence
- 🌑 **Professional Black Theme** - High-contrast with red/amber accent gradients
- 🪟 **Glass-Morphism** - Navigation and cards with backdrop-blur-xl
- 🎆 **Gradient Accents** - Custom color schemes per section
- 📐 **Responsive Grid** - Adapts from mobile (1 col) to desktop (3-4 cols)
- 🖼️ **Next.js Image** - Optimized loading with quality 90, remote patterns
- 🎭 **Hover States** - Scale, brightness, color transitions on interactive elements

### 📱 Interactive Elements
- 🔘 **Smooth Scroll Buttons** - "Explore Heritage" & "Discover Icons" navigate to sections
- 🧭 **Navigation Links** - Heritage, Icons, Products, Culture with gradient underlines
- 📜 **Scroll Indicators** - Animated chevron prompts users to explore
- 🎯 **Section IDs** - Semantic anchors for deep linking

### 📚 Content Depth
```
20+ Sections  |  2,400+ Lines of Code  |  9 Gallery Images  |  6 Iconic Symbols
5 Product Showcases  |  3 Designer Profiles  |  7 Historical Eras  |  5 Manufacturing Hubs
```

---

## 🛠️ Getting Started

### Prerequisites
```bash
Node.js 18+ and npm/yarn/pnpm installed
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/supun-ravidu/gucci-website.git
cd gucci-website
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
```
http://localhost:3000
```

The page auto-updates as you edit files. Start with `src/app/page.tsx` for the main content.

### Production Build
```bash
npm run build
npm start
```

### Troubleshooting Port Issues
If port 3000 is occupied:
```bash
# Kill all Node processes (PowerShell)
Get-Process -Name node | Stop-Process -Force

# Remove dev lock if needed
Remove-Item -Path ".next/dev" -Recurse -Force

# Restart server
npm run dev
```

---

## 📂 Project Structure

```
gucci-website/
├── src/
│   ├── app/
│   │   ├── page.tsx              # 2,400+ lines - Main application
│   │   ├── layout.tsx            # Root layout with metadata
│   │   ├── globals.css           # Smooth scroll behavior
│   │   └── favicon.ico           # Brand icon
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx        # Custom animated button (3 variants)
│   │   │   └── card.tsx          # Hover-lift card component
│   │   ├── gucci-gallery.tsx     # Masonry image gallery
│   │   └── floating-particles.tsx # 20-particle ambient system
│   └── data/
│       └── gucciImages.ts        # 9 gallery images with metadata
├── public/                       # Static assets
├── next.config.ts                # Remote image patterns (mytheresa, wallpapers)
├── tailwind.config.ts            # Tailwind v4 configuration
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies & scripts
```

---

## 🎨 Customization Guide

### Adding New Gallery Images
Edit `src/data/gucciImages.ts`:
```typescript
{
  src: 'https://your-image-url.jpg',
  title: 'Your Title',
  description: 'Your description',
  accent: 'from-red-500 via-amber-500 to-green-600' // Tailwind gradient
}
```

### Changing Color Theme
Update `src/app/page.tsx` gradient classes:
```tsx
// Find and replace:
from-red-600  →  from-your-color
via-amber-500 →  via-your-color
to-red-600    →  to-your-color
```

### Adding New Sections
Follow the pattern:
```tsx
<section className="py-24 px-6 bg-gradient-to-b from-black via-neutral-950 to-black">
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
    {/* Your content */}
  </motion.div>
</section>
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/supun-ravidu/gucci-website)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and configures build
4. Deploy! 🎉

### Environment Variables
No environment variables needed for basic deployment.

### Build Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

---

## 📸 Screenshots

### Hero Section
Cinematic letter-by-letter animation with parallax backgrounds

### Designer Profiles
Tom Ford, Alessandro Michele, and Sabato De Sarno with design philosophies

### Product Showcase
5 Mytheresa products with hover effects and gradient overlays

### Extended Gallery
9-image masonry layout with stagger animations

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is created for educational and portfolio purposes. 

### Important Notes:
- **Gucci®** is a registered trademark of Guccio Gucci S.p.A.
- **Images** sourced from Mytheresa and Wallpapers.com remain property of copyright holders
- This is a **non-commercial demonstration project**
- For commercial use, replace all brand assets and obtain proper licensing

---

## 🎯 Performance

- ⚡ **Turbopack** - Next.js 16 dev server with blazing fast HMR
- 🖼️ **Image Optimization** - Next.js automatic WebP conversion
- 📦 **Code Splitting** - Automatic route-based splitting
- 🎨 **CSS Optimization** - Tailwind purges unused styles
- 🔄 **React Compiler** - Automatic optimization in React 19

### Lighthouse Scores (Target)
```
Performance:  95+
Accessibility: 90+
Best Practices: 95+
SEO: 100
```

---

## 🐛 Known Issues & Roadmap

### Current Limitations
- [ ] Mobile menu not implemented (navigation hidden on small screens)
- [ ] Gallery lightbox not implemented (click to expand images)
- [ ] No form validation (contact forms not included)

### Future Enhancements
- [ ] Add mobile hamburger menu
- [ ] Implement image lightbox gallery
- [ ] Add product filtering/search
- [ ] Create admin panel for content management
- [ ] Add i18n support (English, Italian, Chinese)
- [ ] Integrate real Gucci API (if available)
- [ ] Add e-commerce integration (Shopify/WooCommerce)

---

## 🙏 Acknowledgments

- **Design Inspiration** - Gucci's official website and brand aesthetic
- **Icons** - [Lucide Icons](https://lucide.dev/)
- **Animations** - [Framer Motion](https://www.framer.com/motion/)
- **Framework** - [Next.js](https://nextjs.org/)
- **Images** - [Mytheresa](https://www.mytheresa.com/) & [Wallpapers.com](https://wallpapers.com/)

---

## 👨‍💻 Author

**Supun Ravidu Bandara Rathnayaka**  
Sri Lanka 🇱🇰

[![GitHub](https://img.shields.io/badge/GitHub-supun--ravidu-181717?style=for-the-badge&logo=github)](https://github.com/supun-ravidu)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF0055?style=for-the-badge)](https://your-portfolio-url.com)

---

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Star ⭐ the repository if you found it helpful
- Share with others who might benefit

---

<div align="center">

### 🌟 Star this repository if you found it helpful!

Made with ❤️ and ☕ in Sri Lanka

**[⬆ Back to Top](#-gucci)**

</div>
