import React, { useEffect } from 'react';

import {
  Route,
  Switch,
  Redirect,
  useHistory
} from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';

import * as userApi from '../../utils/userApi';
import { moviesApi } from '../../utils/MoviesApi';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import Auth from '../Auth/Auth';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import { ERROR_MESSAGES } from '../../utils/constants';

import "./App.css";

function App() {
  
  const history = useHistory();

  const token = localStorage.getItem('jwt');
  
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const [isFormErrorMessageShown, setIsFormErrorMessageShown] = React.useState(false);
  const [formErrorMessage, setFormErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn
  } = React.useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) checkToken(token);
    else setIsLoggedIn(false);
  }, []);

  function handleFormErrorMessage(error) {
    if (error.message) {
      const errorType = (error.message).toString().toLowerCase() || '500';
      setIsFormErrorMessageShown(true);
      setFormErrorMessage(ERROR_MESSAGES[errorType]);
    } else {
      if (error.status) {
        const errorType = (error.status).toString() || '500';
        setIsFormErrorMessageShown(true);
        setFormErrorMessage(ERROR_MESSAGES[errorType]);
      }      
    }
  }

  /* movies handlers */
  function handleMoviesSearch(request) {
    console.log('request +' + request)
  }

  function saveMoviesToLocalStorage() {
    setIsLoading(true);
  }


  /* popup handlers */
  function handleBurgerButtonClick() {
    setIsPopupOpened(true);
  }

  function closePopup() {
    setIsPopupOpened(false);
  }

  /* registration, login, logout, checktoken handlers */

  function handleRegistration(username, email, password) {
    userApi.register(username, email, password)
      .then((res) => {
        handleLogin(email, password);
      })
      .catch((error) => {
        handleFormErrorMessage(error);
      });
  }

  function handleLogin(email, password) {
    userApi.login(email, password)
      .then((res) => {
        console.log(res)
        localStorage.setItem('jwt', res.token);
        checkToken(localStorage.getItem('jwt'));
        setIsFormErrorMessageShown(false);
        history.push('/movies');
      })
      .catch((error) => {
        handleFormErrorMessage(error);
        setIsLoggedIn(false);
      });
  }

  function handleUpdateProfile(username, email) {
    userApi.update(username, email, token)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) => {
        handleFormErrorMessage(error);
      });
  }
  
  function handleLogout() {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});
  }

const checkToken = (token) => {
  userApi.checkToken(token)
    .then((res) => {
      setIsLoggedIn(true);
      setCurrentUser(res);
    })
    .catch((error) => {
      setIsLoggedIn(false);
      handleFormErrorMessage(error);
    });
}

  // Ничего не отрисовывать, пока isLoggedIn не примет одно из значений true || false
  if (isLoggedIn === undefined) return null;
  
  return (
      <div className="app">
        <div className="app__content">
            <Header
              isLoggedIn={isLoggedIn}
              onButtonClick={handleBurgerButtonClick}              
            />
            <Popup isOpened={isPopupOpened} onButtonClick={closePopup} />
            <Switch>
              <Route exact path="/" component={Main} />
              <ProtectedRoute
                path="/profile"
                component={Profile}
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}                
                onUpdate={handleUpdateProfile}
                onLogout={handleLogout}
                isFormErrorMessageShown={isFormErrorMessageShown}
                formErrorMessage={formErrorMessage}
              />
              <ProtectedRoute
                path="/movies"
                component={Movies}
                isLoggedIn={isLoggedIn}
                onSubmit={handleMoviesSearch}
                moviesData={['']}
                prevSearchRequest={['']}
                isLoading={isLoading}
              />
              <Route path="/signup">
                <Register
                  isLoggedIn={isLoggedIn}
                  onRegistration={handleRegistration}
                  isFormErrorMessageShown={isFormErrorMessageShown}
                  formErrorMessage={formErrorMessage}
                />
              </Route>
              <Route path="/signin">
                <Auth
                  isLoggedIn={isLoggedIn}
                  onLogin={handleLogin}
                  isFormErrorMessageShown={isFormErrorMessageShown}
                  formErrorMessage={formErrorMessage}
                />
              </Route>
              <Route path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Switch>
            <Footer />
        </div>
      </div>
  );
}

export default App;
