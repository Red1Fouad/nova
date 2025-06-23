"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Disc3 } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "FAQ", href: "/faq" },
  { name: "DOWNLOAD", href: "/download" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800">
      <nav className="container mx-auto flex items-center justify-between p-4 text-gray-200">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Megaman Nova Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold">MEGAMAN NOVA</span>
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) =>
            link.name === "DOWNLOAD" ? (
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
            href="https://discord.gg/placeholder" // Placeholder link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-500 transition-all hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]"
          >
            <Disc3 size={16} />
            DISCORD
          </a>
        </div>
      </nav>
    </header>
  );
}
