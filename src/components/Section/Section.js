import React from "react";
import Portfolio from "../Portfolio/Portfolio";

import './Section.css';

function Section(props) {

  const containerName =
    props.id === "about-me" || props.id === "portfolio"
      ? "section__spec-container"
      : "section__container";

  return(
    <section
      className={`${props.id} section`}
    >
      <div className={containerName}>
        {props.children}
      </div>
    </section>
  );
}

Section.SectionHeader = function SectionHeader(props) {
  return (
    <h2 className={`${props.id} section__title`}>
        {props.title}
    </h2>
  );
}

export default Section;
