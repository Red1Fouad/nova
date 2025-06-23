import React from "react";

export default function MusicPage() {
  return (
    <div className="min-h-[calc(100vh-81px)] flex items-center justify-center py-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 animate-fade-in">
          The Soundtrack of Nova
        </h1>
        <p className="text-lg text-gray-300 mb-10 animate-fade-in delay-200">
          Dive into the epic sounds that define the world of Mega Man Nova.
        </p>

        <div className="flex justify-center items-center">
          <iframe
            style={{ border: 0, width: "350px", height: "470px" }}
            src="https://bandcamp.com/EmbeddedPlayer/album=471703457/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
            title="Mega Man Remade by RushJet1"
            className="rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
          >
            <a href="https://rushjet1.bandcamp.com/album/mega-man-remade">
              Mega Man Remade by RushJet1
            </a>
          </iframe>
        </div>

        <div className="mt-10 text-gray-400 text-sm animate-fade-in delay-400">
          <p>Music by RushJet1 - "Mega Man Remade"</p>
          <p>Support the artist on Bandcamp!</p>
        </div>
      </div>
    </div>
  );
}
