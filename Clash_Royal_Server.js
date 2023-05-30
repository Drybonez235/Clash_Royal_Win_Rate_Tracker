const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 8080;


//res is the callback. It will fire
app.post('/', /*this is the start of the arrow function that has 2 parameters, req and res*/(req, res, next) => {
    
    /*this is the main function body!*/
    res.setHeader('Content-Type','text/plain');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', "OPTIONS, POST, GET");
    console.log("function 1");
    res.send('Hello World!')
    next()
    }/*This is the res arrow function body end bracket*/
         ,(req, res) => {
            console.log("function 2")
            }/*This is the next end function bracket*/
         )/*This is the app.post end function parathesis*/;

app.listen(port, () => console.log('Server ready'));
