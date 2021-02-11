const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

//POST to add user to specifc event
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in post to junction table')
    if(req.user.id){
        const updateText = [req.user.id, req.body.id];
        const queryText = `
            INSERT INTO "user_event" ("user_id", "event_id")
            VALUES ($1, $2);
        `
        pool.query(queryText, updateText).then((response)=>{
            console.log('response from junction post', response);
            res.sendStatus(200);
        }).catch((error)=>{
            console.log('error posting to junction table', error);
            res.sendStatus(500);
        })
    }
})

//PUT route to add ONE attendee to session (update with leave early, use if else block)
router.put('/', rejectUnauthenticated, (req, res) => {
    console.log('in serverSide update events')
    if (req.user.id) {
        //need to post to update user_event && update event
        const eventID = [req.body.id]
        const queryText = `
        UPDATE "event"
        SET "attended" = "attended" + 1
        WHERE "id" = $1;
        `
        pool.query(queryText, eventID).then((response) => {
            console.log('response from server updateEvent', response.rows);
            res.send(response.rows);
        }).catch((error) => {
            console.log('error from server updateEvent', error);
            res.sendStatus(500);
        })
    }
    else {
        res.sendStatus(403)
    };
});

//put route to update how many people left the event before it was finished
router.put('/left', rejectUnauthenticated, (req, res) => {
    console.log('in serverSide update events')
    if (req.user.id) {
        //need to post to update user_event && update event
        const eventID = [req.body.id]
        const queryText = `
        UPDATE "event"
        SET "leave_early" = "leave_early" + 1
        WHERE "id" = $1;
        `
        pool.query(queryText, eventID).then((response) => {
            console.log('response from server updateEvent', response.rows);
            res.send(response.rows);
        }).catch((error) => {
            console.log('error from server updateEvent', error);
            res.sendStatus(500);
        })
    }
    else {
        res.sendStatus(403)
    };
});

module.exports = router;
