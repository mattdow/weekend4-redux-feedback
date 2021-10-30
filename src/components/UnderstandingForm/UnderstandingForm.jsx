import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';

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
        if (!newUnderstanding || newUnderstanding<1 || newUnderstanding>10) {
            alert("Please select a feeling rating from 1 to 10");
            setNewUnderstanding(0);
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
        <button onClick={(event) => {history.push('/')}}>Back to Feeling</button>
        </>
    )
}

export default UnderstandingForm;