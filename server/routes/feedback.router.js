const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



// Creating a POST route to add a feedback object to the DB
router.post('/', (req, res) => {
    // define a date of submission to add to the other feedback data
    let today = new Date().toLocaleDateString();
    const newFeedback = [req.body.feeling, req.body.understanding,
        req.body.support, req.body.comments, today];
    console.log('In POST route for feedback', newFeedback);
    // defining query text to insert into the DB table
    const queryText = `INSERT INTO feedback
                        (feeling, understanding, support, comments, date)
                        VALUES ($1, $2, $3, $4, $5)`
    pool.query(queryText, newFeedback)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making DB post ${queryText}`);
            res.sendStatus(500);
        });
}); // end POST route


module.exports = router;