"use client";

import Script from "next/script";
import React, { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any; // Google Translate object
  }
}

const GoogleTranslateWidget = () => {
  useEffect(() => {
    // Define the Google Translate initialization function globally
    // This ensures it's available when the external script calls it.
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }}></div>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
};

export default GoogleTranslateWidget;
