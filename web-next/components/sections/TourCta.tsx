import { Play, Sparkles } from "lucide-react";
import { BRAND } from "@/lib/brand";

export default function TourCta() {
  return (
    <section id="tour-cta" className="relative">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[28px] glass p-10 sm:p-16 text-center reveal">
          {/* Cinematic backdrop */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(700px 420px at 20% 50%, rgba(79,168,255,0.25), transparent 60%), radial-gradient(600px 360px at 80% 50%, rgba(232,198,114,0.16), transparent 60%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            }}
          />

          <div className="relative">
            <span className="eyebrow inline-flex">
              <Sparkles size={14} strokeWidth={2} />
              Immersive Experience
            </span>
            <h2 className="display-title mt-4">
              Explore Al Jalil Garden in{" "}
              <span className="bg-gradient-to-r from-[var(--color-azure-400)] to-[var(--color-champagne-400)] bg-clip-text text-transparent">
                360°
              </span>
            </h2>
            <p className="lede mx-auto mt-6 max-w-[64ch]">
              Walk through the streets, parks, and amenities of Al Jalil Garden
              without leaving your home. Our interactive virtual tour lets you
              experience every detail.
            </p>
            <a
              href={BRAND.tours.alJalil}
              target="_blank"
              rel="noopener noreferrer"
              data-magnet
              className="btn btn-gold mt-9"
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
