let games_played = 0;
let games_won = 0;
let seconds = 360
let countdown = document.getElementById("countdown");

//This function validates the player_id input and then calls the request function with the player id and time as parametrs.
function start(){
        const currentDate = new Date()
        let hours = "0" + currentDate.getHours();
        let minutes = "0" + currentDate.getMinutes();
        let shown_player_name = document.getElementById("player");
        let get_player_name = document.getElementById("input_name");
        const string_name = get_player_name.value;
        console.log(string_name);
        let element = document.getElementById("player_id_input_field");
        let error = document.getElementById("player_id_error");
        let player_id = element.value.trim();
        let currentDateJSON = currentDate.toJSON().toString();
        let currentDate_convert = currentDateJSON.replaceAll( "T","").replaceAll("-","").replaceAll(":", "").slice(0, 14);
        
        if (player_id.charAt(0) != "#") {
            error.innerHTML = "Player ID must start with #";
        }
        else if (player_id == "" || player_id.length < 5) {
            error.innerHTML = "Player ID can't be blank and must be at least 5 charactors long!";
        }
        else{
            shown_player_name.innerHTML = "Player: " + string_name;
            get_player_name = get_player_name.remove();
            element.disabled = true;
            error.innerHTML="";
            document.getElementById("start").disabled = true;
            document.getElementById("time_variable").innerHTML = hours.slice(-2) + ":" + minutes.slice(-2);
            setInterval(function() {timer()}, 1000);
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
    let hours = "0" + last_refresh_time_update.getHours();
    let min = "0" + last_refresh_time_update.getMinutes();
  
    
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
            win_percentage = ((games_won/games_played) * 100).toFixed(2);
            document.getElementById("win_percentage").innerHTML = win_percentage + "%";
        }
        console.log("start time: " + first_call_time);
        console.log("last refresh time: " + last_refresh_time_convert);
        console.log("Games Won from API call: " + response.wins);
        console.log("Games Played from API call: " + response.wins);
        document.getElementById("last_refresh_time").innerHTML = hours.slice(-2) + ":" + min.slice(-2);
        
    }
        
        xhttp.open("POST", host);
        xhttp.setRequestHeader("Accept", "application/json");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(json);
        seconds = 360;
    
}//end of make get function call

function timer(){ 
           let sixty_secs = "0" + (seconds % 60);
           countdown.innerHTML = Math.floor(seconds / 60) + ":" + sixty_secs.slice(-2);
           seconds -= 1;
           if(seconds == 0){
            seconds = 360;
           }
       };

