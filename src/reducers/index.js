import { combineReducers } from 'redux';
import voices from './voiceReducer';
import initialState from '../initialState';

const rootReducer = combineReducers({
  voices,
  initialState
});

export default rootReducer;
