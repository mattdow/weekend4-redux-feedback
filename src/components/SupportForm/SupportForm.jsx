import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';

function SupportForm() {
    // create a variable and setter for the feeling rating to be entered.
    const [newSupport, setNewSupport] = useState(0);

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
            type: 'ADD_SUPPORT',
            // payload needs to be an object key/pair
            payload: {
                support: Number(newSupport)
            },
        });
        // clear the feeling input
        setNewSupport(0);
        // moving to the next form screen
        history.push(`/comments`)
    } // end handleSubmit function
    // render code
    return (
        <>
        <h2>How well are you being supported?</h2>
        <form onSubmit={handleSubmit}>
            <label>Supported?</label>
            <input 
            type="number"
            value={newSupport}
            onChange={(event) =>
                setNewSupport(event.target.value)}
            />
            <div>
                <button type="submit">NEXT</button>
            </div>
        </form>
        </>
    )
}

export default SupportForm;