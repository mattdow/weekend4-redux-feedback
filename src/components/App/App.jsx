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
import { Card } from '@mui/material';
import { Typography } from '@mui/material';

function App() {
  // render the components to the DOM as determined by Routes!
  return (
    <Router>
      <div className='App'>
          
        <header className='App-header'>
          <Typography
            gutterBottom
            className='App-title'
            variant='h1'>Feedback!</Typography>
          <Typography
            gutterBottom
            className='subtitle'
            variant='h3'>Don't forget it!</Typography>
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
