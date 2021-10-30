import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

function SuccessPage() {

    // create a variable for the useHistory hook
    const history = useHistory();
    // create a variable for useDispatch hook
    const dispatch = useDispatch();


    // define a handleRefresh function to clear the currentFeedback and 
    // return the user to the first page
    const handleRefresh = (event) => {
        // call a dispatch to clear state
        dispatch({
            type: 'RESET_FEEDBACK', 
        });
        history.push(`/`);

    } // end handleRefresh
    // render JSX code for the DOM
    return(
        <>
            <Typography
                gutterBottom
                variant='h2'>Thank You!
            </Typography>
            <Button 
                variant="contained" 
                color="success"
                onClick={handleRefresh}>Leave New Feedback</Button>
        </>
    )
}
export default SuccessPage;