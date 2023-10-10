"use client"

import styles from "./styles.module.css";
import { ParticlesBlack, ParticlesWhite } from "./_components";
import HomeText from "./_components/HomeText";

import Intro from "./_components/Intro";
import { useEffect, useState, useContext } from "react";
import Navbar from "./_components/Navbar";

//Mouse ball library: 
import { motion } from 'framer-motion';

import DataContext from "./_context/DataContext";


export default function Home() {

  // CONTEXT:

  const { lightMode } = useContext(DataContext);

  // PARTICLES BACKGROUND DELAY:

  const [showParticles, setShowParticles] = useState(false);


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
  const [cursorVariant, setCursorVariant] = useState("default");



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

  const variants = {
    default: {
      height: 20,
      width: 20,

      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: "#11101d",
      border: "1px solid rgb(186 182 228)",
    },
    text: {
      height: 60,
      width: 60,

      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: "rgb(186 182 228)",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


  return (
    <>


      <Intro />
      <div className="container ">
        <Navbar />
        <HomeText />

        {/*Particles Background*/}
        {showParticles && lightMode === 'dark' && <ParticlesWhite id="tsparticles" />}
        {showParticles && lightMode === 'light' && <ParticlesBlack id="tsparticles" />}

        {/*Mouse Ball*/}
        < motion.div
          className='cursor'
          variants={variants}
          animate={cursorVariant}

        /> {/*I HAVE TO FULLY CONFIG THE MOUSE BALL VARIANTS IN ALL VIEWS */}


      </div >
    </>)
}
