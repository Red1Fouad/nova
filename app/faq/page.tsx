"use client";

import { useEffect, useState } from "react";
import { getTranslation } from "../lib/i18n";
import { useLanguage } from "../lib/LanguageContext";

export default function FaqPage() {
  const { language } = useLanguage();
  const [t, setT] = useState<any>(null);

  useEffect(() => {
    getTranslation(language).then(setT);
  }, [language]);

  if (!t) return null; // or a loading spinner

  return (
    <div className="min-h-[calc(100vh-81px)] flex items-center justify-center py-16 bg-gradient-to-br from-[#0f172a]/60 to-[#1e293b]/80">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 drop-shadow-gold animate-fade-in">
          {t.faq.title}
        </h1>
        <div className="w-full max-w-3xl space-y-6">
          {t.faq.questions.map((faq: any, index: number) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-6 shadow-xl transition-all hover:border-yellow-400/60 hover:shadow-yellow-200/20 animate-fade-in"
            >
              <h2 className="text-lg md:text-xl font-semibold text-white mb-2 drop-shadow-gold">
                {faq.question}
              </h2>
              <p className="text-gray-200 text-base md:text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
