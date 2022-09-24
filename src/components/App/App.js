import React from 'react';

import {
  Redirect,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/auth';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Main from '../Main/Main';
import Profile from '../Profile/Profile';

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const exeptionPathsHeader = ["/signup", "/signin", "/404"];
  const exeptionPathsFooter = ["/signup", "/signin", "/404", "/Profile"];

  /* registration, login, logout, checktoken handlers */

  function handleUpdateProfile() {
    console.log('On Update Profile');
  }

  const checkToken = () => {
    setIsLoggedIn(true)
    setCurrentUser({name: 'Name', email: 'email'})
  }

  React.useEffect(() => {
    checkToken();    
  }, [isLoggedIn]);

  //console.log(isLoggedIn)

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__content">
          <Switch>
            <Route exact path="/" component={Main} />
            <ProtectedRoute
              path ="/profile"
              isLoggedIn={isLoggedIn}
              component={Profile}
              onUpdate={handleUpdateProfile}
              onLogout={handleUpdateProfile}
              isFormErrorMessageShown={false}
              formErrorMessage="Test"
            />
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
