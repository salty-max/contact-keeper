import React, { useReducer } from 'react';
import logger from 'use-reducer-logger';
import PropTypes from 'prop-types';

import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

import AuthContext from './auth.context';
import AuthReducer from './auth.reducer';

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(
    process.env.NODE_ENV === 'development' ? logger(AuthReducer) : AuthReducer,
    initialState,
  );

  const loadUser = () => {};
  const registerUser = () => {};
  const loginUser = () => {};
  const logout = () => {};
  const clearErrors = () => {};

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        loadUser,
        registerUser,
        loginUser,
        logout,
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthState;
