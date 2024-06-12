// src/actions/projectActions.js
import axios from 'axios';
import { FETCH_PROJECTS_SUCCESS } from './types';

export const fetchProjects = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/projects');
    dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

