import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


function CommentsForm() {
    // if the page is being returned to, grab the current value of feeling
    const currentFeedback = useSelector((store) => store.currentFeedback);
    const currentComments = currentFeedback.comments;
    // create a variable and setter for the feeling rating to be entered.
    const [newComments, setNewComments] = useState(currentComments);
    // create a variable for the useHistory hook
    const history = useHistory();
    // create a variable for useDispatch hook
    const dispatch = useDispatch();
    // define a handleSubmit function for when NEXT is clicked
    const handleSubmit = (event) => {
        // prevent clearing when hitting the button
        event.preventDefault();
        // call the dispatch to state to add the feeling field
        dispatch({
            type: 'ADD_COMMENTS',
            // payload needs to be an object key/pair
            payload: {
                comments: newComments
            },
        });
        // clear the feeling input
        setNewComments('');
        // moving to the next form screen
        history.push(`/review`)
    } // end handleSubmit
    // render code
    return (
        <>
        <Typography
            gutterBottom
            className='understanding-title'
            variant='h3'>Any comments you want to leave?
        </Typography>
        <form onSubmit={handleSubmit}>
            <Typography gutterBottom component="legend">Comments?</Typography>
            <TextField 
            fullWidth
            variant="outlined"
            label="Comments"
            multiline
            maxRows={6}
            value={newComments}
            onChange={(event) =>
                setNewComments(event.target.value)}
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
            onClick={(event) => {history.push('/support')}}>Back to Support</Button>
        </>
        
    )

}

export default CommentsForm;