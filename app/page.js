"use client"

import { ParticlesBlack, ParticlesWhite, Intro, Navbar } from "./_components";
import HomeText from "./_components/HomeText";

import { useEffect, useState, useContext } from "react";


//Mouse ball library: 
import { motion } from 'framer-motion';

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

  ///////////////////////////////////////////////////////////////////////////

  // MOUSE BALL:

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  // the cursor disappears when the window is smaller than 640px:
  const cursor = window.innerWidth <= 640 ? null : {
    default: {
      height: 30,
      width: 30,
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      backgroundColor: "rgb(186 182 228)",
      mixBlendMode: "difference"
    }
  }

  /////////////////////////////////////////////////////////////////////////

  // Delay to load Home after the Intro: 

  const timeoutId = setTimeout(() => {

    setShowHome(true);
  }, 700);

  return (
    <div className="relative ">


      <Intro />
      <div className="container ">
        {showHome && <Navbar />}
        {showHome && <HomeText />}

        {/*Particles Background*/}
        {showParticles && lightMode === 'dark' && <ParticlesWhite id="tsparticles" />}
        {showParticles && lightMode === 'light' && <ParticlesBlack id="tsparticles" />}

        {/*Mouse Ball*/}
        < motion.div
          className='cursor'
          variants={cursor}
          animate="default"
        />

      </div >
    </div>)
}
