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
  Compass,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { wa, BRAND } from "@/lib/brand";

const PLOTS = [
  {
    num: 3,
    unit: "Marla",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    num: 5,
    unit: "Marla",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
  {
    num: 10,
    unit: "Marla",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  },
  {
    num: 15,
    unit: "Marla",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    num: 1,
    unit: "Kanal",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
  },
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

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="reveal">
            <div className="card p-7 sm:p-9">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="pill-verified">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-500)]" />
                  LDA Approved
                </span>
                <span className="neo-chip inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-700)]">
                  Flagship Development
                </span>
              </div>
              <p className="flex items-center gap-2 text-[0.94rem] text-[var(--color-accent-600)]">
                <MapPin size={16} strokeWidth={1.8} />
                Suburbs of Lahore, Lahore&apos;s largest housing project in
                Lahore West
              </p>
              <p className="lede mt-5 max-w-none">
                A gated community featuring{" "}
                <strong className="font-semibold text-[var(--color-ink-800)]">
                  Lahore Grammar School
                </strong>
                ,{" "}
                <strong className="font-semibold text-[var(--color-ink-800)]">
                  Abadat University
                </strong>
                , Cinema, Pizza Hut, Gloria Jeans, Jade Cafe, Water Filtration
                Plant, 24/7 Power Backup, Underground Electricity, Jamia Masjid,
                Sports Complex, and Al-Jalil Healthcare. A complete ecosystem for
                modern, secure, and luxurious living.
              </p>

              <div className="mt-8">
                <p className="mb-4 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-500)]">
                  Available cuttings
                </p>
                <div className="reveal stagger mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {PLOTS.map((p) => (
                    <a
                      key={`${p.num}-${p.unit}`}
                      href={wa(
                        `Hello, I'm interested in a ${p.num} ${p.unit} plot at Al Jalil Garden.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-magnet
                      className="group relative aspect-[3/4] overflow-hidden rounded-[20px] shadow-[8px_8px_18px_var(--color-neo-dark),-8px_-8px_18px_var(--color-neo-light)] transition-all duration-500 hover:-translate-y-1"
                    >
                      <div
                        className="img-zoom absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${p.img})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,18,32,0.95)] via-[rgba(11,18,32,0.45)] to-transparent" />
                      <div className="absolute left-3 top-3">
                        <span className="pill-verified !text-[0.62rem]">
                          Available
                        </span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-3">
                        <div className="flex items-baseline gap-1">
                          <span className="num text-3xl font-bold leading-none text-white">
                            {p.num}
                          </span>
                          <span className="text-[0.78rem] uppercase tracking-[0.14em] text-white/75">
                            {p.unit}
                          </span>
                        </div>
                        <span className="mt-2 inline-flex items-center gap-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-300)]">
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
                  className="btn btn-outline-dark"
                >
                  Official Site
                </a>
              </div>

              <div className="mt-7 border-t border-[var(--color-neo-dark)]/40 pt-6">
                <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-500)]">
                  Map resources
                </p>
                <a
                  href={BRAND.mapResource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.94rem] font-medium text-[var(--color-accent-500)] hover:underline"
                >
                  Al Jalil Garden Map Lahore, Satellite View →
                </a>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="card h-full p-7 sm:p-9">
              <p className="mb-2 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-500)]">
                Lifestyle
              </p>
              <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-ink-800)]">
                World-Class Amenities
              </h3>
              <div className="accent-rule mt-4" />

              <div className="mt-8 grid grid-cols-2 gap-3">
                {AMENITIES.map((a) => (
                  <div
                    key={a.label}
                    className="neo-chip flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <a.icon
                      size={20}
                      strokeWidth={1.5}
                      className="shrink-0 text-[var(--color-accent-500)]"
                    />
                    <span className="text-[0.86rem] font-medium text-[var(--color-ink-800)]">
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
