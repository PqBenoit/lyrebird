import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadVoices } from './actions/voiceActions';
import { loadUtterances } from './actions/utteranceActions';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadVoices());
store.dispatch(loadUtterances());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
