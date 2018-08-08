import * as types from '../actions/actionTypes.js';
import initialState from '../initialState';

export default function utteranceReducer(state = initialState.utterances, action){
  switch (action.type) {
    case types.LOAD_UTTERANCES_SUCCESS:
      return action.utterances;

    default:
      return state;
  }
}
