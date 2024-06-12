// src/reducers/authReducer.js
import { AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

