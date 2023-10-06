"use client"


import styles from "./styles.module.css";
import Particles from "./_components/Particles";
import Menu from "./_components/Menu";
import Intro from "./_components/Intro";
import { useEffect, useState } from "react";

export default function Home() {

  // PARTICLES STUFF
  const [showParticles, setShowParticles] = useState(false);
  // const [shouldDelay, setShouldDelay] = useState(true);

  useEffect(() => {
    // if (shouldDelay) {
    const timeout = setTimeout(() => {
      setShowParticles(true);
      // setShouldDelay(false);
    }, 1000);

    return () => clearTimeout(timeout);
    // }
  }, []);



  return (
    <>

      <Intro />
      {/* PARTICLES STUFF*/}
      {
        showParticles && (
          <>

            <div className={styles.fadeIn}>
              <Particles id="tsparticles" />
              <Menu />
            </div>

          </>
        )
      }

    </ >
  )
}
