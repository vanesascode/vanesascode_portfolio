"use client";

// import Link from "next/link";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "../_components/Particles";
import Navbar from "../_components/Navbar";

export default function About() {
  // MOUSE BALL

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
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
      mixBlendMode: "difference",
    },
  };

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  return (
    <div className="container ">
      <Navbar />
      {/*Mouse Ball*/}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />

      {/*Particles Background*/}
      <Particles id="tsparticles" />
    </div>
  );
}
