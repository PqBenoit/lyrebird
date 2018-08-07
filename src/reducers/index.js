import { combineReducers } from 'redux';
import voices from './voiceReducer';
import asyncJob from './asyncJobReducer';
import initialState from '../initialState';

const rootReducer = combineReducers({
  voices,
  asyncJob,
  initialState
});

export default rootReducer;
