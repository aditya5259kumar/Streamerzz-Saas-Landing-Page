import React from "react";
import { HERO_CONTENT } from "../constants/index";

const HeroSection = () => {
  return (
    <section className="pt-20 lg:pt-36">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-8 border-neutral-800 px-3 py-2 rounded-full text-xs">
          {HERO_CONTENT.badgeText}
        </div>
        <h1 className="text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-linear-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </h1>

        <p className="mt-6 text-neutral-400 max-w-xl">
          {HERO_CONTENT.subHeading}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
