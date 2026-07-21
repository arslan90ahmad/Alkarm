"use client";

import { MessageCircle } from "lucide-react";
import { wa } from "@/lib/brand";

export default function WhatsAppFloat() {
  return (
    <a
      href={wa("Hello, I'm contacting Al Karam Real Estate.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-magnet
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-[0_14px_38px_rgba(16,185,129,0.42)] hover:scale-110 hover:shadow-[0_16px_46px_rgba(16,185,129,0.58)] transition-all duration-400"
      style={{
        background:
          "linear-gradient(135deg, var(--color-emerald-400), var(--color-emerald-600))",
        paddingRight: "env(safe-area-inset-right, 0px)",
      }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full animate-ping opacity-40"
        style={{ background: "var(--color-emerald-500)" }}
      />
      <MessageCircle size={26} strokeWidth={1.6} className="relative" />
    </a>
  );
}
