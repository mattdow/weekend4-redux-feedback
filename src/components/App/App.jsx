import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, HashRouter as Router, Link } from 'react-router-dom'
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import ReviewPage from '../ReviewPage/ReviewPage';
import SuccessPage from '../SuccessPage/SuccessPage';

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
          <Route path="/understanding">
            <UnderstandingForm />
          </Route>
          <Route path="/support">
            <SupportForm />
          </Route>
          <Route path="/comments">
            <CommentsForm />
          </Route>
          <Route path="/review">
            <ReviewPage />
          </Route>
          <Route path="/success">
            <SuccessPage/>
          </Route>
        </div>
      </div>

    </Router>
    
  );
}

export default App;
