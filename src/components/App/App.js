import React from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';

import "./App.css";

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

  const { pathname } = useLocation();

  return (
    <div className="app">
      <div className="app__content">
        {pathname !== '/register' || pathname !== '/login' || pathname !== '404' ?
          (
            <Header />
          ) : (
            ""
          )
        }
        <Switch>
          <Route
            exact path="/"
          >
            <Main />
          </Route>
        </Switch>
        {pathname !== '/register' || pathname !== '/login' || pathname !== '404' ?
          (
            <Footer />
          ) : (
            ""
          )
        }
      </div>
    </div>
  );
}

export default App;
