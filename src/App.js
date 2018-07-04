import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePageContainer from './pages/HomePage.jsx';
import ContactDocument from './pages/ContactDocument.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/kontakt" component={ContactDocument} />
        </div>
      </Router>
    );
  }
}

export default App;
