var express = require('express');
var router = express.Router();

const user  = require('../controllers/user');
const adress = require('../controllers/u_adres');

//Get HOME PAGE
router.get('/hello',(req, res)=>{
    return res.send('Hello World');
});

//User Router
router.get('/user',user.list);
router.post('/user',user.add);
router.get('/user/:id',user.getById);
router.put('/user/:id',user.update);
router.delete('/user/:id',user.delete);
router.post('/user/adress',user.addAdress);

module.exports = router;