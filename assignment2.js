const http = require('http');
const express = require('express');

const app = express();

app.use('/users',(req, res, next) => {
    console.log('only for users');
})

app.use('/', (req, res, next) => {
    console.log('in 3rd middleware');
    res.send('<h1>Hello form Expressjs</h1>')
})

app.listen(3000);