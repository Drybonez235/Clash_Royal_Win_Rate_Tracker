const https = require('https');


const url1 = "https://api.clashroyale.com/v1/players/%232VL9VP8Y0/battlelog";


let json_keys = ['type', 'battleTime', 'isLadderTournament', 'arena', 'gameMode', 'deckSelection', 'team', 'opponent', 'isHostedMatch'];
let team_keys = ['tag', 'name', 'crowns', 'kingTowerHitPoints', 'cards','elixirLeaked'];
let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIxNTlkZDNlLWQ0YzctNDNjNC04YjU5LTBmNTA2YzQxZjU5OSIsImlhdCI6MTY4NDQxMTIwNCwic3ViIjoiZGV2ZWxvcGVyL2IyNzdhNGUwLTcxMjUtNzZlYi0yNmViLTIzMjAwMGQzN2QzYSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3My4yMDkuMjQ3Ljg1Il0sInR5cGUiOiJjbGllbnQifV19.AEC19A-Gc-CxCEHWs5d-qr9F75GzKf9MtKkIgoSNv_MKWGtmL3Py6RDq8OfHe_eycMcKPJ_rZpn0mYZZsEz3nQ"

const options = {
    hostname: 'api.clashroyale.com',
    path: '/v1/players/%232VL9VP8Y0/battlelog/',
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
      console.log(url);
        document.querySelector("#change").value("It worked!");
    });
  })
  .on("error", err => {
    console.log("Error: " + err.message);
  });
