import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';

function CommentsForm() {
    // create a variable and setter for the feeling rating to be entered.
    const [newComments, setNewComments] = useState('');
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
        <h2>Any comments you want to leave?</h2>
        <form onSubmit={handleSubmit}>
            <label>Comments</label>
            <input 
            type="text"
            size="255"
            value={newComments}
            onChange={(event) =>
                setNewComments(event.target.value)}
            />
            <div>
                <button type="submit">NEXT</button>
            </div>
        </form>
        </>
    )

}

export default CommentsForm;