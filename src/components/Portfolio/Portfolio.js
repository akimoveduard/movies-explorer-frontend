import React from "react";

import Section from "../Section/Section";

import './Portfolio.css';

function Portfolio() {
  return(
    <Section
      id='portfolio'>
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="/">Статичный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="/">Адаптивный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="/">Одностраничное приложение</a>
        </li>
      </ul>
    </Section>
  );
}

export default Portfolio;
