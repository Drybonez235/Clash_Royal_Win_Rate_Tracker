//Importing the required libraries.
const express = require('express');
const https =  require("https");


//Initializing the express app, hostname, and port number.
const app = express();
const hostname = "localhost//8080" //'3.89.163.68'; Amaozn ip address
const port = 8080;


//This function sets the response headers so that the requesting website accepts the response.
const set_headers = (req, res, next) => {
    res.setHeader('Content-Type','application/json'); 
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Request-Headers', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', "OPTIONS, POST, GET");
    
    //This if statment deals with the preflight request and returns 200
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
        }
        else {
          next();
        }
}

//This function verifies that the user id from the website is 9 digits long
const varify_user_id = (req, res, next) => {
    if(String(req.body.player_id).length != 9){
        next();
    }
    else{
        next();
    }
}

//This function makes the API call to gather the Clash Royal Player ID Game Logs
const call_api = (req, res, next) => {
    let token = "Bearer ";//AWS
    
    const api_url_begin = "api.clashroyale.com";
    const api_url_end = "/v1/players/%23" + req.body.player_id  + "/battlelog";
    
    const options = {
      hostname: api_url_begin,
      path: api_url_end,
      method: 'GET',
      headers: {
        Authorization: token,
        ContentType: 'application/json'
    }
    };
    
    //this is the actual https call to the server
    https.get(options, resp => {
        let data = "";
        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          req.body['Clash_Royal_Data'] = JSON.parse(data);
            next();
        });
      })
      .on("error", err => {
        console.log("Error: " + err.message);
      });
} // End of the call_api function.

//This Function extracts the data and has logic to determine wins and games played.
const extract_data = (req, res, next) => {
    let win_total = 0;
    let game_total = 0;
    
    //Start time is the time the first call is made. Any game before start time will not count.
    let start_time = req.body.start_time;
    //last refresh time is the last time a call was made subtracting 6 minutes. The reason it subtracts is because a game length
    //is up to 6 minutes long and any game played between start time and last call time needs to be captured.
    let last_refresh_time =  req.body.last_refresh_time - 500;
    console.log("start time from website: " + req.body.start_time)
    console.log("last refresh time from website: " + req.body.last_refresh_time)
    
    //This logic goes through the 25 records in the json file. If the game time is greater then start time and greater then last refresh time, then it counts as a game.
    for (let i=0; i < 25; i++){
        let current_record = req.body.Clash_Royal_Data[i];
        let your_crowns = current_record.team[0].crowns;
        let opponent_crowns = current_record.opponent[0].crowns;
        let battle_time = current_record.battleTime.replaceAll( "T" , "" ).slice(0, 14);
        
        if((start_time <= battle_time) && (last_refresh_time <= battle_time)){
            game_total += 1;
            console.log("This should only happen 1-2 times per call")
            //This if statement checks the number of crowns. If you you had more crowns then your opponent, a win is added.
            if(your_crowns > opponent_crowns){
                win_total += 1
                }//end of win in
            }//end of time match if statment
            else{
              break;
            }
        }//end of the for loop
    //the server sends back a json response with win total and game total. These numbers are added to the website.
    res.send({ wins: win_total, games : game_total})
}


//This is the order the functions will fire in.
app.use(express.json())
app.use(set_headers)
app.use(varify_user_id)
app.use(call_api)
app.use(extract_data)

app.post('/', (req, res) => {
    //console.log(res.json({requestBody: req.body}))
    });

app.listen(port, () => console.log('Clash Royal Win Rate Tracker: Server Ready '));


