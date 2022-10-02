import config from '../config.json';

const CONFIG = {
  baseUrl: config.API_SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
	}
};

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(response);
  }
}

export const saveMovie = ({movie, token}) => {
  return fetch(`${CONFIG.baseUrl}/movies`, {
    method: "POST",
    headers: {
      ...CONFIG.headers,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(movie),
  })
  .then(response => handleResponse(response));
};

export const getMovies = (token) => {
  return fetch(`${CONFIG.baseUrl}/movies`, {
    method: "GET",
    headers: {
      ...CONFIG.headers,
      Authorization: `Bearer ${token}`,
    }
  })
  .then(response => handleResponse(response));
}

export const deleteMovie = (id, token) => {
  return fetch(`${CONFIG.baseUrl}/movies/${id}`, {
    method: "DELETE",
    headers: {
      ...CONFIG.headers,
      Authorization: `Bearer ${token}`,
    }
  })
  .then(response => handleResponse(response));
}