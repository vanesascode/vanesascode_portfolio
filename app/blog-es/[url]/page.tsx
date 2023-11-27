"use client";

import {
  ParticlesBlack,
  ParticlesWhite,
  Navbar,
  MenuElements,
  BlogPillES,
} from "../../_components";

import { blogPillsES } from "../../_constantsPillsES";

import { useContext } from "react";

import DataContext from "../../_context/DataContext";

import "../../globals.css";

export default function Pill({ params }) {
  const url = params.url;

  // Find the pill object with the matching URL
  const pill = blogPillsES.find((pill) => pill.url === url);

  if (!pill) {
    // Handle case when pill is not found
    return <div>Article not found</div>;
  }

  console.log(pill);

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
        <BlogPillES pill={pill} />

        {/*Particles Background*/}
        {lightMode === "dark" && <ParticlesWhite id="tsparticles" />}
        {lightMode === "light" && <ParticlesBlack id="tsparticles" />}
      </div>
    </div>
  );
}
