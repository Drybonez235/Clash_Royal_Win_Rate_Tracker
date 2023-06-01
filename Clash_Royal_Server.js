const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 8080;

const set_headers = (req, res, next) => {
    res.setHeader('Content-Type','text/plain');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', "OPTIONS, POST, GET");
    next();
}

const function1 = (req, res, next) => {
    console.log("function 1");
    next();
}

const function2 = (req, res, next) => {
    console.log("function 2");
    res.send('Hello World!')
}

app.use(set_headers)
app.use(function1)
app.use(function2)

app.post('/', (req, res) => {
    
    });

app.listen(port, () => console.log('Server ready'));
