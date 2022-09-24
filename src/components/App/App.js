import React from 'react';

import {
  Redirect,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { moviesApi } from '../../utils/MoviesApi';
import * as auth from '../../utils/auth';
import filterMovies from '../../utils/filterMovies';

import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Auth from '../Auth/Auth';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import "./App.css";

function App() {

  const [currentUser, setCurrentUser] = React.useState({
    'name': '',
    'email': '',
  });

  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isPopupOpened, setPopupOpen] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  const [localMoviesData, setLocalMoviesData] = React.useState([]);
  const [prevSearchRequest, setPrevSearchRequest] = React.useState('');

  const [isFormErrorMessageShown, setIsFormErrorMessageShown] = React.useState(false);
  const [formErrorMessage, setFormErrorMessage] = React.useState('');

  const handleMoviesSearch = (request) => {
    const onlyShortfilms = false; // delete later

    if (!localStorage.getItem("movies")) saveMoviesDataToLocalStorage();

    const moviesData = JSON.parse(localStorage.getItem("movies"));
    const filteredMoviesData = filterMovies(
      request,
      onlyShortfilms,
      moviesData
    );

    if (filteredMoviesData.length > 0) {
      setLocalMoviesData(filteredMoviesData);
      localStorage.setItem(
        "previous-founded-movies",
        JSON.stringify(filteredMoviesData)
      );
      localStorage.setItem("previous-search-request", request);
    } else {
      setLocalMoviesData([]);
      localStorage.removeItem("previous-founded-movies");
      localStorage.setItem("previous-search-request", request);
      console.log("nothing");
    }
  };

  function handleBurgerButtonClick() {
    setPopupOpen(true);
  }

  function closePopup() {
    setPopupOpen(false);
  }

  function saveMoviesDataToLocalStorage() {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((res) => {
        localStorage.setItem("movies", JSON.stringify(res));
      })
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
  }

  /* Registration, Login, Profile handlers */

  const handleRegistration = (username, email, password) => {
    auth.register(username, email, password)
      .then((res) => {
        handleLogin(email, password);
      })
      .catch((error) => {
        setIsFormErrorMessageShown(true);
        setFormErrorMessage(error);
      })
  };

  const handleLogin = (email, password) => {
    auth.login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        checkToken();
        history.push('/profile');
      })
      .catch((error) => {
        setIsFormErrorMessageShown(true);
        setFormErrorMessage(error);
      })
  }

  const handleUpdateProfile = (username, email) => {
    console.log(username)
    console.log(email)
  }

  const handleLogout = () => {
    history.push('/signin');
    console.log('logout');
  }

  function checkToken() {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth.checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res);
        })
        .catch((error) => console.log(error));
    } else {
      history.push('/signin');
    }
  }

  React.useEffect(() => {
    checkToken();
  }, [isLoggedIn]);

  console.log(isLoggedIn)

  React.useEffect(() => {
    const searchRequest = localStorage.getItem("previous-search-request");
    if (searchRequest) setPrevSearchRequest(searchRequest);
  }, []);

  const exeptionPathsHeader = ["/signup", "/signin", "/404"];
  const exeptionPathsFooter = ["/signup", "/signin", "/404", "/Profile"];

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__content">
          {useRouteMatch(exeptionPathsHeader) ? null : (
            <>
              <Header
                isLogged={!isLoggedIn}
                onButtonClick={handleBurgerButtonClick}
              />
              <Popup isOpened={isPopupOpened} onButtonClick={closePopup} />
            </>
          )}
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/signup">
              <Register
                onRegistration={handleRegistration}
                isFormErrorMessageShown={isFormErrorMessageShown}
                formErrorMessage={formErrorMessage}
              />
            </Route>
            <Route path="/signin">
              <Auth
                onLogin={handleLogin}
                isFormErrorMessageShown={isFormErrorMessageShown}
                formErrorMessage={formErrorMessage}
              />
            </Route>
            <Route path="/movies">
              <Movies
                onSubmit={handleMoviesSearch}
                moviesData={localMoviesData}
                prevSearchRequest={prevSearchRequest}
                isLoading={isLoading}
              />
            </Route>
            <Route path="/saved-movies" component={SavedMovies} />
            <ProtectedRoute
              path="/profile"
              component= { Profile }
              isLoggedIn={isLoggedIn}
              onUpdate={handleUpdateProfile}
              onLogout={handleLogout}
              isFormErrorMessageShown={isFormErrorMessageShown}
              formErrorMessage={formErrorMessage}
            />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
          {useRouteMatch(exeptionPathsFooter) ? null : <Footer />}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
