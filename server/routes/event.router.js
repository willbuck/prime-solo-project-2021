const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

//GET route will show different results if USER or ADMIN
//THIS route is to get ALL events that havent happened yet
router.get('/', rejectUnauthenticated, (req, res) => {
    if (req.user.is_admin) {
        const queryText = `
            SELECT "id", "human_readable", "human_readable_time", "date", "duration" from "event"
            WHERE "is_complete" = false
            ORDER BY "date" DESC
        `
        pool.query(queryText).then((response) => {
            console.log('response from admin getEvent', response.rows);
            res.send(response.rows);
        }).catch((error) => {
            console.log('error from admin getEvents', error);
            res.sendStatus(500);
        })
    }
    else {
        res.sendStatus(403)
    };
});

//this route will get all events that have already happened
router.get('/records', rejectUnauthenticated, (req, res) => {
    if (req.user.is_admin) {
        const queryText = `
            SELECT "id", "human_readable", "human_readable_time" "date", "duration", "attended", "left_early", from "event"
            WHERE "is_complete" = true
            ORDER BY "date" DESC
        `
        pool.query(queryText).then((response) => {
            console.log('response from admin getRecords', response.rows);
            res.send(response.rows);
        }).catch((error) => {
            console.log('error from admin getRecords', error);
            res.sendStatus(500);
        })
    }
    else {
        res.sendStatus(403)
    };
});

//adds new event to DB
router.post('/', rejectUnauthenticated, (req, res) => {
    if (req.user.is_admin) {
        console.log(req.body)
        const insertText = [req.body.date, req.body.start, req.body.duration, req.body.human_readable, req.body.human_readable_time];
        const queryText = `
            INSERT INTO "event" ("date", "start", "duration", "human_readable", "human_readable_time")
            VALUES ($1, $2, $3, $4, $5);
        `
        pool.query(queryText, insertText)
            .then((response) => {
                console.log('response from eventPost', response);
                res.sendStatus(201);
            }).catch((error) => {
                console.log('error in eventPost', error);
                res.sendStatus(500);
            })
    }
    else {
        res.sendStatus(403)
    }
});

//delete route to remove from db
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    if (req.user.is_admin) {
        const id = [req.params.id];
        const queryText = `
        DELETE FROM "event"
        WHERE "id" = $1;
    `
        pool.query(queryText, id).then((response) => {
            console.log('response from deleteEvent', response);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error in deleteEvent', error);
            res.sendStatus(500)
        })
    }
    else {
        res.sendStatus(403);
    }
})

module.exports = router;
