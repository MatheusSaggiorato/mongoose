const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 7000;
const linkRoute = require('./routes/linkRoute');
const path = require('path');

mongoose.connect('mongodb://localhost/newlinks');

let db = mongoose.connection;

db.on('error', () => { console.log("houve um erro"); });
db.once('open', () => { console.log("Banco carregado") });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', linkRoute);

app.listen(port, () => console.log(`App listening on port ${port}`)); 