import React from "react";

import Section from "../Section/Section";

import './AboutProject.css';

function AboutProject() {
  return(
    <Section
      id='about-project'>
        <Section.SectionHeader
          id='about-project__title'
          title='О проекте'
        />
        <div className="about-project__columns">
          <div className="about-project__column">
            <h3 className="about-project__column-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__column-text">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__column">
            <h3 className="about-project__column-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__column-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__timeline">
          <div className="about-project__timeline-period-backend">
            <p className="about-project__timeline-text">1 неделя</p>
            <p className="about-project__timeline-subtext">Back-end</p>
          </div>
          <div className="about-project__timeline-period-frontend">
            <p className="about-project__timeline-text">4 недели</p>
            <p className="about-project__timeline-subtext">Front-end</p>
          </div>
        </div>
    </Section>
  );
}

export default AboutProject;
