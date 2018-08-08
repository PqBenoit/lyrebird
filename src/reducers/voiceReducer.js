import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

export default function voiceReducer(state = initialState.voices, action){
  switch (action.type) {
    case types.LOAD_VOICES_SUCCESS:
      return action.voices;

    default:
      return state;
  }
}
