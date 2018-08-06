import * as types from './actionTypes.js';
import { getVoices } from '../api/lyrebirdApi'

export function loadVoicesSuccess(voices) {
  return { type: types.LOAD_VOICES_SUCCESS, voices }
}

export function loadVoices(voices) {
  return function(dispatch){
    return getVoices().then(response => {
      dispatch(loadVoicesSuccess(response.data));
    }).catch(error => {
      throw(error);
    });
  }
}
