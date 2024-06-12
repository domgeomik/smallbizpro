// src/reducers/projectReducer.js
import { FETCH_PROJECTS_SUCCESS } from '../actions/types';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

