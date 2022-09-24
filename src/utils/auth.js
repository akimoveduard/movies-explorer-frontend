import config from '../config.json';

const BASE_URL = config.API_SERVER_URL;

const CONFIG = {
  baseUrl: config.API_SERVER_URL,
  headers: {
	  'Content-Type': 'application/json',
    'Accept': 'application/json'
	}
};

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(`Ошибка ${response.status}: ${response.statusText}`);
  }
}

export const register = (username, email, password) => {
 
  return fetch(`${CONFIG.baseUrl}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: CONFIG.headers,
    body: JSON.stringify({
      "name": username,
      "email": email,
      "password": password
    })
  })
  .then(response => handleResponse(response));
}

export const login = (email, password) => {

  return fetch(`${CONFIG.baseUrl}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: CONFIG.headers,
    body: JSON.stringify({
      "password": password,
      "email": email
    })
  })
  .then(response => handleResponse(response));
}

export const checkToken = (token) => {

  return fetch(`${CONFIG.baseUrl}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      ...CONFIG.headers,
      Authorization: `Bearer ${token}`,
    }
  })
  .then(response => handleResponse(response));
}
