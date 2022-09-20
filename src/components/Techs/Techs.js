import React from "react";

import Section from "../Section/Section";

import './Techs.css';

function Techs() {
  return(
    <Section
      id='techs'>
        <Section.SectionHeader
          id='techs__title'
          title='Технологии'
        />
        <div className="techs__content">
          <h3 className="techs__content-title">7 технологий</h3>
          <p className="techs__content-text">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
          <ul className="techs__list">
            <li className="techs__item">HTML</li>
            <li className="techs__item">CSS</li>
            <li className="techs__item">JS</li>
            <li className="techs__item">React</li>
            <li className="techs__item">Git</li>
            <li className="techs__item">Express.js</li>
            <li className="techs__item">mongoDB</li>
          </ul>
        </div>
    </Section>
  );
}

export default Techs;