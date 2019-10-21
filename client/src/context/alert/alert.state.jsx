import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import logger from 'use-reducer-logger';

import { SET_ALERT, REMOVE_ALERT } from '../types';

import AlertContext from './alert.context';
import AlertReducer from './alert.reducer';

const AlertState = ({ children }) => {
  const initialState = [];
  const [state, dispatch] = useReducer(
    process.env.NODE_ENV !== 'production' ? logger(AlertReducer) : AlertReducer,
    initialState,
  );

  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        type,
        id,
      },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

AlertState.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AlertState;
