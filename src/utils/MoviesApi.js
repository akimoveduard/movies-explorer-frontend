class MoviesApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(`Ошибка ${response.status}`);
    }
  }

  getMovies() {
    return fetch(`${this._url}`,
    {
      method: 'GET',
      headers: this._headers
    })
      .then(this._handleResponse);
  }
}

export const moviesApi = new MoviesApi(
  {
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
	  headers: {
		  'Content-Type': 'application/json',
	  },
  }
);