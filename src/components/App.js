import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VoicesPage from './voices/VoicesPage'
import Header from './commons/Header.js'
import '../stylesheets/index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Header />
          </div>
          <div>
            <Route exact path="/" component={VoicesPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
