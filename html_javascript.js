//let name =  document.getElementById("player_id_input").innerText;
const currentDate = new Date();
//This function validates the player_id input and then calls the request function with the player id and time as parametrs.
function start(){
        let element = document.getElementById("player_id_input_field");
        let error = document.getElementById("player_id_error");
        let player_id = element.value;
        let last_refresh_time = new Date();
        let hours = last_refresh_time.getHours();
        let min = last_refresh_time.getMinutes();
        
        if (player_id.charAt(0) != "#") {
            error.innerHTML = "Player ID must start with #";
        }
        else if (player_id == "" || player_id.length != 10) {
            error.innerHTML = "Player ID must be 9 charactors long";
        }
        else{
            element.disabled = true;
            error.innerHTML="";
            document.getElementById("start").disabled = true;
            document.getElementById("time_variable").innerHTML = hours + ":" + min;
            document.getElementById("last_refresh_time").innerHTML = hours + ":" + min;
            
            //Magic function call
            //For some reason we lost the string!
            repeat(player_id.slice(1), currentDate, last_refresh_time, hours, min));
        }

    }
//This just refreshes everything. maybe
function refresh() {
    return location.reload();
}

function repeat(player_id, currentDate, last_refresh_time, hours, min){
    setInterval(make_get(player_id.slice(1), currentDate, last_refresh_time, hours, min), 10000);
}

function make_get(player_id, first_call_time, last_refresh_time, hours, min) {
    const xhttp = new XMLHttpRequest();
    let host = "http://localhost:8080";
    let data = {};
    data["player_id"] = player_id.toString();
    data["start_time"] = first_call_time.toString();
    data["last_refresh_time"] = last_refresh_time.toString();
    let json = JSON.stringify(data, null, 2);
    console.log(json);
    
    xhttp.onload = function() {
        console.log("This worked");
        console.log(xhttp.responseText);
    }
    
    xhttp.open("POST", host);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");
    
    xhttp.send(json);
}

