"use client";

import {
  ParticlesBlack,
  ParticlesWhite,
  Navbar,
  MenuElements,
  BlogElements,
} from "../_components";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

import "../globals.css";

export default function Blogs() {
  // CONTEXT:

  const { lightMode } = useContext(DataContext);

  /////////////////////////////////////////////////////////////////////////

  return (
    <div className="relative !overflow-auto">
      <div className="container paddingX">
        <Navbar />
        <BlogElements />
        <MenuElements />

        {/*Particles Background*/}
        {lightMode === "dark" && <ParticlesWhite id="tsparticles" />}
        {lightMode === "light" && <ParticlesBlack id="tsparticles" />}
      </div>
    </div>
  );
}
