import React from "react";

import './Section.css';

function Section(props) {
  return(
    <section
      className={`${props.id} section`}
    >
      <div className="section__container">
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
