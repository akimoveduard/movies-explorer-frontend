import React from 'react';

import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__project-title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </div>
        <div className="footer__links">
          <p className="footer__project-date">&copy;&nbsp;{year}</p>
          <ul className="footer__links-list">
            <li className="footer__links-list-item"><a href="/" className="footer__link" target="_blank">Яндекс.Практикум</a></li>
            <li className="footer__links-list-item"><a href="/" className="footer__link" target="_blank">Github</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;