import React from 'react';

function Footer() {
  return (
    <Footer className="footer">
      <div className="footer__content">
        <div className="footer__project-title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </div>
        <div className="footer__links">
          <p className="footer__date">2020</p>
          <ul className="footer__links-list">
            <li className="footer__links-list-item"><a href="/" className="footer__link" target="_blank">Яндекс.Практикум</a></li>
            <li className="footer__links-list-item"><a href="/" className="footer__link" target="_blank">Github</a></li>
          </ul>
        </div>
      </div>
    </Footer>
  );
}

export default Footer;