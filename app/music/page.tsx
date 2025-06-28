"use client";
import { useEffect, useState } from "react";
import { getTranslation } from "../lib/i18n";
import { useLanguage } from "../lib/LanguageContext";
import { motion } from "framer-motion";
import { Music2 } from "lucide-react";

export default function MusicPage() {
  const { language } = useLanguage();
  const [t, setT] = useState<any>(null);

  useEffect(() => {
    getTranslation(language).then(setT);
  }, [language]);

  if (!t) return null;

  return (
    <div className="min-h-[calc(100vh-81px)] flex items-center justify-center py-10 bg-gradient-to-br from-[#0f172a]/60 to-[#1e293b]/80">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-br from-yellow-400/20 via-cyan-400/10 to-white/5 backdrop-blur-md border border-yellow-400/30 rounded-2xl p-10 max-w-2xl mx-auto shadow-2xl animate-fade-in flex flex-col items-center"
        >
          <motion.div
            initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            className="mb-6"
          >
            <Music2
              size={80}
              className="text-yellow-300 drop-shadow-gold animate-pulse"
            />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-gold">
            {t.music.title}
          </h1>
          <p className="text-lg text-cyan-100/90 mb-8 font-medium">
            {t.music.subtitle}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            <span className="text-2xl md:text-3xl font-bold text-yellow-200 drop-shadow-gold mb-2 animate-pulse">
              {t.music.comingSoonTitle || "Coming Soon..."}
            </span>
            <span className="text-base text-gray-300/80">
              {t.music.comingSoon ||
                "The soundtrack will be available in a future update. Stay tuned!"}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
