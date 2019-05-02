const express = require('express');


const app = express();
app.use(express.json());


app.use('/api',require('./app/routers/index'));

app.get('/', (req, res) => {
    return res.send("estou funcionando");
});


app.listen(3000);