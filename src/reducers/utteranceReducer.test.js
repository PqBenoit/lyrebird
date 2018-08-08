import utteranceReducer from './utteranceReducer';
import * as utteranceActions from '../actions/utteranceActions';

describe('utteranceReducer', () => {
  it('loads utterances when passed LOAD_UTTERANCES_SUCCESS', () => {
    const initialState = {
      utterances: {}
    };

    const utterances = {
      count: 3,
      results: [
        {
          id: 'aaa',
          voice_id: 'aaaa'
        },
        {
          id: 'bbb',
          voice_id: 'bbb'
        },
        {
          id: 'ccc',
          voice_id: 'cccc'
        }
      ]
    };

    const action = utteranceActions.loadUtterancesSuccess(utterances);
    const newState = utteranceReducer(initialState, action);

    expect(newState.count).toBe(3);
    expect(newState.results.length).toBe(3);
  });
});
