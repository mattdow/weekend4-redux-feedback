import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';
import { Button } from '@mui/material';

function UnderstandingForm() {
    // if the page is being returned to, grab the current value of feeling
    const currentFeedback = useSelector((store) => store.currentFeedback);
    const currentUnderstanding = currentFeedback.understanding;

    // create a variable and setter for the feeling rating to be entered.
    const [newUnderstanding, setNewUnderstanding] = useState(currentUnderstanding);

    // create a variable for the useHistory hook
    const history = useHistory();
    // create a variable for useDispatch hook
    const dispatch = useDispatch();

    // define a handleSubmit function for when NEXT is clicked
    const handleSubmit = (event) => {
        // prevent clearing when hitting the button
        event.preventDefault();
        // validating the value is between 1 and 10
        if (!newUnderstanding || newUnderstanding<0 || newUnderstanding>5) {
            alert("Please select a feeling rating from 0 to 5 stars");
            setNewUnderstanding(currentUnderstanding);
            return false;
        }
        // call the dispatch to state to add the feeling field
        dispatch({
            type: 'ADD_UNDERSTANDING',
            // payload needs to be an object key/pair with numeric content
            payload: {
                understanding: Number(newUnderstanding)
            },
        });
        // clear the feeling input
        setNewUnderstanding(0);
        // moving to the next form screen
        history.push(`/support`)
    }
    
    // render code
    return (
        <>
        <Typography
            gutterBottom
            className='understanding-title'
            variant='h3'>How well are you understanding the content?
        </Typography>
        <form onSubmit={handleSubmit}>
            <Typography gutterBottom component="legend">Feeling?</Typography>
            <Rating
                required
                size="large"
                precision={0.5}
                value={newUnderstanding}
                onChange={(event) =>
                setNewUnderstanding(event.target.value)}
            />
                <Button 
                    sx={{ m: 2}}
                    type="submit"
                    color="success"
                    variant="contained">NEXT</Button>
        </form>
        <Button 
            sx={{ m:2 }}
            variant="contained"

            onClick={(event) => {history.push('/')}}>Back to Feeling</Button>
        </>
    )
}

export default UnderstandingForm;