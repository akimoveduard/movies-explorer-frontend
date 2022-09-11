import React from 'react';

import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import "./App.css";

function App() {

  const exceptionRoutes = useRouteMatch(
    ['/signup',
    '/signin',
    '/profile',
    '/404']
  );

  return (
    <div className="app">
      <div className="app__content">
        {exceptionRoutes !== null ? null : (<Header />)}
        <Switch>
          <Route
            exact path="/"
            component={ Main }
          />
        </Switch>
        {exceptionRoutes !== null ? null : (<Footer />)}
      </div>
    </div>
  );
}

export default App;
