"use client";

import {
  ParticlesBlack,
  ParticlesWhite,
  Navbar,
  MenuElements,
  ContactElements,
} from "../_components";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

import "../globals.css";

export default function Proyectos() {
  // CONTEXT:

  const { lightMode } = useContext(DataContext);

  /////////////////////////////////////////////////////////////////////////

  return (
    <div
      className={`relative !overflow-auto ${
        lightMode === "light"
          ? "custom-scrollbar-dark"
          : "custom-scrollbar-light"
      }`}
    >
      <div className="container paddingX">
        <Navbar />
        <ContactElements />
        <MenuElements />

        {/*Particles Background*/}
        {lightMode === "dark" && <ParticlesWhite id="tsparticles" />}
        {lightMode === "light" && <ParticlesBlack id="tsparticles" />}
      </div>
    </div>
  );
}
