import { createContext, useReducer } from "react";

export const MoviesContext = createContext();

const initMoviesState = {
  movies: [],
}

export const moviesReducer = (state, action) => {

}

export const MoviesProvider = ({ children }) => {

  const [state, dispatch] = useReducer(moviesReducer, initMoviesState);
  const { movies } = state;

  const values = {
    state,
    movies,
  };

  return <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>;
}

