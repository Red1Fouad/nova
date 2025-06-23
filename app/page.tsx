import Image from "next/image";

export default function HomePage() {
  return (
    // Use calc to subtract the navbar's height, ensuring vertical centering in the remaining viewport
    <div className="min-h-[calc(100vh-81px)] flex items-center justify-center">
      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Embark on a mind-bending journey as Mega Man is thrust into strange
            new worlds-where his skills, willpower, and very consciousness face
            the{" "}
            <span className="text-dark-purple-blue animate-glow">ULTIMATE</span>{" "}
            test.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A non-profit project by The Red Soda Team.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <Image
            src="/images/Megaman.webp"
            alt="Megaman"
            width={500}
            height={500}
            priority
            className="drop-shadow-[0_10px_15px_rgba(74,0,224,0.4)]"
          />
        </div>
      </div>
    </div>
  );
}
