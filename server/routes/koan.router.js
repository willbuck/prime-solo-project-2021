const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  if(req.user.is_admin){
    console.log('in /api/koan')
    const queryText = `
        SELECT * FROM "koan"
    `
    pool.query(queryText).then((response)=>{
        console.log('success in /api/koan', response);
        res.send(response.rows)
    }).catch((error)=>{
        console.log('error in /api/koan')
        console.log(error)
        res.sendStatus(500);
    })

  }
  else {
      req.sendStatus(403)
  }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});


router.delete('/:id', (req, res) => {
  // DELETE route code here
});



module.exports = router;
