"use client";

import Particles from "../_components/ParticlesBlack";
import Navbar from "../_components/Navbar";

export default function Projects() {
  return (
    <div className="container ">
      <Navbar />

      {/*Particles Background*/}
      <Particles id="tsparticles" />
    </div>
  );
}
