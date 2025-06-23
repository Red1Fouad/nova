import type { Metadata } from "next";
import { HardDriveDownload } from "lucide-react";

export const metadata: Metadata = {
  title: "Download - Megaman Nova",
};

export default function DownloadPage() {
  return (
    <div className="min-h-[calc(100vh-81px)] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-black/60 border border-cyber-blue/30 rounded-xl p-8 md:p-12 max-w-2xl mx-auto backdrop-blur-sm">
          <h1 className="text-5xl font-bold text-cyber-blue mb-4 drop-shadow-[0_0_10px_rgba(0,232,240,0.5)]">
            Download Megaman Nova
          </h1>
          <p className="text-gray-300 mb-8">
            The game is not yet available for download. Join our Discord for
            updates!
          </p>
          <button
            disabled
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyber-blue to-cyber-pink text-white border rounded font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,232,240,0.8)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
          >
            <HardDriveDownload size={24} />
            Download Latest Build (Coming Soon)
          </button>
          <div className="mt-8 text-left text-sm text-gray-400">
            <h3 className="font-semibold text-white mb-2">
              System Requirements (Preliminary):
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>OS:</strong> Windows XP or higher
              </li>
              <li>
                <strong>Processor:</strong> Dual Core 2.4GHz
              </li>
              <li>
                <strong>Memory:</strong> 2 GB RAM
              </li>
              <li>
                <strong>Graphics:</strong> DirectX 9 compatible GPU
              </li>
              <li>
                <strong>Storage:</strong> 1 GB available space
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
