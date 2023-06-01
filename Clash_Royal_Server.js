const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const hostname = '127.0.0.1';
const port = 8080;

const set_headers = (req, res, next) => {
    res.setHeader('Content-Type','application/json'); //made a change here from  text to what it is
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', "OPTIONS, POST, GET");
    next();
}

const function1 = (req, res, next) => {
    console.log(req.protocol)     // "https"
      console.log(req.hostname)     // "example.com"
      console.log(req.path)         // "/creatures"
      console.log(req.originalUrl)  // "/creatures?filter=sharks"
      console.log(req.subdomains)   // "['ocean']"
    console.log(req.body)
    next();
}

const function2 = (req, res, next) => {
    console.log("function 2");
    res.send('Hello World!')
}

//This is the order the functions will fire in.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(set_headers)
app.use(function1)
app.use(function2)

app.post('/', (req, res) => {
    
    });

app.listen(port, () => console.log('Server ready'));
