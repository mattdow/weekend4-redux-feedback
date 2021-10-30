import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Card } from '@mui/material';
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';

function FeelingForm() {

    // if the page is being returned to, grab the current value of feeling
    const currentFeedback = useSelector((store) => store.currentFeedback);
    const currentFeeling = currentFeedback.feeling;

    // create a variable and setter for the feeling rating to be entered. Setting the default to be the current value from store, in case we are returning to edit the previous value.
    const [newFeeling, setNewFeeling] = useState(currentFeeling);

    // create a variable for the useHistory hook
    const history = useHistory();
    // create a variable for useDispatch hook
    const dispatch = useDispatch();

    // define a handleSubmit function for when NEXT is clicked
    const handleSubmit = (event) => {
        // prevent clearing when hitting the button
        event.preventDefault();
        // validating a number between 1 and 10 was entered 
        if (!newFeeling || newFeeling<0.5 || newFeeling>5) {
            alert("Please select a feeling rating from 0 to 5 stars");
            setNewFeeling(currentFeeling);
            return false;
        }
        // call the dispatch to state to add the feeling field
        dispatch({
            type: 'ADD_FEELING',
            // payload needs to be an object key/pair
            payload: {
                feeling: Number(newFeeling)
            },
        });
        
        // moving to the next form screen
        history.push(`/understanding`)
    }
    // render code
    return (
        <>
        <Typography
            gutterBottom
            className='feeling-title'
            variant='h3'>How Are You Feeling Today?
        </Typography>
        <form onSubmit={handleSubmit}>
            <Typography component="legend">Feeling?</Typography>
            <Rating
                required
            
                precision={0.5}
                value={newFeeling}
                onChange={(event) =>
                setNewFeeling(event.target.value)}
            />
            <div>
                <button type="submit">NEXT</button>
            </div>
        </form>
        </>
    )
}

export default FeelingForm;