import { createContext, useReducer } from "react";
export const MoviesContext = createContext();

const initMoviesState = {
  isShortFilmsOn: false,
  isSavedShortFilmsOn: false,
}

export const moviesReducer = (state, action) => {
  switch(action.type) {
    case 'setIsShortFilmsOn':
      return {
        ...state,
        ...action.payload,
      };
      case 'setIsSavedShortFilmsOn':
        return {
          ...state,
          ...action.payload,
        };
    default:
      return initMoviesState;
  }
}

export const MoviesProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(moviesReducer, initMoviesState);
  const { isShortFilmsOn, isSavedShortFilmsOn } = state;

  const setIsShortFilmsOn = (value) => {
    dispatch({
      type:'setIsShortFilmsOn',
      payload: { isShortFilmsOn: value }
    });
  };

  const setIsSavedShortFilmsOn = (value) => {
    dispatch({
      type:'setIsSavedShortFilmsOn',
      payload: { isSavedShortFilmsOn: value }
    });
  }

  const values = {
    isShortFilmsOn,
    setIsShortFilmsOn,
    isSavedShortFilmsOn,
    setIsSavedShortFilmsOn,
  };

  return <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>;
}

