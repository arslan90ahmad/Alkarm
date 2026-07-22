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
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-105"
      style={{
        background:
          "linear-gradient(145deg, var(--color-emerald-400), var(--color-emerald-600))",
        boxShadow:
          "8px 8px 18px rgba(5, 150, 105, 0.35), -4px -4px 12px rgba(255,255,255,0.7), inset 0 1px 0 rgba(255,255,255,0.25)",
        marginBottom: "env(safe-area-inset-bottom, 0px)",
        marginRight: "env(safe-area-inset-right, 0px)",
      }}
    >
      <MessageCircle size={26} strokeWidth={1.6} className="relative" />
    </a>
  );
}
