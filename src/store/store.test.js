import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as voiceActions from '../actions/voiceActions'

describe('store', () => {
  it('handles voices loading', () => {
    const store = createStore(rootReducer, initialState);

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
    store.dispatch(action)

    const currentStore = store.getState();
    expect(currentStore.voices).toBe(voices);
  });
});
