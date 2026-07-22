import { Play, Sparkles } from "lucide-react";
import { BRAND } from "@/lib/brand";

export default function TourCta() {
  return (
    <section id="tour-cta" className="relative section-muted">
      <div className="section-shell">
        <div
          className="reveal relative overflow-hidden rounded-[24px] bg-[var(--color-ink-800)] px-7 py-12 text-center sm:px-12 sm:py-14"
          style={{
            boxShadow:
              "12px 12px 28px var(--color-neo-dark), -10px -10px 24px var(--color-neo-light)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=70)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-[var(--color-ink-800)] via-[rgba(20,32,51,0.92)] to-[rgba(40,112,160,0.55)]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-10 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent-400), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent-500), transparent 70%)",
            }}
          />

          <div className="relative">
            <span className="eyebrow !text-[var(--color-accent-300)]">
              <Sparkles size={14} strokeWidth={2} />
              Immersive Experience
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-[clamp(1.7rem,3.8vw,2.75rem)] font-bold text-white">
              Explore Al Jalil Garden in{" "}
              <span className="text-[var(--color-accent-300)]">360°</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[58ch] text-[1.02rem] leading-relaxed text-white/75">
              Walk through the streets, parks, and amenities of Al Jalil Garden
              without leaving your home. Our interactive virtual tour lets you
              experience every detail.
            </p>
            <a
              href={BRAND.tours.alJalil}
              target="_blank"
              rel="noopener noreferrer"
              data-magnet
              className="btn btn-primary btn-pill mt-9"
            >
              <Play size={18} strokeWidth={2} fill="currentColor" />
              Launch Virtual Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
