"use client"

import { ParticlesBlack, ParticlesWhite, Intro, Navbar, HomeElements, MenuElements } from "./_components";

import { useEffect, useState, useContext } from "react";

import DataContext from "./_context/DataContext";

export default function Home() {



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

  // Delay to load Home after the Intro: 

  const timeoutId = setTimeout(() => {

    setShowHome(true);
  }, 700);

  return (
    <div className="relative ">

      <Intro />
      <div className="container paddingX">
        {showHome && <Navbar />}
        {showHome && <HomeElements />}
        <MenuElements />

        {/*Particles Background*/}
        {showParticles && lightMode === 'dark' && <ParticlesWhite id="tsparticles" />}
        {showParticles && lightMode === 'light' && <ParticlesBlack id="tsparticles" />}

      </div >
    </div>)
}
