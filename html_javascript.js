const currentDate = new Date()
let games_played = 0;
let games_won = 0;

//This function validates the player_id input and then calls the request function with the player id and time as parametrs.
function start(){
        let element = document.getElementById("player_id_input_field");
        let error = document.getElementById("player_id_error");
        let player_id = element.value;
        let currentDateJSON = currentDate.toJSON().toString();
        let currentDate_convert = currentDateJSON.replaceAll( "T","").replaceAll("-","").replaceAll(":", "").slice(0, 14);
        
        if (player_id.charAt(0) != "#") {
            error.innerHTML = "Player ID must start with #";
        }
        else if (player_id == "" || player_id.length < 5) {
            error.innerHTML = "Player ID can't be blank and must be at least 5 charactors long!";
        }
        else{
            element.disabled = true;
            error.innerHTML="";
            document.getElementById("start").disabled = true;
            document.getElementById("time_variable").innerHTML = currentDate.getHours() + ":" + currentDate.getMinutes();
            //make_get(player_id.slice(1), currentDate_convert)
            setInterval(function () {make_get(player_id.slice(1), currentDate_convert)}, 300000); //300000
            //make_get(player_id.slice(1), currentDate_convert);
        }//end of else block
    }//end of start function

//refreshes the page
function refresh() {
    return location.reload();
}

//this function makes the post call to the server.
function make_get(player_id, first_call_time) {
    
    let last_refresh_time_update = new Date();
    let hours = last_refresh_time_update.getHours();
    let min = last_refresh_time_update.getMinutes();
    
    let last_refresh_timeJSON_update = last_refresh_time_update.toJSON().toString();
    let last_refresh_time_convert = last_refresh_timeJSON_update.replaceAll( "T","").replaceAll("-","").replaceAll(":", "").slice(0, 14);
    
    const xhttp = new XMLHttpRequest();
    let host = "http://3.89.163.68:8080";
    let data = {};
    data["player_id"] = player_id.toString();
    data["start_time"] = first_call_time; //.replace( "T" , "").replace("-", "").slice(0, 13);
    data["last_refresh_time"] = last_refresh_time_convert; //.replace( "T" , "" ).replace("-", "").slice(0, 13);
    let json = JSON.stringify(data, null, 2);
    
    xhttp.onload = function() {
        let response = JSON.parse(xhttp.responseText); //This woerks xhttp.responseText
        games_won += response.wins;
        games_played += response.games;
        document.getElementById("games_played_int").innerHTML = games_played;
        document.getElementById("games_won_int").innerHTML = games_won;
        
        if(games_played != 0){
            win_percentage = ((games_won/games_played).toFixed(2)) * 100;
            document.getElementById("win_percentage").innerHTML = win_percentage + "%";
        }
        console.log("start time: " + first_call_time);
        console.log("last refresh time: " + last_refresh_time_convert);
        console.log("Games Won from API call: " + response.wins);
        console.log("Games Played from API call: " + response.wins);
        document.getElementById("last_refresh_time").innerHTML = hours + ":" + min;
        
    }
        
        xhttp.open("POST", host);
        xhttp.setRequestHeader("Accept", "application/json");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(json);
    
}//end of make get function call

