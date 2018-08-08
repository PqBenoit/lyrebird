import React, { Component } from 'react';
import VoicesContainer from './voices/VoicesContainer';
import FormContainer from './form/FormContainer';
import UtteranceContainer from './utterances/UtterancesContainer'
import Header from './commons/Header.js';
import '../stylesheets/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <VoicesContainer />
        <FormContainer />
        <UtteranceContainer />
      </div>
    );
  }
}

export default App;
