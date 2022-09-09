import React from 'react';

import "./Promo.css";
import landingLogo from '../../images/landing-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img src={landingLogo} className="promo__image" alt="Movies Explorer Landing" />
      </div>
    </section>
  );
}

export default Promo;
