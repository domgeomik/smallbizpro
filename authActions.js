// src/actions/authActions.js
import axios from 'axios';
import { AUTH_SUCCESS, AUTH_LOGOUT } from './types';

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/login', { email, password });
    dispatch({ type: AUTH_SUCCESS, payload: res.data });
    localStorage.setItem('token', res.data.token);
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  return { type: AUTH_LOGOUT };
};

