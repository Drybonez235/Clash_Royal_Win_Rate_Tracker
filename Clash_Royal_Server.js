const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 8080;


const set_headers = (req, res, next) => {
    res.setHeader('Content-Type','application/json'); //made a change here from  text to what it is
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Request-Headers', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', "OPTIONS, POST, GET");
    next();
}

const varify_user_id = (req, res, next) => {
    if(String(req.body.player_id).length != 9){
        next(error)
    }
    else{
        console.log(req.rawHeaders)
        console.log(req.body.player_id)
        console.log(req.body.last_refresh_time)
        next();
    }
}

const function2 = (req, res, next) => {
    console.log("function 2");
    res.send('Hello World!')
}

const control_flow = (req, res, next) => {
    if (req.type == "OPTIONS"){
        app.use(set_headers)
        app.use(function2)
    }
    else{
        app.use(express.json())
        app.use(set_headers)
        app.use(varify_user_id)
        app.use(function2)
    }
    
}
//This is the order the functions will fire in.
//app.use(bodyParser.json());
app.use(control_flow)

app.post('/', (req, res) => {
    //console.log(res.json({requestBody: req.body}))
    });

app.listen(port, () => console.log('Server ready'));


