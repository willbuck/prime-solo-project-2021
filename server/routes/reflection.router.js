const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

//get route to show longer calendar
//STRETCH add some sort features to the calendar?
router.get('/', rejectUnauthenticated, (req, res)=>{
    if(req.user.id){
        const user = [req.user.id]
        console.log('in getCalendar server side');
        const queryText = `
            SELECT "koan_text" from "koan"
            JOIN "user_koan" ON "user_koan".koan_id = "koan".id
            WHERE "user_koan".user_id = $1
            ORDER BY RANDOM()
            LIMIT 1;
        `
        pool.query(queryText, user).then((response)=>{
            console.log('response from getReflection', response);
            res.send(response.rows);
        }).catch((error)=>{
            console.log('error in getReflection', error);
            res.sendStatus(500);
        })
    }
    else{
        res.sendStatus(403)
    }
})

module.exports = router
