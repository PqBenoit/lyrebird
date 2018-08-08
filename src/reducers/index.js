import { combineReducers } from 'redux';
import voices from './voiceReducer';
import asyncJob from './asyncJobReducer';
import utterances from './utteranceReducer';
import initialState from '../initialState';

const rootReducer = combineReducers({
  voices,
  asyncJob,
  utterances,
  initialState
});

export default rootReducer;
