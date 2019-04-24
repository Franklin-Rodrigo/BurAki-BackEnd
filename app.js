const express = require('express');
const exphbs = require('express-handlebars');
const bodyParer = require('body-parser');
const path = require('path');

//Database
const db = require("./config/database");

//Test DB
db.authenticate()
    .then(() => console.log('Database conected...') )
    .catch(err => console.log(('Error:') + err));

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

//User routes
app.use('/user', require('./routes/user'));

const PORT = process.env.PORT || '8002';

app.listen(PORT , console.log(`Server started on port ${PORT}`));