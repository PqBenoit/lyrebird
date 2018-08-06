import { combineReducers } from 'redux';
import voices from './voiceReducer';

const rootReducer = combineReducers({
  voices
});

export default rootReducer;
