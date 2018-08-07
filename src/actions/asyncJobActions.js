import * as types from './actionTypes.js';
import { getAsyncJob } from '../api/lyrebirdApi'

export function loadAsyncJobSuccess(asyncJob){
  return { type: types.GET_ASYNC_JOB_SUCCESS, asyncJob }
}

export function loadAsyncJob(asyncJobId) {
  return function(dispatch){
    const interval = setInterval(function(){
      return getAsyncJob(asyncJobId).then(response => {
        const { id, status } = response.data;
        const asyncJob = { id, status};
        dispatch(loadAsyncJobSuccess(asyncJob))

        if(status === 'done') {
          clearInterval(interval);
        }
      });
    }, 2000);
  }
}
