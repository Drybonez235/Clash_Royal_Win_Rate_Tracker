//Journey code.

//const http = require('http');
//const https = require('https');
//const qs = require('querystring');
//const api_url_begin = "https://api.clashroyale.com/v1/players/";
//const api_url_end = "battlelog";
//
//let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIxNTlkZDNlLWQ0YzctNDNjNC04YjU5LTBmNTA2YzQxZjU5OSIsImlhdCI6MTY4NDQxMTIwNCwic3ViIjoiZGV2ZWxvcGVyL2IyNzdhNGUwLTcxMjUtNzZlYi0yNmViLTIzMjAwMGQzN2QzYSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3My4yMDkuMjQ3Ljg1Il0sInR5cGUiOiJjbGllbnQifV19.AEC19A-Gc-CxCEHWs5d-qr9F75GzKf9MtKkIgoSNv_MKWGtmL3Py6RDq8OfHe_eycMcKPJ_rZpn0mYZZsEz3nQ"
//
//
//// Creates a locol host server and receives player id.
//const hostname = '127.0.0.1';
//const port = 8080;
//
//const server = http.createServer((req, res) => {
//    console.log(req.rawHeaders);
//    var id;
//    let json;
//
//    if (req.method === 'POST') {
//        let body = '';
//        req.on(' ', chunk => {
//            body += chunk.toString(); // convert Buffer to string
//        });
//        req.on('end', (api_call) => {
//       let body_dict = qs.parse(body);
//            id = String(body_dict['player_id']);
//            console.log(id + "Does this even get called?");
//            res.end('ok');
//            json = api_call(id);
//        });
//    } else(console.log("error"))
//
//  res.statusCode = 200;
//    res.setHeader('Content-Type','text/plain');
//    res.setHeader('Access-Control-Allow-Origin', "*");
//    res.setHeader('Access-Control-Allow-Methods', "OPTIONS, POST, GET");
//  res.end(json);
//});
//
//server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
//});
//
//    function api_call(player_id){
//
//        const options = {
//            hostname: 'api.clashroyale.com',
//            path: '/v1/players/%23'+ player_id +'/battlelog/',
//            method: 'GET',
//            headers: {
//                Authorization: token,
//                ContentType: 'application/json'
//            }
//          };
//
//        https.get(options, resp => {
//            let data = "";
//            // A chunk of data has been recieved.
//            resp.on("data", chunk => {
//                data += chunk;
//            });
//
//            // The whole response has been received. Print out the result.
//            resp.on("end", () => {
//                //let data1 = data.slice(1, -1);
//                let url = JSON.parse(data);
//                console.log(url + "this is supposed to be JSON");
//                return url;
//            });
//        })
//        .on("error", err => {
//            console.log("Error: " + err.message);
//        });
//    };

// Old Javascript
//const https = require('https');
//
//const start_time = date.now();
//const player_id = ;//Somehow this has to collect a post request... Maybe server.listen?()
//
//const url1 = "https://api.clashroyale.com/v1/players/%232VL9VP8Y0/battlelog";
//
//
//let json_keys = ['type', 'battleTime', 'isLadderTournament', 'arena', 'gameMode', 'deckSelection', 'team', 'opponent', 'isHostedMatch'];
//let team_keys = ['tag', 'name', 'crowns', 'kingTowerHitPoints', 'cards','elixirLeaked'];
//let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIxNTlkZDNlLWQ0YzctNDNjNC04YjU5LTBmNTA2YzQxZjU5OSIsImlhdCI6MTY4NDQxMTIwNCwic3ViIjoiZGV2ZWxvcGVyL2IyNzdhNGUwLTcxMjUtNzZlYi0yNmViLTIzMjAwMGQzN2QzYSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3My4yMDkuMjQ3Ljg1Il0sInR5cGUiOiJjbGllbnQifV19.AEC19A-Gc-CxCEHWs5d-qr9F75GzKf9MtKkIgoSNv_MKWGtmL3Py6RDq8OfHe_eycMcKPJ_rZpn0mYZZsEz3nQ"
//
//const options = {
//    hostname: 'api.clashroyale.com',
//    path: '/v1/players/%232VL9VP8Y0/battlelog/',
//    method: 'GET',
//    headers: {
//        Authorization: token,
//        ContentType: 'application/json'
//    }
//  };
//
//https.get(options, resp => {
//    let data = "";
//    // A chunk of data has been recieved.
//    resp.on("data", chunk => {
//      data += chunk;
//    });
//
//    // The whole response has been received. Print out the result.
//    resp.on("end", () => {
//      //let data1 = data.slice(1, -1);
//      let url = JSON.parse(data);
//      //console.log(url);
//    });
//  })
//  .on("error", err => {
//    console.log("Error: " + err.message);
//  });
//
////obvloulst this calls the other functuons.
////function start() {
////
////
////}
//
////on start this will take the player id and will turn it into the proper format for a url header object.
////function transform(player_id){
////    return "#23" + player_id;
////
////}
//
////This might return all the html or somethig like that.
////function redraw_html(){
////
////}
//
//////This function will use the player id and make an API call and return a JSON object.
////function call_api() {
////    try{
////        https.get(options, resp => {
////            let data = "";
////            // A chunk of data has been recieved.
////            resp.on("data", chunk => {
////              data += chunk;
////            });
////
////            // The whole response has been received. Print out the result.
////            resp.on("end", () => {
////              //let data1 = data.slice(1, -1);
////              let url = JSON.parse(data);
////              //console.log(url);
////            });
////          })
////          .on("error", err => {
////            console.log("Error: " + err.message);
////          });
////        }//Try Block End
////    catch(err) {
////      console.log(err);
////        }//Catch block end.
////
////    return url;
////}
////
//////This function will take the json object and extract the needed info and UPDATE the global variables.
////function analyise_data(json_object){
////    let wins_since_last_call = 0;
////
////    return
////}
//
////var http = require("http");
////var fs = require("fs");
////
////function render(path, contentType, fn) {
////  fs.readFile(__dirname + "/" + path, "utf-8", function (err, str) {
////    fn(err, str, contentType);
////  });
////}
////
//////create a server object:
////http
////  .createServer(function (req, res) {
////    var httpHandler = function (err, str, contentType) {
////      if (err) {
////        console.log(err);
////        res.writeHead(500, { "Content-Type": "text/plain" });
////        res.end("An error has occured: " + err.message);
////      } else {
////        res.writeHead(200, { "Content-Type": contentType });
////        res.end(str);
////      }
////    };
////    if (req.url.indexOf("/scripts/") >= 0) {
////      console.log("Serving ajax.js");
////      render(req.url.slice(1), "application/javascript", httpHandler);
////    } else if (
////      req.headers["x-requested-with"] === "XMLHttpRequest" &&
////      req.headers["x-vanillaajaxwithoutjquery-version"] === "1.0"
////    ) {
////      console.log("Processing AJAX request");
////      res.writeHead(200, { "Content-Type": "application/json" });
////      res.end(JSON.stringify({ message: "Hello World!" }));
////    } else {
////      console.log("Serving index.html");
////      render("views/index.html", "text/html", httpHandler);
////    }
////  })
////  .listen(8080); //the server object listens on port 8080
