import * as types from '../actions/actionTypes.js';

export default function voiceReducer(state = {}, action){
  switch (action.type) {
    case types.LOAD_VOICES_SUCCESS:
      return action.voices;

    default:
      return state;
  }
}
