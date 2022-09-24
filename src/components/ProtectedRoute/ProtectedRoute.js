import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...props }) => {

  console.log(isLoggedIn)

  return (
    <Route>
      {isLoggedIn 
        ? <Component {...props} /> 
        : <Redirect to="/" /> 
      }
    </Route>
  )
}

export default ProtectedRoute; 