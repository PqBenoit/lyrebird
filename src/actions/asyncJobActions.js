import * as types from './actionTypes.js';
import { getAsyncJob } from '../api/lyrebirdApi'

export function loadAsyncJobSuccess(asyncJob){
  return { type: types.GET_ASYNC_JOB_SUCCESS, asyncJob }
}

export function loadAsyncJob(asyncJobId) {
  return function(dispatch){
    fetchAsyncJob(dispatch, asyncJobId);

    const interval = setInterval(function(){
      fetchAsyncJob(dispatch, asyncJobId, interval);
    }, 5000);
  }
}

function fetchAsyncJob(dispatch, asyncJobId, interval = null){
  return getAsyncJob(asyncJobId).then(response => {
    const { id, status } = response.data;
    const asyncJob = { id, status};
    dispatch(loadAsyncJobSuccess(asyncJob))

    if(status === 'done' && interval !== null) {
      clearInterval(interval);
    }
  });
}
