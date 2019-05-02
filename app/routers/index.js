var express = require('express');
var router = express.Router();

const user  = require('../controllers/user');

//Get HOME PAGE
router.get('/api',(req, res)=>{
    return res.send('Hello World');
});

//User Router
router.get('/user',user.list);
//router.post('/api/user',user.add);

module.exports = router;