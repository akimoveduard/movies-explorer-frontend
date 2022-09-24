const filterMovies = (searchRequest, onlyShortfilms, moviesData) => {

  const filterMoviesByRequest = (movie) => {
    return JSON.stringify(movie).toLowerCase().includes(searchRequest.toLowerCase());
  }

  const filterMovisByDuration = (movie) => {
    return movie.duration <= 40;
  }

  if (!onlyShortfilms) {
    return moviesData.filter(filterMoviesByRequest);
  } else {
    return moviesData.filter(filterMovisByDuration).filter(filterMoviesByRequest);
  }

}

export default filterMovies;