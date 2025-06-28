"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import type { Locale } from "./i18n";

interface LanguageContextProps {
  language: Locale;
  setLanguage: (lang: Locale) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const supported = ["en", "fr", "pl", "ja"];
  const getDefaultLanguage = () => {
    if (typeof window !== "undefined" && window.navigator.language) {
      const lang = window.navigator.language.split("-")[0];
      if (supported.includes(lang)) return lang as Locale;
    }
    return "en" as Locale;
  };
  const [language, setLanguage] = useState<Locale>(getDefaultLanguage);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
