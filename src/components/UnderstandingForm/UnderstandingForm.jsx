import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';

function UnderstandingForm() {
    // create a variable and setter for the feeling rating to be entered.
    const [newUnderstanding, setNewUnderstanding] = useState(0);

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
            type: 'ADD_UNDERSTANDING',
            // payload needs to be an object key/pair
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
        <h2>How well are you understanding the content?</h2>
        <form onSubmit={handleSubmit}>
            <label>Understanding?</label>
            <input 
            type="number"
            value={newUnderstanding}
            onChange={(event) =>
                setNewUnderstanding(event.target.value)}
            />
            <div>
                <button type="submit">NEXT</button>
            </div>
        </form>
        </>
    )
}

export default UnderstandingForm;