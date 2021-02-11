const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')


//GET route to get all koans
router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
    if (req.user.is_admin) {
        console.log('in /api/koan get')
        const queryText = `
        SELECT * FROM "koan"
    `
        pool.query(queryText).then((response) => {
            console.log('success in /api/koan', response);
            res.send(response.rows)
        }).catch((error) => {
            console.log('error in /api/koan')
            console.log(error)
            res.sendStatus(500);
        })

    }
    else {
        res.sendStatus(403)
    }
});

//GET route for single random koan for user
router.get('/user', rejectUnauthenticated, (req, res) => {
    // GET route code here
    if (req.user.id) {
        console.log('in /api/koan/user get')
        const queryText = `
            SELECT * FROM "koan"
            ORDER BY RANDOM() LIMIT 1
    `
        pool.query(queryText).then((response) => {
            console.log('success in /api/koan/user', response);
            res.send(response.rows)
        }).catch((error) => {
            console.log('error in /api/koan/user')
            console.log(error)
            res.sendStatus(500);
        })

    }
    else {
        res.sendStatus(403)
    }
});


//POST route to add new koan

router.post('/', rejectUnauthenticated, (req, res) => {
    // POST route code here
    if (req.user.is_admin) {
        console.log('in /api/koan post')
        console.log('from body parser in koan post', req.body.koan)
        const koan = [req.body.koan]
        const queryText = `
            INSERT INTO "koan" ("koan_text")
            VALUES ($1)
        `
        pool.query(queryText, koan).then((response) => {
            console.log('success in /api/koan post', response);
            res.send(204)
        }).catch((error) => {
            console.log('error in /api/koan post')
            console.log(error)
            res.sendStatus(500);
        })

    }
    else{
        res.sendStatus(403)
    }
});

//delete route to delete specific koan
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    if(req.user.is_admin){
    const id = [req.params.id];
    const queryText = `
        DELETE FROM "koan"
        WHERE "id" = $1;
    `
    pool.query(queryText, id).then((response) => {
        console.log(response);
        res.sendStatus(204);
    }).catch((error) => {
        console.log('error in koan delete')
        console.log(error);
        res.sendStatus(500);
    })
}
else{
    res.sendStatus(403)
}
});


//post route for user to save koan
router.post('/save', rejectUnauthenticated, (req, res)=>{
    if(req.user.id){
    console.log('in saveKoan post route');
    const queryData = [req.user.id, req.body.koan];
    const queryText = `
        INSERT INTO "user_koan" ("user_id", "koan_id")
        VALUES ($1, $2);
    `
    pool.query(queryText, queryData).then((response)=>{
        console.log('reponse from saveKoan post:', response);
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('error from saveKoan user', error);
        res.sendStatus(500);
    })
    }
    else{
        res.sendStatus(403)
    }

})



module.exports = router;
