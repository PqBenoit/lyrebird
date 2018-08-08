import voiceReducer from './voiceReducer';
import * as voiceActions from '../actions/voiceActions';

describe('voiceReducer', () => {
  it('loads voices when passed LOAD_VOICES_SUCCESS', () => {
    const initialState = {
      voices: {}
    };

    const voices = {
      count: 2,
      results: [
        {
          name: 'Female HQ',
          description: 'Female high quality'
        },
        {
          name: 'Male HQ',
          description: 'Male high quality'
        }
      ]
    };

    const action = voiceActions.loadVoicesSuccess(voices);
    const newState = voiceReducer(initialState, action);

    expect(newState.count).toBe(2);
    expect(newState.results.length).toBe(2);
  });
});
