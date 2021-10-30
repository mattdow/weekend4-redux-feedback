import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';
import { Button } from '@mui/material';

function SupportForm() {
    // if the page is being returned to, grab the current value of feeling
    const currentFeedback = useSelector((store) => store.currentFeedback);
    const currentSupport = currentFeedback.support;
    // create a variable and setter for the feeling rating to be entered.
    const [newSupport, setNewSupport] = useState(currentSupport);

    // create a variable for the useHistory hook
    const history = useHistory();
    // create a variable for useDispatch hook
    const dispatch = useDispatch();

    // define a handleSubmit function for when NEXT is clicked
    const handleSubmit = (event) => {
        // prevent clearing when hitting the button
        event.preventDefault();
        // validate a number between 1 and 10 was entered
        if (!newSupport || newSupport<0 || newSupport>5) {
            alert("Please select a feeling rating from 0 to 5 stars");
            setNewSupport(0);
            return false;
        }
        // call the dispatch to state to add the feeling field
        dispatch({
            type: 'ADD_SUPPORT',
            // payload needs to be an object key/pair
            payload: {
                support: Number(newSupport)
            },
        });
        // clear the feeling input
        setNewSupport(currentSupport);
        // moving to the next form screen
        history.push(`/comments`)
    } // end handleSubmit function
    // render code
    return (
        <>
        <Typography
            gutterBottom
            className='support-title'
            variant='h3'>How well are you being supported?
        </Typography>
        <form onSubmit={handleSubmit}>
            <Typography gutterBottom component="legend">Support?</Typography>
            <Rating
                required
                size="large"
                precision={0.5}
                value={newSupport}
                onChange={(event) =>
                setNewSupport(event.target.value)}
            />
            <Button 
                sx={{ m: 2}}
                type="submit"
                color="success"
                variant="contained">NEXT</Button>

        </form>
        <Button 
            sx={{ m:2 }}
            variant="contained" onClick={(event) => {history.push('/understanding')}}>Back to Understanding</Button>
        </>
    )
}

export default SupportForm;