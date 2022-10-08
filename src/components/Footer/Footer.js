import React from 'react';
import { useRouteMatch } from "react-router-dom";
import { PATH_EXEPTIONS } from '../../utils/constants';
import './Footer.css';

function Footer() {
  const nowYear = new Date().getFullYear();
  const isFooterShown = !(useRouteMatch(PATH_EXEPTIONS.footer));

  return (
    <>
      {isFooterShown &&
        <footer className="footer">
          <div className="footer__content">
            <div className="footer__project-title">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </div>
            <div className="footer__links">
              <p className="footer__project-date">&copy;&nbsp;{nowYear}</p>
              <ul className="footer__links-list">
                <li className="footer__links-list-item">
                  <a
                    href="https://practicum.yandex.ru/"
                    className="footer__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Яндекс.Практикум
                  </a>
                </li>
                <li className="footer__links-list-item">
                  <a
                    href="https://github.com/akimoveduard"
                    className="footer__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      }
    </>
  );
}

export default Footer;