const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Creating a POST route to add a feedback object to the DB
router.post('/', (req, res) => {
    const newFeedback = [req.body.feeling, req.body.understanding,
        req.body.support, req.body.comments, req.date]
    console.log('In POST route for feedback', newFeedback);
    // defining query text to insert into the DB table
    const queryText = `INSERT INTO feedback
                        (feeling, understanding, support, comments, date)
                        VALUES ($1, $2, $3, ,$4)`
    
})


module.exports = router;