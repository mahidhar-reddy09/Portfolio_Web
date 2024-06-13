import React from "react";
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-400px] left-0 z-[1] w-full h-full object-cover-fit"
      >
        {/* <source src="/blackhole.webm" type="video/webm" /> */}
        <source src="/spacenice.mp4" type="video/mp4" />

      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
