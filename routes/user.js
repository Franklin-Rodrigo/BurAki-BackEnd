const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../src/models/users');

// Get all Users
router.get('/', (req, res) => User.findAll()
    .then(Users => {
        console.log(Users);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

module.exports = router;