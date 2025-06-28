"use client";

import { HardDriveDownload } from "lucide-react";
import { useEffect, useState } from "react";

import { getTranslation } from "../lib/i18n";
import { useLanguage } from "../lib/LanguageContext";

export default function DownloadPage() {
  const { language } = useLanguage();
  const [t, setT] = useState<any>(null);

  useEffect(() => {
    getTranslation(language).then(setT);
  }, [language]);

  if (!t) return null;

  return (
    <div className="min-h-[calc(100vh-81px)] flex items-center justify-center py-16 bg-gradient-to-br from-[#0f172a]/60 to-[#1e293b]/80">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-white/10 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-gold">
            {t.download.title}
          </h1>
          <p className="text-gray-200 mb-8 text-lg">
            {t.download.notAvailable}
          </p>
          <button
            disabled
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/80 to-yellow-200/80 text-white border font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-yellow-200/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
          >
            <HardDriveDownload size={24} />
            {t.download.button}
          </button>
          <div className="mt-8 text-left text-sm text-gray-300">
            <h3 className="font-semibold text-white mb-2 drop-shadow-gold">
              {t.download.requirementsTitle}
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>{t.download.requirements.os.split(":")[0]}:</strong>{" "}
                {t.download.requirements.os.split(":")[1]}
              </li>
              <li>
                <strong>
                  {t.download.requirements.processor.split(":")[0]}:
                </strong>{" "}
                {t.download.requirements.processor.split(":")[1]}
              </li>
              <li>
                <strong>{t.download.requirements.memory.split(":")[0]}:</strong>{" "}
                {t.download.requirements.memory.split(":")[1]}
              </li>
              <li>
                <strong>
                  {t.download.requirements.graphics.split(":")[0]}:
                </strong>{" "}
                {t.download.requirements.graphics.split(":")[1]}
              </li>
              <li>
                <strong>
                  {t.download.requirements.storage.split(":")[0]}:
                </strong>{" "}
                {t.download.requirements.storage.split(":")[1]}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
