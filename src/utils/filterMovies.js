import { SHORTMOVIE_DURATION } from "./constants";

export function filterMovies(movies, request, isShortMoviesOn) {
  return movies.filter((movie) => {
    if (isShortMoviesOn) {
      return ((movie.nameRU.toLowerCase().includes(request.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(request.toLowerCase())) &&
        movie.duration <= SHORTMOVIE_DURATION);
    } else {
      return (movie.nameRU.toLowerCase().includes(request.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(request.toLowerCase()));
    }
  })
}