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
        <button onClick={(event) => {history.push('/')}}>Change Feeling</button>
        <p>Understanding: {currentFeedback.understanding}</p>
        <button onClick={(event) => {history.push('/understanding')}}>Change Understanding</button>
        <p>Support: {currentFeedback.support}</p>
        <button onClick={(event) => {history.push('/support')}}>Change Support</button>
        <p>Comments: {currentFeedback.comments}</p>
        <button onClick={(event) => {history.push('/comments')}}>Change Comments</button>
        <br/>
        <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
} // end of ReviewPage

export default ReviewPage;