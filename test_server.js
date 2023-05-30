const http = require('http');
const https = require('https');
const qs = require('querystring');
const api_url_begin = "https://api.clashroyale.com/v1/players/";
const api_url_end = "battlelog";

let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIxNTlkZDNlLWQ0YzctNDNjNC04YjU5LTBmNTA2YzQxZjU5OSIsImlhdCI6MTY4NDQxMTIwNCwic3ViIjoiZGV2ZWxvcGVyL2IyNzdhNGUwLTcxMjUtNzZlYi0yNmViLTIzMjAwMGQzN2QzYSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3My4yMDkuMjQ3Ljg1Il0sInR5cGUiOiJjbGllbnQifV19.AEC19A-Gc-CxCEHWs5d-qr9F75GzKf9MtKkIgoSNv_MKWGtmL3Py6RDq8OfHe_eycMcKPJ_rZpn0mYZZsEz3nQ"


// Creates a locol host server and receives player id.
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    console.log(req.rawHeaders);
    var id;
    let json;
    
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
       let body_dict = qs.parse(body);
            id = String(body_dict['player_id']);
            res.end('ok');
        });
    } else(console.log("error"))
    
    json = api_call(id);
    
  res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', "OPTIONS, POST, GET");
  res.end("Maybe");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
    
    function api_call(player_id){
        
        const options = {
            hostname: 'api.clashroyale.com',
            path: '/v1/players/%23'+ player_id +'/battlelog/',
            method: 'GET',
            headers: {
                Authorization: token,
                ContentType: 'application/json'
            }
          };
        
        https.get(options, resp => {
            let data = "";
            // A chunk of data has been recieved.
            resp.on("data", chunk => {
                data += chunk;
            });
            
            // The whole response has been received. Print out the result.
            resp.on("end", () => {
                //let data1 = data.slice(1, -1);
                let url = JSON.parse(data);
                //console.log(url);
            });
        })
        .on("error", err => {
            console.log("Error: " + err.message);
        });
        return url;
    };
