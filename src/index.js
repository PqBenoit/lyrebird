import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadVoices } from './actions/voiceActions';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadVoices());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
