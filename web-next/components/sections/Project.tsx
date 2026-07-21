import {
  MapPin,
  Heart,
  GraduationCap,
  Castle,
  Tv,
  Zap,
  Droplets,
  Trophy,
  Trees,
  UtensilsCrossed,
  Lock,
  Construction,
  Cable,
  ArrowUpRight,
  Compass,
  BookOpen,
} from "lucide-react";
import { wa, BRAND } from "@/lib/brand";

const PLOTS = [
  { num: 3, unit: "Marla", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  { num: 5, unit: "Marla", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80" },
  { num: 10, unit: "Marla", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" },
  { num: 15, unit: "Marla", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { num: 1, unit: "Kanal", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80" },
];

const AMENITIES = [
  { icon: GraduationCap, label: "Lahore Grammar School" },
  { icon: BookOpen, label: "Abadat University" },
  { icon: Heart, label: "Healthcare" },
  { icon: Castle, label: "Jamia Masjid" },
  { icon: Tv, label: "Cinema" },
  { icon: Zap, label: "24/7 Power" },
  { icon: Droplets, label: "Water Plant" },
  { icon: Trophy, label: "Sports Complex" },
  { icon: Trees, label: "Parks" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Lock, label: "Gated Security" },
  { icon: Construction, label: "Boulevards" },
  { icon: Cable, label: "Underground Elec." },
];

export default function Project() {
  return (
    <section id="projects" className="relative">
      <div className="section-shell">
        <div className="reveal max-w-3xl">
          <span className="eyebrow">Our Project</span>
          <h2 className="display-title mt-3">
            Al Jalil Garden Housing Scheme
          </h2>
          <div className="accent-rule mt-5" />
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-8">
          {/* Main project info + plots */}
          <div className="reveal">
            <div className="glass p-7 sm:p-9 rounded-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="pill-verified">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-emerald-500)]" />
                  LDA Approved
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-champagne-400)] border border-[var(--color-champagne-400)]/30 bg-[var(--color-champagne-400)]/[0.06]">
                  Flagship Development
                </span>
              </div>
              <p className="flex items-center gap-2 text-[var(--color-azure-300)] text-[0.94rem]">
                <MapPin size={16} strokeWidth={1.8} />
                Suburbs of Lahore — Lahore&apos;s largest housing project in
                Lahore West
              </p>
              <p className="mt-5 lede max-w-none">
                A gated community featuring{" "}
                <strong className="text-white">Lahore Grammar School</strong>,{" "}
                <strong className="text-white">Abadat University</strong>,
                Cinema, Pizza Hut, Gloria Jeans, Jade Cafe, Water Filtration
                Plant, 24/7 Power Backup, Underground Electricity, Jamia
                Masjid, Sports Complex, and Al-Jalil Healthcare. A complete
                ecosystem for modern, secure, and luxurious living.
              </p>

              {/* Plot matrix — innovation */}
              <div className="mt-8">
                <p className="text-[0.74rem] tracking-[0.22em] uppercase text-[var(--color-ink-300)] mb-4">
                  Available cuttings
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {PLOTS.map((p) => (
                    <a
                      key={`${p.num}-${p.unit}`}
                      href={wa(
                        `Hello, I'm interested in a ${p.num} ${p.unit} plot at Al Jalil Garden.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-magnet
                      className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--color-ink-600)] hover:border-[var(--color-azure-500)] transition-all duration-500"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[1.2s] ease-[var(--ease-premium)]"
                        style={{ backgroundImage: `url(${p.img})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,11,24,0.96)] via-[rgba(5,11,24,0.55)] to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="pill-verified !text-[0.62rem]">
                          Available
                        </span>
                      </div>
                      <div className="absolute bottom-0 inset-x-0 p-3">
                        <div className="flex items-baseline gap-1">
                          <span className="num text-3xl font-semibold text-white leading-none">
                            {p.num}
                          </span>
                          <span className="text-[0.78rem] tracking-[0.18em] uppercase text-[var(--color-ink-200)]">
                            {p.unit}
                          </span>
                        </div>
                        <span className="mt-2 inline-flex items-center gap-1 text-[0.7rem] tracking-[0.16em] uppercase text-[var(--color-azure-400)]">
                          Inquire <ArrowUpRight size={12} strokeWidth={2.2} />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BRAND.tours.alJalil}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnet
                  className="btn btn-primary"
                >
                  <Compass size={18} strokeWidth={1.8} />
                  360° Virtual Tour
                </a>
                <a
                  href={BRAND.developer.alJalilPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Official Site
                </a>
              </div>

              <div className="mt-7 pt-6 border-t border-[var(--color-ink-700)]">
                <p className="text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-ink-400)] mb-2">
                  Map resources
                </p>
                <a
                  href={BRAND.mapResource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-azure-400)] hover:text-[var(--color-azure-300)] text-[0.94rem]"
                >
                  Al Jalil Garden Map Lahore — Satellite View →
                </a>
              </div>
            </div>
          </div>

          {/* Amenities sidebar */}
          <div className="reveal">
            <div className="glass p-7 sm:p-9 rounded-2xl h-full">
              <p className="text-[0.74rem] tracking-[0.22em] uppercase text-[var(--color-champagne-400)] mb-2">
                Lifestyle
              </p>
              <h3 className="font-[family-name:var(--font-heading)] text-3xl text-white">
                World-Class Amenities
              </h3>
              <div className="accent-rule mt-4" />

              <div className="mt-8 grid grid-cols-2 gap-3">
                {AMENITIES.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl border border-[var(--color-ink-700)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--color-azure-600)]/40 hover:bg-[var(--color-azure-glow)] transition-all duration-300"
                  >
                    <a.icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[var(--color-azure-400)] shrink-0"
                    />
                    <span className="text-[0.86rem] text-[var(--color-ink-100)]">
                      {a.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
