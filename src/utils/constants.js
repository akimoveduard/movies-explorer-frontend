export const URL_REGEXP = new RegExp('(https?:\\/\\/)[a-zA-Z.:0-9-?]{2,}\\.[a-z]{2,}([-a-zA-Z0-9@:%_+.~#?&=/]*)');

export const URLS = {
  'moviesApiServer': 'https://api.nomoreparties.co',
}

export const PATH_EXEPTIONS = {
  'header': ["/signup", "/signin", "/404"],
  'footer': ["/signup", "/signin", "/404", "/Profile"],
};

export const ERROR_MESSAGES = {
  '400': 'Ошибка 400: Неправильная почта или пароль',
  '401': 'Ошибка 401: Не авторизован',
  '403': 'Ошибка 403: Запрещено',
  '409': 'Ошибка 409: Конфликт',
  '500': 'Ошибка 500: Внутренняя ошибка сервера',
  'failed to fetch': 'Ошибка: Сервер не готов обработать запрос',
  'search error': 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  'not found error': 'Ничего не найдено',
}

export const PROFILE_UPDATE_SUCCESS_MESSAGE = 
  'Данные профиля успешно обновлены.';