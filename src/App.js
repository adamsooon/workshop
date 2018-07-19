import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import HomePageContainer from './pages/HomePage.jsx';
import ContactDocument from './pages/ContactDocument.jsx';

const baseStyles = () => injectGlobal`
  ${reset}
  * {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
  }
  
  input, {
    outline: none;
    border: 1px solid;
    &:focus {
      outline:none;
    }
  }
  
  button {
    outline: none;
  }
`;

const App = () => {
  baseStyles();
  return (
    <Router>
      <div className="main-container">
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/contact" component={ContactDocument} />
      </div>
    </Router>
  );
};

export default App;
