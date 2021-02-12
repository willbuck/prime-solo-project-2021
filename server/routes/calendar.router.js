const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

//get route to show longer calendar
//STRETCH add some sort features to the calendar?
router.get('/:time', rejectUnauthenticated, (req, res)=>{
    if(req.user.id){
        const time = [req.params.time]
        console.log('in getCalendar server side');
        const queryText = `
            SELECT "id", "human_readable", "human_readable_time", "duration" from "event"
            WHERE "start" > $1;
        `
        pool.query(queryText, time).then((response)=>{
            console.log('response from getCalendar', response);
            res.send(response.rows);
        }).catch((error)=>{
            console.log('error in getCalendar', error);
            res.sendStatus(500);
        })
    }
    else{
        res.sendStatus(403)
    }
})


module.exports = router;
