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

export const update = (name, email, token) => {
  return fetch(`${CONFIG.baseUrl}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      ...CONFIG.headers,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      "name": name,
      "email": email
    })
  })
  .then(response => handleResponse(response));

}

export const getUser = () => {
  return fetch(`${CONFIG.baseUrl}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: CONFIG.headers,
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