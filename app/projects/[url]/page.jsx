"use client";

import {
  ParticlesBlack,
  ParticlesWhite,
  Navbar,
  MenuElements,
  ProjectInfo,
} from "../../_components";

import { projectsPreviews } from "../../_constants";

import { useContext } from "react";

import DataContext from "../../_context/DataContext";

import "../../globals.css";

export default function Project({ params }) {
  const url = params.url;

  // Find the project object with the matching URL
  const project = projectsPreviews.find((project) => project.url === url);

  if (!project) {
    // Handle case when project is not found
    return <div>Project not found</div>;
  }

  console.log(project);
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
        <ProjectInfo project={project} />

        {/*Particles Background*/}
        {lightMode === "dark" && <ParticlesWhite id="tsparticles" />}
        {lightMode === "light" && <ParticlesBlack id="tsparticles" />}
      </div>
    </div>
  );
}
