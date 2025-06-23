"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function HomePage() {
  return (
    // Use calc to subtract the navbar's height (approx 72px), ensuring vertical centering in the remaining viewport
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center pt-16 pb-8">
      {" "}
      {/* pt-16, pb-8 */}
      {/* Content */}
      <div className="container mx-auto px-4 flex md:flex-row flex-col items-center">
        {" "}
        {/*  */}
        {/* Logo above text */}
        <div className="mb-8 md:w-1/2">
          {" "}
          {/* Added margin-bottom for spacing */}
          <Image
            src="/images/MegamanSuper.webp"
            alt="Megaman Super"
            width={1000} // Scaled bigger than previous logo, but smaller than Megaman.webp
            height={1000} // Scaled bigger than previous logo, but smaller than Megaman.webp
            priority
          />
        </div>
        <div className="text-center md:text-left md:w-1/2">
          {" "}
          {/* Removed md:w-1/2 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Embark on a mind-bending journey as Mega Man is thrust into strange
            new worlds-where his skills, willpower, and very consciousness face
            the{" "}
            <motion.span
              className="text-deep-purple"
              animate={{
                textShadow: [
                  "0 0 8px rgba(255, 215, 0, 0.7)",
                  "0 0 20px rgba(255, 215, 0, 1)",
                  "0 0 8px rgba(255, 215, 0, 0.7)",
                ],
              }}
              transition={{
                duration: 2, // Animation duration in seconds
                repeat: Infinity, // Repeat indefinitely
                ease: "easeInOut", // Smooth ease in and out
              }}
            >
              ULTIMATE
            </motion.span>{" "}
            test.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A non-profit project by The Red Soda Team.
          </p>
        </div>
        <div className="mt-8 flex justify-center md:w-1/2">
          {" "}
          {/* Removed md:w-1/2, md:mt-0 */}
          <Image
            src="/images/Megaman.webp"
            alt="Megaman"
            width={330}
            height={330}
            priority
            className="drop-shadow-[0_10px_15px_rgba(74,0,224,0.4)]"
          />
        </div>
      </div>
    </div>
  );
}
