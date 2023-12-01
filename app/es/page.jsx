"use client";

import {
  ParticlesBlack,
  ParticlesWhite,
  Intro,
  Navbar,
  HomeElements,
  MenuElements,
} from "../_components";

import { useEffect, useState, useContext } from "react";

import DataContext from "../_context/DataContext";

export default function HomeES() {
  // CONTEXT:

  const { lightMode } = useContext(DataContext);

  // PARTICLES BACKGROUND DELAY:

  const [showParticles, setShowParticles] = useState(false);

  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowParticles(true);
    }, 700);

    return () => clearTimeout(timeout);
    // }
  }, []);

  /////////////////////////////////////////////////////////////////////////

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Delay to load Home after the Intro:

  const timeoutId = setTimeout(() => {
    setShowHome(true);
  }, 700);

  return (
    <div className="relative h-screen text-transparent">
      <Intro />
      <div className="container paddingX">
        <div className="z-40">
          {showHome && <Navbar />}
          {showHome && <HomeElements />}
          <MenuElements />
        </div>

        <div
          className={`opacity-0 transition-opacity duration-[0.7s] ${
            isVisible ? "opacity-100" : ""
          }`}
        >
          {/*Particles Background*/}
          {showParticles && lightMode === "dark" && (
            <ParticlesWhite id="tsparticles" />
          )}
        </div>
        {showParticles && lightMode === "light" && (
          <ParticlesBlack id="tsparticles" />
        )}
      </div>
    </div>
  );
}
