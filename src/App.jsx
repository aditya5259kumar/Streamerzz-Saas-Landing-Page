import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Features  from "./components/Features";

const App = () => {
  return (
    <main className="text-sm text-neutral-300 antialiased bg-black">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
    </main>
  );
};

export default App;
