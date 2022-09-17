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
          <a
            className="portfolio__link"
            href="https://akimoveduard.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer">
              Статичный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://akimoveduard.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer">
              Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://akimoveduard.github.io/mesto-react/"
            target="_blank"
            rel="noreferrer">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </Section>
  );
}

export default Portfolio;
