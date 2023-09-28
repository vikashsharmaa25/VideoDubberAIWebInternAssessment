import React from "react";

const Video = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg mt-10">
      <div className="relative">
        <div className="aspect-ratio-16/9 min-h-[400px]">
          <iframe
            width="560"
            height="315"
            src="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/intro.mp4"
            frameborder="0"
            allowfullscreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
