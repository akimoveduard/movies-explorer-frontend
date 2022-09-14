import React from 'react';

import {
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Auth from '../Auth/Auth';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import "./App.css";

function App() {

  const exeptionPathsHeader = [
    '/signup',
    '/signin',
    '/404',
  ];

  const exeptionPathsFooter = [
    '/signup',
    '/signin',
    '/404',
    '/Profile',
  ];

  return (
    <div className="app">
      <div className="app__content">
        {useRouteMatch(exeptionPathsHeader)
          ? null
          : (<Header />)}
        <Switch>
          <Route
            exact path="/"
            component={ Main }
          />
          <Route
            path="/signup"
            component={ Register }
          />
          <Route
            path="/signin"
            component={ Auth }
          />
          <Route
            path="/movies"
            component={ Movies }
          />
          <Route
            path="/404"
            component={ NotFoundPage }
          />
          <Redirect to="/404" />
        </Switch>
        {useRouteMatch(exeptionPathsFooter)
          ? null
          : (<Footer />)}
      </div>
    </div>
  );
}

export default App;
