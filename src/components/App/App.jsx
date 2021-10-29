import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, HashRouter as Router, Link } from 'react-router-dom'
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';

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
          {/* define route for main page with first entry */}
          <Route path="/" exact>
            <FeelingForm />
          </Route>
          <Route path="/understanding" exact>
            <UnderstandingForm />
          </Route>
          <Route path="/support" exact>
            <SupportForm />
          </Route>
          {/* <Route path="/comments" exact>
            <CommentsForm />
          </Route> */}
        </div>
      </div>

    </Router>
    
  );
}

export default App;
