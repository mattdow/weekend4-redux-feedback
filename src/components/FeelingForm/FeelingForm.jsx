import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';

function FeelingForm() {
    // create a variable and setter for the feeling rating to be entered.
    const [newFeeling, setNewFeeling] = useState(0);

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
            type: 'ADD_FEELING',
            // payload needs to be an object key/pair
            payload: {
                feeling: newFeeling
            },
        });
        // clear the feeling input
        setNewFeeling(0);
        // moving to the next form screen
        history.push(`/UnderstandingForm`)
    }
    // render code
    return (
        <form onSubmit={handleSubmit}>
            <label>Feeling?</label>
            <input 
            type="number"
            value={newFeeling}
            onChange={(event) =>
                setNewFeeling(event.target.value)}
            />
            <div>
                <button type="submit">NEXT</button>
            </div>
        </form>
    )
}

export default FeelingForm;