"use client";

import {
  ParticlesBlack,
  ParticlesWhite,
  Navbar,
  MenuElements,
  ProjectInfoES,
} from "../../_components";

import { proyectos } from "../../_constantsProjectsES";

import { useContext } from "react";

import DataContext from "../../_context/DataContext";

import "../../globals.css";

export default function Proyecto({ params }) {
  const url = params.url;

  // Find the project object with the matching URL
  const proyecto = proyectos.find((proyecto) => proyecto.url === url);

  if (!proyecto) {
    // Handle case when project is not found
    return <div>No se encontró el proyecto</div>;
  }

  console.log(proyecto);
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
        <MenuElements />
        <ProjectInfoES proyecto={proyecto} />

        {/*Particles Background*/}
        {lightMode === "dark" && <ParticlesWhite id="tsparticles" />}
        {lightMode === "light" && <ParticlesBlack id="tsparticles" />}
      </div>
    </div>
  );
}
