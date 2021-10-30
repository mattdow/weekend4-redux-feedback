import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

function ReviewPage() {
    // grab the current value of the feedback from the redux store
    const currentFeedback = useSelector((store) => store.currentFeedback)

    // create a variable for the useHistory hook
    const history = useHistory();
    // create a variable for useDispatch hook
    const dispatch = useDispatch();
    

    // define a handleSubmit function for when SUBMIT is clicked
    const handleSubmit = (event) => {
        
        console.log(currentFeedback);
        // call an axios method to POST the data to the DB
        axios({
            method: `POST`,
            url: '/feedback',
            data: currentFeedback,
        })
        .then((response) => {
            history.push('/success');
        })
        .catch((error) => {
            console.log(`Error in POST of`, currentFeedback);
            res.sendStatus(500);
        })
    } // end of handleSubmit

    // render JSX code to the DOM
    return(
        <>
        <h2>Review Your Feedback</h2>
        <p>Feelings: {currentFeedback.feeling}</p>
        <p>Understanding: {currentFeedback.understanding}</p>
        <p>Support: {currentFeedback.support}</p>
        <p>Comments: {currentFeedback.comments}</p>
        <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
} // end of ReviewPage

export default ReviewPage;