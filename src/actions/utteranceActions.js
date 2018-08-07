import * as types from './actionTypes.js';
import { postUtterance } from '../api/lyrebirdApi'
import { loadAsyncJob } from './asyncJobActions'

export function generateUtteranceSuccess(async_job_id) {
  return { type: types.GENERATE_UTTERANCE_SUCCESS, async_job_id }
}

export function generateUtterance(params) {
  return function(dispatch){
    return postUtterance(params).then(response => {
      dispatch(loadAsyncJob(response.data.async_job_id));
    }).catch(error => {
      throw(error);
    });
  }
}
