import Image from "next/image";
import { BRAND, wa } from "@/lib/brand";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative mt-12 border-t border-[var(--color-ink-700)]">
      <div className="section-shell !py-16">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">
          <div>
            <Image
              src="/images/logo.png"
              alt={BRAND.name}
              width={140}
              height={42}
              className="h-auto w-[140px]"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="mt-5 text-[var(--color-ink-200)] max-w-[40ch] leading-[1.78]">
              {BRAND.description}
            </p>
          </div>

          <div>
            <h4 className="text-[0.74rem] tracking-[0.24em] uppercase text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[var(--color-ink-200)]">
              {[
                { href: "#about", label: "About Us" },
                { href: "#ceo", label: "Leadership" },
                { href: "#services", label: "Services" },
                { href: "#projects", label: "Project" },
                { href: "#blocks", label: "Blocks & sizes" },
                { href: "#payment", label: "Payment Plans" },
                {
                  href: wa(
                    "Hello, I'm reaching out from the Al Karam website."
                  ),
                  label: "Contact",
                  external: true,
                },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.74rem] tracking-[0.24em] uppercase text-white mb-5">
              Resources
            </h4>
            <ul className="space-y-2.5 text-[var(--color-ink-200)]">
              {[
                {
                  href: BRAND.developer.alJalilPage,
                  label: "Al Jalil Garden",
                },
                { href: BRAND.developer.site, label: "Al Jalil Developers" },
                { href: BRAND.tours.alJalil, label: "Tour — Al Jalil" },
                { href: BRAND.tours.alNoor, label: "Tour — Al Noor" },
                {
                  href: BRAND.developer.alNoorPage,
                  label: "Al Noor (official)",
                },
                { href: BRAND.mapResource, label: "Al Jalil Garden Map" },
                { href: BRAND.facebook, label: "Facebook" },
                { href: BRAND.tiktok, label: "TikTok" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.74rem] tracking-[0.24em] uppercase text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-2.5 text-[var(--color-ink-200)]">
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="num hover:text-white transition-colors"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={wa(
                    "Hello, I'm contacting Al Karam Real Estate."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={BRAND.officeMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Office on Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-[var(--color-ink-700)] flex flex-wrap items-center justify-between gap-3 text-[0.84rem] text-[var(--color-ink-300)]">
          <p>
            &copy; 2021 — {year} {BRAND.name}. All rights reserved.
          </p>
          <p>
            Sub-dealer of{" "}
            <a
              href={BRAND.developer.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-azure-400)] hover:text-[var(--color-azure-300)]"
            >
              Al Jalil Developers
            </a>
          </p>
        </div>

        <p className="mt-6 text-center text-[0.8rem] text-[var(--color-ink-400)] tracking-[0.04em]">
          Powered by Solutions90 ·{" "}
          <a
            href="https://www.solutions90.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-azure-400)] hover:text-[var(--color-azure-300)] transition-colors underline-offset-2 hover:underline"
          >
            solutions90.com
          </a>
        </p>
      </div>
    </footer>
  );
}
