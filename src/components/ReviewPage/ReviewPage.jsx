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
        // alter the store to add a date of submission
        let today = new Date().toLocaleDateString();
        dispatch({
            type: 'ADD_DATE',
            payload: {
                date: today
            },
        })
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
    }
}