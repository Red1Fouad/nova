"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getTranslation } from "./lib/i18n";
import { useLanguage } from "./lib/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();
  const [t, setT] = useState<any>(null);

  useEffect(() => {
    getTranslation(language).then(setT);
  }, [language]);

  if (!t) return null;

  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center pt-16 pb-8 bg-gradient-to-br from-[#0f172a]/60 to-[#1e293b]/80">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center md:items-start md:w-1/2"
        >
          <Image
            src="/images/Megaman.webp"
            alt="Megaman"
            width={420}
            height={420}
            priority
            className="drop-shadow-[0_10px_40px_rgba(0,191,255,0.7)] animate-float"
          />
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="backdrop-blur-md bg-white/10 border border-cyan-400/30 rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center md:text-left md:w-1/2"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            {t.home.headline}
            <motion.span
              className="text-white drop-shadow-gold"
              animate={{
                textShadow: [
                  "0 0 2px #ffd700, 0 0 4px #ffd700, 0 0 8px #ffd700",
                  "0 0 4px #fff8dc, 0 0 8px #ffd700, 0 0 2px #ffd700",
                  "0 0 2px #ffd700, 0 0 4px #ffd700, 0 0 8px #ffd700",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {t.home.headlineHighlight}
            </motion.span>
            {t.home.headlineEnd}
          </h1>
          <p className="mt-2 text-lg text-cyan-100/90 font-medium">
            {t.home.subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// Add this to your global CSS (globals.css) for floating animation and glow:
// .animate-float { animation: float 3s ease-in-out infinite; }
// @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-18px); } }
// .drop-shadow-glow { filter: drop-shadow(0 0 16px #00bfff) drop-shadow(0 0 32px #00bfff); }
