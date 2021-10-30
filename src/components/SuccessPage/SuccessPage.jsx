import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

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
            <h1>Thank You!</h1>
            <button onClick={handleRefresh}>Leave New Feedback</button>
        </>
    )
}
export default SuccessPage;