import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/material';

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
        <Typography
            gutterBottom
            className='understanding-title'
            variant='h3'>Review Your Feedback
        </Typography>
        <Typography
            variant="h5"
            gutterBottom>Feelings: {currentFeedback.feeling}
        </Typography>
        <Button
            sx={{ mb:2 }}
            color="warning" 
            onClick={(event) => {history.push('/')}}>Change Feelings Rating</Button>
        <Typography
            variant="h5"
            gutterBottom>Understanding: {currentFeedback.understanding}
        </Typography>
        <Button
            sx={{ mb:2 }}
            color="warning" 
            onClick={(event) => {history.push('/understanding')}}>Change Understanding Rating</Button>
        <Typography
            variant="h5"
            gutterBottom>Support: {currentFeedback.support}
        </Typography>
        <Button
            sx={{ mb:2 }}
            color="warning" 
            onClick={(event) => {history.push('/support')}}>Change Support Rating</Button>
        <Typography
            variant="h5"
            gutterBottom>Comments: {currentFeedback.comments}
        </Typography>
        <Button
            sx={{ mb:2 }}
            color="warning" 
            onClick={(event) => {history.push('/comments')}}>Change Comments</Button>
        <br/>
        <Button 
            sx={{ m:2 }}
            variant="contained"
            onClick={handleSubmit}>Submit Feedback</Button>
        </>
    )
} // end of ReviewPage

export default ReviewPage;