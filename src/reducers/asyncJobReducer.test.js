import asyncJobReducer from './asyncJobReducer';
import * as asyncJobActions from '../actions/asyncJobActions';

describe('asyncJobReducer', () => {
  it('gets asyncJob when passed GET_ASYNC_JOB_SUCCESS', () => {
    const initialState = {
      asyncJob: {}
    };

    const asyncJob = {
      id: 'aaa',
      status: 'processing'
    };

    const action = asyncJobActions.loadAsyncJobSuccess(asyncJob);
    const newState = asyncJobReducer(initialState, action);

    expect(newState.id).toBe('aaa');
    expect(newState.status).toBe('processing');
  });
});
