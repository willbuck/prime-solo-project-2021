const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

//GET route will show different results if USER or ADMIN
router.get('/', rejectUnauthenticated, (req, res) => {
    if (req.user.is_admin) {
        const queryText = `
            SELECT "date", "duration" from "event"
            ORDER BY "date" DESC
        `
    pool.query(queryText).then((response)=>{
        console.log('response from admin getEvent', response.rows);
        res.send(response.rows);
    }).catch((error)=>{
        console.log('error from admin getEvents', error);
        res.sendStatus(500);
    })
    }
  else{
      res.sendStatus(403)
  };
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    if (req.user.is_admin){
        console.log(req.body)
        const insertText = [req.body.date, req.body.start, req.body.duration];
        const queryText = `
            INSERT INTO "event" ("date", "start", "duration")
            VALUES ($1, $2, $3);
        `
        pool.query(queryText, insertText)
        .then((response)=>{
            console.log('response from eventPost', response);
            res.sendStatus(200);
        }).catch((error)=>{
            console.log('error in eventPost', error);
            res.sendStatus(500);
        })
    }
});

module.exports = router;
