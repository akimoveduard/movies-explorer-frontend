import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initUserState = {
  currentUser: {
    name: 'name',
    email: 'email@mail.ru'
  },
  isLoggedIn: undefined,
};

export const userReducer = (state, action) => {
  switch(action.type) {
    case 'setIsLoggedIn':
      return {
        ...state,
        ...action.payload,
      };
    case 'setCurrentUser':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initUserState);
  const { currentUser, isLoggedIn } = state;

  const setIsLoggedIn = (data) => {
    dispatch({
      type:'setIsLoggedIn',
      payload: {isLoggedIn: data}
    });
  };

  const setCurrentUser = (data) => {
    dispatch({
      type:'setCurrentUser',
      payload: {currentUser: data},
    })
  }

  const values = {
    state,
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
