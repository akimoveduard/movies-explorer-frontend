import React, { useEffect } from 'react';

import {
  Route,
  Switch,
  Redirect,
  useHistory
} from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import { MoviesContext } from '../../contexts/MoviesContext';

import * as userApi from '../../utils/userApi';
import { moviesApi } from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/filterMovies';

import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Auth from '../Auth/Auth';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { URL_REGEXP, ERROR_MESSAGES, URLS, PROFILE_UPDATE_SUCCESS_MESSAGE } from '../../utils/constants';

import "./App.css";

function App() {
  
  const history = useHistory();
  const token = localStorage.getItem('jwt');

  const statPrevFilteredMovies = () => {
    if (localStorage.getItem('prevFilteredMovies') &&
        JSON.parse(localStorage.getItem('prevFilteredMovies')).length === 0) {
          return true;
    } else {
      return false;
    }
  }
  
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const [isFormErrorMessageShown, setIsFormErrorMessageShown] = React.useState(false);
  const [formErrorMessage, setFormErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  /* user section */

  const {
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn
  } = React.useContext(UserContext);

  const [
    notificationMessage,
    setNotificationMessage
  ] = React.useState('');

  /* movies section */

  const [searchError, setSearchError] = React.useState(
    statPrevFilteredMovies() ?
      ERROR_MESSAGES['not found error'] :
      ''
  );

  const [
    savedMoviesSearchError,
    setSavedMoviesSearchError
  ] = React.useState('');

  const {
    isShortFilmsOn,
    setIsShortFilmsOn,
    isSavedShortFilmsOn,
    setIsSavedShortFilmsOn,
  } = React.useContext(MoviesContext);

  const [movies, setMovies] = React.useState(
    localStorage.getItem('localMovies') ?
    JSON.parse(localStorage.getItem('localMovies')) :
    []
  );

  useEffect(() => {
    if (isLoggedIn) localStorage.setItem('localMovies', JSON.stringify(movies));
  }, [movies]);

  const [filteredMovies, setFilteredMovies] = React.useState(
    localStorage.getItem('prevFilteredMovies') ?
    JSON.parse(localStorage.getItem('prevFilteredMovies')) :
    []
  );

  useEffect(() => {
    if (isLoggedIn && !localStorage.getItem('localMovies')) {
      localStorage.setItem('prevFilteredMovies', JSON.stringify(filteredMovies));
    }
  }, [filteredMovies]);

  const [searchRequest, setSearchRequest] = React.useState(
    localStorage.getItem('prevSearchRequest') ?
    localStorage.getItem('prevSearchRequest') :
    ''
  );

  const [savedMovies, setSavedMovies] = React.useState(
    localStorage.getItem('savedMovies') ?
    JSON.parse(localStorage.getItem('savedMovies')) :
    []
  );

  useEffect(() => {
    setSavedMovies(savedMovies);
    setSavedMoviesData(savedMovies);
    setSavedMoviesSearchError('');
    if (isLoggedIn) {
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    }
  }, [savedMovies]);


  const [savedMoviesIds, setSavedMoviesIds] = React.useState(
    localStorage.getItem('savedMoviesIds') ?
    JSON.parse(localStorage.getItem('savedMoviesIds')) :
    []
  );

  useEffect(() => {
    setSavedMoviesIds(savedMoviesIds);
    if (isLoggedIn) {
      localStorage.setItem('savedMoviesIds', JSON.stringify(savedMoviesIds));
    }
  }, [savedMoviesIds]);

  const [
    filteredSavedMovies,
    setFilteredSavedMovies
  ] = React.useState([]);

  const [
    savedMoviesData,
    setSavedMoviesData
  ] = React.useState([]);

  /* saved-movies handlers */

  const getSavedMovies = async (token) => {
    try {
      const downloadedSavedMovies = await userApi.getMovies(token);
      setSavedMovies(downloadedSavedMovies);
      setSavedMoviesIds(arraySavedMoviesIds(downloadedSavedMovies));
    }
    catch (error) {
      console.log(error)
    }
  };

  const arraySavedMoviesIds = (movies, ids = []) => {
    movies.forEach((movie) => {
      ids = [...ids, movie.movieId];
    })
    return (ids);
  }
  
  /* search movies handlers */

  const handleSavedMoviesSearch = (request) => {
    setSavedMoviesSearchError(false);
    setFilteredSavedMovies(filterMovies(savedMovies, request, isSavedShortFilmsOn));
  };

  useEffect(() => {
    setSavedMoviesData(filteredSavedMovies);
    if (!filteredSavedMovies.length) setSavedMoviesSearchError(ERROR_MESSAGES['not found error']);    
  }, [filteredSavedMovies]);

  const handleMoviesSearch = async (request) => {
    setIsLoading(true);
    setSearchError(false);
    try {
      const downloadedMovies = (!movies.length) ? await moviesApi.getMovies() : movies;
      setMovies(downloadedMovies);
      setFilteredMovies(filterMovies(downloadedMovies, request, isShortFilmsOn));
      if (!filteredMovies.length && localStorage.getItem('localMovies')) setSearchError(ERROR_MESSAGES['not found error']);
      localStorage.setItem('prevSearchRequest', request);
      setSearchRequest(request);
    }
    catch (error) {
      console.log(error);
      setSearchError(ERROR_MESSAGES['search error']);
    }
    finally {
      setIsLoading(false);
    }
  };

  /* save, delete movies handlers */

  const handleSaveButtonClick = async (movie) => {
    try {
      const savedMovie = await
        userApi.saveMovie(
          {movie: {
              country: movie.country || '—',
              director: movie.director,
              duration: movie.duration,
              year: movie.year,
              description: movie.description,
              image: URLS.moviesApiServer + movie.image.url,
              trailerLink: URL_REGEXP.test(movie.trailerLink) ? movie.trailerLink : 'https://youtube.com/',
              thumbnail: URLS.moviesApiServer + movie.image.formats.thumbnail.url,
              movieId: movie.id,
              nameRU: movie.nameRU || '—',
              nameEN: movie.nameEN || '—'
            },
            token,
          });
      setSavedMovies([...savedMovies, savedMovie]);
      setSavedMoviesIds([...savedMoviesIds, movie.id]);
    }
    catch (error) {
      console.log(error);
      setSearchError(ERROR_MESSAGES['search error']);
    }
  };

  const handleDeleteMovie = (movie) => {
    try {
      const moviesToDelete = !movie._id ?
      savedMovies.filter(item => item.movieId === movie.id) :
      [movie];
      moviesToDelete.map((deletingMovie) => {
        userApi.deleteMovie(deletingMovie._id, token);
        setSavedMovies(savedMovies.filter((item) => item._id !== deletingMovie._id));
        setSavedMoviesIds(savedMoviesIds.filter((item) => item !== deletingMovie.movieId));
        return ('');
      });
    }
    catch (error) {
      console.log(error);
    }
  };

  /* popup handlers */
  function handleBurgerButtonClick() {
    setIsPopupOpened(true);
  }

  function closePopup() {
    setIsPopupOpened(false);
  }

  /* registration, login, logout, checktoken handlers */

  function clearFormErrorMessage() {
    setIsFormErrorMessageShown(false);
    setFormErrorMessage('');
    setNotificationMessage('');
  }

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
        setNotificationMessage(PROFILE_UPDATE_SUCCESS_MESSAGE);
      })
      .catch((error) => {
        handleFormErrorMessage(error);
      });
  }
  
  function handleLogout() {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});

    /* очистка стейтов movies */
    setMovies([]);
    setFilteredMovies([]);
    setSearchRequest([]);
    setIsShortFilmsOn(false);
    setIsSavedShortFilmsOn(false);

    history.push('/signin');
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
  };

  useEffect(() => {    
    setIsShortFilmsOn(Boolean(localStorage.getItem('searchShortFilms')));
    getSavedMovies(token);
    setNotificationMessage('');
  }, [isLoggedIn]);

  useEffect(() => {    
    if (token) checkToken(token);
    else setIsLoggedIn(false);
  }, []);

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
                exact path="/profile"
                component={Profile}
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
                onUpdate={handleUpdateProfile}
                onLogout={handleLogout}
                isFormErrorMessageShown={isFormErrorMessageShown}
                formErrorMessage={formErrorMessage}
                notificationMessage={notificationMessage}
                clearErrors={clearFormErrorMessage}
              />
              <ProtectedRoute
                exact path="/movies"
                component={Movies}
                isLoggedIn={isLoggedIn}
                moviesData={filteredMovies}
                savedMoviesIds={savedMoviesIds}
                searchRequest={searchRequest}
                onSubmit={handleMoviesSearch}
                onDelete={handleDeleteMovie}
                isLoading={isLoading}
                onSaveClick={handleSaveButtonClick}
                errorMessage={searchError}
              />
              <ProtectedRoute
                exact path="/saved-movies"
                component={SavedMovies}
                isLoggedIn={isLoggedIn}
                moviesData={savedMoviesData}
                searchRequest={''}
                onSubmit={handleSavedMoviesSearch}
                onDelete={handleDeleteMovie}
                onSaveClick={handleSaveButtonClick}
                errorMessage={savedMoviesSearchError}
              />
              <Route exact path="/signup">
                <Register
                  isLoggedIn={isLoggedIn}
                  onRegistration={handleRegistration}
                  isFormErrorMessageShown={isFormErrorMessageShown}
                  formErrorMessage={formErrorMessage}
                  setFormErrorMessage={setFormErrorMessage}
                  clearErrors={clearFormErrorMessage}
                />
              </Route>
              <Route exact path="/signin">
                <Auth
                  isLoggedIn={isLoggedIn}
                  onLogin={handleLogin}
                  isFormErrorMessageShown={isFormErrorMessageShown}
                  formErrorMessage={formErrorMessage}
                  clearErrors={clearFormErrorMessage}
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
