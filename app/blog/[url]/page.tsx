"use client";

import {
  ParticlesBlack,
  ParticlesWhite,
  Navbar,
  MenuElements,
  BlogPill,
} from "../../_components";

import { blogPills } from "../../_constants";

import { useContext } from "react";

import DataContext from "../../_context/DataContext";

import "../../globals.css";

export default function Pill({ params }) {
  const url = params.url;

  // Find the pill object with the matching URL
  const pill = blogPills.find((pill) => pill.url === url);

  if (!pill) {
    // Handle case when pill is not found
    return <div>Article not found</div>;
  }

  console.log(pill);

  // CONTEXT:

  const { lightMode } = useContext(DataContext);

  /////////////////////////////////////////////////////////////////////////

  return (
    <div className="relative !overflow-auto">
      <div className="container paddingX">
        <Navbar />
        <MenuElements />
        <BlogPill pill={pill} />

        {/*Particles Background*/}
        {lightMode === "dark" && <ParticlesWhite id="tsparticles" />}
        {lightMode === "light" && <ParticlesBlack id="tsparticles" />}
      </div>
    </div>
  );
}
