"use client";

import React, { useState, useEffect, useRef, JSX } from "react";
import { ChevronRight, ChevronsRight, Globe } from "lucide-react"; // Import ChevronRight and ChevronsRight
import { GB, FR, PL, JP } from "country-flag-icons/react/3x2";

const languages = [
  { code: "en", name: "English", FlagComponent: GB },
  { code: "fr", name: "Français", FlagComponent: FR },
  { code: "pl", name: "Polski", FlagComponent: PL },
  { code: "ja", name: "日本語", FlagComponent: JP },
];

const LanguageSwitcher = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (langCode: string): void => {
    console.log(`Switching language to: ${langCode}`);

    // Find the Google Translate dropdown and trigger the change
    const googleTranslateSelect = document.querySelector(
      "select.goog-te-combo"
    ) as HTMLSelectElement;
    if (googleTranslateSelect) {
      googleTranslateSelect.value = langCode;
      googleTranslateSelect.dispatchEvent(new Event("change"));
    }
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-[1000]" ref={dropdownRef}>
      {" "}
      {/* Added z-[1000] to ensure it's above everything */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700/50 transition-colors"
      >
        <Globe size={18} />
        {isOpen ? (
          <ChevronsRight size={16} className="transition-transform" />
        ) : (
          <ChevronRight size={16} className="transition-transform" />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-0 left-full ml-2 w-max bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg z-[999]">
          {/* Changed top-full right-0 mt-2 to top-0 left-full ml-2 */}
          <ul className="flex flex-row py-1 px-2">
            {" "}
            {/* Added flex-row and horizontal padding */}
            {languages.map(({ code, name, FlagComponent }) => (
              <li key={code}>
                <button
                  onClick={() => handleLanguageChange(code)}
                  className="flex items-center gap-2 px-2 py-1 text-sm text-gray-200 hover:bg-gray-700/70 transition-colors rounded-md" // Adjusted padding and removed w-full, text-left
                >
                  <FlagComponent className="w-4 h-auto" />{" "}
                  {/* Smaller flag for horizontal layout */}
                  <span>{name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
