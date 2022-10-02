export function filterMovies(movies, request, isShortMoviesOn) {
  return movies.filter((movie) => {
    if (isShortMoviesOn) {
      return ((movie.nameRU.toLowerCase().includes(request.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(request.toLowerCase())) &&
        movie.duration <= 40);
    } else {
      return (movie.nameRU.toLowerCase().includes(request.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(request.toLowerCase()));
    }
  })
}