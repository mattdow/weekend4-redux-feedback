import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, HashRouter as Router, Link } from 'react-router-dom'

function App() {
  // render the components to the DOM as determined by Routes!
  return (
    <Router>
      <div className='App'>
          
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <div className="bodyContent">
          <Route path="/" exact>
            

          </Route>


        </div>
      </div>

    </Router>
    
  );
}

export default App;
