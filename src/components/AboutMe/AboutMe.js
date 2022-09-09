import React from "react";

import Section from "../Section/Section";

import photo from '../../images/student-photo.jpg';
import './AboutMe.css';

function AboutMe() {
  return(
    <Section
      id='about-me'>
        <Section.SectionHeader
          id='about-me__title'
          title='Студент'
        />
      <div className="about-me__content">
        <div className="about-me__bio">
          <div className="about-me__text">
            <h3 className="about-me__text-title">Виталий</h3>
            <p className="about-me__text-subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__text-paragraph">
              Я родился и живу в&nbsp;Саратове, закончил факультет экономики СГУ.
              У меня есть жена&nbsp;и дочь. Я люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом.
              Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании «СКБ Контур».
              После того, как прошёл курс по&nbsp;веб-разработке,
              начал заниматься фриланс-заказами&nbsp;и ушёл с&nbsp;постоянной работы.
            </p>
          </div>
          <a href="https://github.com/akimoveduard" className="about-me__github-link" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
        <div className="about-me__photo">
          <img className="about-me__photo-img" src={photo} alt="Фото студента" />
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
