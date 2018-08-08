import * as types from './actionTypes.js';
import { postUtterance, getUtterances } from '../api/lyrebirdApi'
import { loadAsyncJob } from './asyncJobActions'

export function generateUtteranceSuccess(async_job_id) {
  return { type: types.GENERATE_UTTERANCE_SUCCESS, async_job_id }
}

export function loadUtterancesSuccess(utterances){
  console.log('in loadUtterancesSuccess');
  console.log(utterances);
  return { type: types.LOAD_UTTERANCES_SUCCESS, utterances }
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

export function loadUtterances() {
  return function(dispatch){
    return getUtterances().then(response => {
      console.log(response);
      dispatch(loadUtterancesSuccess(response.data));
    }).catch(error => {
      throw(error);
    })
  }
}
