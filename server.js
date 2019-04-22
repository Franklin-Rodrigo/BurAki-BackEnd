const express = require('express');
const requireDir= require('require-dir');
const cors = require('cors');


//iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());



//Rotas
app.use("/api", require('./src/routes'));

app.listen(3001);