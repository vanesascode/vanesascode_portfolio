"use client"

import styles from "./styles.module.css";
import Particles from "./_components/Particles";
import Menu from "./_components/Menu";
import Intro from "./_components/Intro";
import { useEffect, useState } from "react";

export default function Home() {

  // MOUSE BALL

  // const [position, setPosition] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // const handleMouseMove = (e) => {
  //   setPosition({ x: e.clientX, y: e.clientY });
  // };

  // PARTICLES STUFF
  const [showParticles, setShowParticles] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowParticles(true);
    }, 500);

    return () => clearTimeout(timeout);
    // }
  }, []);


  return (

    <div className="container"
    // onMouseMove={handleMouseMove}
    >
      {/*Mouse Ball*/}

      {/**<div
        // className="ball"
        // style={{
          // transform: `translate(${position.x}px, ${position.y}px)`,
        // }}>
      // </div> */}

      {/*Intro*/}
      <Intro />
      {
        showParticles && (
          <>
            <div className={styles.fadeIn1}>
              {/*Particles Background*/}
              <Particles id="tsparticles" />
            </div>
            {/*Home elements*/}
            <div className={styles.fadeIn2}>
              <Menu />
            </div>

          </>
        )
      }

    </div >
  )
}
