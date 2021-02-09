const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

//GET route will show different results if USER or ADMIN
router.get('/', rejectUnauthenticated, (req, res) => {
    if (req.user.is_admin) {
        const queryText = `
            SELECT "date", "duration" from "event"
        `
    pool.query(queryText).then((response)=>{
        console.log('response from admin getEvent', response.rows);
        res.send(response.rows);
    }).catch((error)=>{
        console.log('error from admin getEvents', error);
        res.sendStatus(500);
    })
    }
  res.sendStatus(403);
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    if (req.user.is_admin){
        console.log(req.body)
    }
});

module.exports = router;
