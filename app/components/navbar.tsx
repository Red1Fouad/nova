"use client";

import Link from "next/link"; // Keep Link
import type { ISourceOptions } from "@tsparticles/engine";
import React, { useCallback, useMemo, useEffect, useState } from "react"; // Add useEffect, useState
import Image from "next/image";
import { usePathname } from "next/navigation";
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Import initParticlesEngine
import type { Engine } from "@tsparticles/engine";
import { MoveDirection } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { Disc3 } from "lucide-react";
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering only
import { getTranslation } from "../lib/i18n";
import { useLanguage } from "../lib/LanguageContext";

// Dynamically import LanguageSwitcher to ensure it only renders on the client
const LanguageSwitcher = dynamic(() => import("./language-switcher"), {
  ssr: false,
});

// Global flag to ensure particles engine is initialized only once across the app
let particlesEngineInitialized = false;

function Navbar() {
  const pathname = usePathname();
  const [particlesLoaded, setParticlesLoaded] = useState(false); // State to track if particles engine is loaded
  const { language } = useLanguage();
  const [t, setT] = useState<any>(null);

  useEffect(() => {
    getTranslation(language).then(setT);
  }, [language]);

  useEffect(() => {
    if (!particlesEngineInitialized) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setParticlesLoaded(true); // Set state to true once loaded
        particlesEngineInitialized = true; // Mark as initialized globally
      });
    } else {
      setParticlesLoaded(true); // If already initialized, just set loaded state
    }
  }, []); // Empty dependency array ensures this runs only once

  // Memoize the particles options to prevent unnecessary re-renders of the Particles component
  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: false,
            mode: "repulse",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          repulse: {
            distance: 50,
            duration: 0.2,
          },
        },
      },
      particles: {
        color: {
          value: "#00e8f0",
        },
        links: {
          color: "#00e8f0",
          distance: 120,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: "bounce", // ✅ already fixed
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 1600,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!t) return null; // or a loading spinner

  const navLinks = [
    { name: t.navbar.home, href: "/" },
    { name: t.navbar.faq, href: "/faq" },
    { name: t.navbar.music, href: "/music" },
    { name: t.navbar.download, href: "/download" },
  ];

  return (
    <header className="sticky top-0 z-[9999] bg-black/50 backdrop-blur-lg border-b border-gray-800 overflow-hidden">
      {particlesLoaded && (
        <Particles
          id="tsparticles-navbar"
          className="absolute inset-0 z-0"
          options={particlesOptions}
        />
      )}
      <nav className="container mx-auto flex items-center justify-between p-4 text-gray-200 relative z-10">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Megaman Nova Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold">{t.navbar.brand}</span>
          </Link>
          <LanguageSwitcher />
        </div>
        <div className="flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) =>
            link.name === t.navbar.download ? (
              <Link
                key={link.name}
                href={link.href}
                className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-500 transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all hover:text-cyber-blue hover:drop-shadow-[0_0_5px_rgba(0,232,240,0.7)] ${
                  pathname === link.href ? "text-cyber-blue" : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          <a
            href="https://discord.gg/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-500 transition-all hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]"
          >
            <Disc3 size={16} />
            {t.navbar.discord}
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
