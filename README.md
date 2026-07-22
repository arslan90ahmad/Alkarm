# Al Karam Real Estate

Marketing website for **Al Karam Real Estate** — authorized sub-dealer of Al
Jalil Developers and the largest real-estate office in **Al Jalil Garden,
Lahore**.   

Built with **Next.js 15** (`web-next/`).

---      

## Highlights

- Premium navy/azure/champagne theme with a Three.js 3D background
- Glass-morphic nav that condenses on scroll
- Sections for Al Jalil Garden, Al Noor Orchard, blocks, payment plans, CEO, and contact
- Floating WhatsApp button for inquiries

---

## Tech stack

| Layer | Choice |
|---|---|
| **Frontend** | Next.js 15 (App Router) · React 19 · TypeScript · Tailwind v4 · Framer Motion · Three.js · Lucide React |
| **Fonts** | Cormorant Garamond · Inter Tight · JetBrains Mono (via `next/font`) |
| **Hosting** | Vercel (or any Node host) |

---

## Repo layout

```
.
├─ web-next/                 Next.js 15 frontend
│  ├─ app/
│  │  ├─ page.tsx            Marketing landing
│  │  ├─ layout.tsx          Root layout + 3D background loader
│  │  └─ globals.css         Design tokens + base styles
│  ├─ components/
│  │  ├─ sections/           Hero, About, CEO, Services, Project,
│  │  │                      AlNoorOrchard, Blocks, Payment, …
│  │  ├─ WhatsAppFloat.tsx   WhatsApp FAB
│  │  ├─ PremiumBackground.tsx
│  │  └─ SiteHeader.tsx
│  └─ lib/
│     ├─ brand.ts            Phone, WhatsApp, tours, social links
│     └─ fonts.ts
├─ package.json              Root scripts (delegates to web-next/)
└─ README.md
```

---

## Local development

```bash
cd web-next
npm install
npm run dev
```

Or from the repo root:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build

```bash
npm run build
npm run start
```

---

## Contact (site content)

Brand contact details live in [`web-next/lib/brand.ts`](web-next/lib/brand.ts).
