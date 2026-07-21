import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "Al Karam made our dream of owning a home in Al Jalil Garden a reality. Transparent, professional, and always available — truly the best real estate team in Lahore.",
    name: "Muhammad Asif",
    role: "5 Marla Plot — Rose Block",
    initials: "MA",
  },
  {
    text: "We purchased two plots through Al Karam. Sheikh Zaheer and his team handled everything flawlessly — file verification, transfer, everything was crystal clear.",
    name: "Sara Noor",
    role: "10 Marla Plot — Tulip Block",
    initials: "SN",
  },
  {
    text: "The 360° virtual tour sold me before I even visited. Al Karam's guidance throughout the process was exceptional. I'd recommend them to every investor.",
    name: "Zubair Khan",
    role: "1 Kanal Plot — Jasmine Block",
    initials: "ZK",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative">
      <div className="section-shell">
        <div className="reveal text-center max-w-3xl mx-auto">
          <span className="eyebrow">Client Stories</span>
          <h2 className="display-title mt-3">Trusted by 1,800+ Families</h2>
          <div className="accent-rule mt-5 mx-auto" />
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              style={{ transitionDelay: `${i * 100}ms` }}
              className="reveal glass p-7 rounded-2xl hover:translate-y-[-4px] hover:border-[var(--color-azure-500)] transition-all duration-500 relative overflow-hidden"
            >
              <Quote
                size={48}
                strokeWidth={1}
                className="absolute top-5 right-5 text-[var(--color-azure-500)] opacity-15"
              />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={15}
                    className="text-[var(--color-champagne-400)] fill-[var(--color-champagne-400)]"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <p className="text-[var(--color-ink-100)] leading-[1.78]">
                {t.text}
              </p>
              <div className="mt-7 pt-6 border-t border-[var(--color-ink-700)] flex items-center gap-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-semibold text-white bg-gradient-to-br from-[var(--color-azure-600)] to-[var(--color-azure-700)] shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-[0.8rem] text-[var(--color-ink-300)]">
                    {t.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
