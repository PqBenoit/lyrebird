import * as types from '../actions/actionTypes.js';
import initialState from '../initialState';

export default function asyncJobReducer(state = initialState.asyncJob, action){
  switch (action.type) {
    case types.GET_ASYNC_JOB_SUCCESS:
      return action.asyncJob;

    default:
      return state;
  }
}
