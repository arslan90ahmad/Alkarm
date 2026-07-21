import { MapPin, Phone, MessageCircle, Facebook } from "lucide-react";
import { BRAND, wa } from "@/lib/brand";
import TikTokIcon from "@/components/icons/TikTokIcon";

const CHANNELS = [
  {
    icon: MapPin,
    title: "Office Address",
    body: (
      <a
        href={BRAND.officeMap}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open office location in Google Maps"
        className="hover:text-white transition-colors"
      >
        {BRAND.officeAddressLines.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </a>
    ),
  },
  {
    icon: Phone,
    title: "Phone Number",
    body: (
      <a
        href={BRAND.phoneHref}
        className="num hover:text-white transition-colors"
      >
        {BRAND.phone}
      </a>
    ),
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    body: (
      <a
        href={wa("Hello, I'd like to chat on WhatsApp with Al Karam Real Estate.")}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        Chat on WhatsApp
      </a>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="section-shell">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16">
          <div className="reveal">
            <span className="eyebrow">Get In Touch</span>
            <h2 className="display-title mt-3">
              Let&apos;s find your dream property.
            </h2>
            <div className="accent-rule mt-5" />
            <p className="lede mt-6">
              Visit our office or reach out through any channel below.
              We&apos;re always ready to help you make the right investment.
            </p>

            <div className="mt-10 space-y-3">
              {CHANNELS.map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-4 p-5 rounded-2xl glass hover:border-[var(--color-azure-500)] transition-all duration-500"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--color-azure-glow)] border border-[var(--color-azure-600)]/40">
                    <c.icon
                      size={18}
                      strokeWidth={1.6}
                      className="text-[var(--color-azure-400)]"
                    />
                  </div>
                  <div>
                    <h4 className="text-[0.74rem] tracking-[0.22em] uppercase text-[var(--color-ink-300)] mb-1">
                      {c.title}
                    </h4>
                    <div className="text-[var(--color-ink-100)]">{c.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={BRAND.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-[var(--color-ink-600)] text-[var(--color-ink-200)] hover:text-white hover:border-[var(--color-azure-500)] hover:bg-[var(--color-azure-glow)] transition-all duration-300"
              >
                <Facebook size={18} strokeWidth={1.6} />
              </a>
              <a
                href={BRAND.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-[var(--color-ink-600)] text-[var(--color-ink-200)] hover:text-white hover:border-[var(--color-azure-500)] hover:bg-[var(--color-azure-glow)] transition-all duration-300"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          <div className="reveal relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[28px] blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(79,168,255,0.32), transparent 70%)",
              }}
            />
            <div className="relative glass rounded-[24px] p-8 sm:p-10">
              <h3 className="font-[family-name:var(--font-heading)] text-3xl text-white">
                Message us instantly
              </h3>
              <p className="lede mt-3 max-w-none">
                For the fastest reply, message us on WhatsApp — our team will
                get back to you as soon as possible.
              </p>

              <a
                href={wa(
                  "Hello, I'd like to send a message to Al Karam Real Estate."
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-magnet
                className="btn btn-primary w-full justify-center mt-7"
              >
                <MessageCircle size={18} strokeWidth={1.8} />
                Message on WhatsApp
              </a>

              <div className="mt-7 pt-7 border-t border-[var(--color-ink-700)]">
                <p className="text-[0.74rem] tracking-[0.22em] uppercase text-[var(--color-ink-300)] mb-2">
                  Or call directly
                </p>
                <a
                  href={BRAND.phoneHref}
                  className="num text-3xl text-white hover:text-[var(--color-azure-400)] transition-colors"
                >
                  {BRAND.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
