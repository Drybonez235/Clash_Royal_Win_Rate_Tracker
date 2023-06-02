//let name =  document.getElementById("player_id_input").innerText;
let button = false;
//This function validates the player_id input and then calls the request function with the player id and time as parametrs.
function start() {
    button = false;
    let element = document.getElementById("player_id_input_field");
    let error = document.getElementById("player_id_error");
    let player_id = element.value;
    let currentDate = new Date();
    let last_refresh_time = new Date();
    let hours = currentDate.getHours();
    let min = currentDate.getMinutes();
    
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
        
        //Magic function call
        //For some reason we lost the string!
        make_get(player_id.slice(1), last_refresh_time, hours, min);
        button = true;
    }
}

//This just refreshes everything. maybe
function refresh() {
    return location.reload();
}

function make_get(player_id, last_refresh_time,hours, min) {
    const xhttp = new XMLHttpRequest();
    let host = "http://localhost:8080";
    let data = {};
    data["player_id"] = player_id.toString();
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
    
    last_refresh_time = Date.now();
    document.getElementById("last_refresh_time").innerHTML = hours + ":" + min;
}

if(button){setInterval(start(), 10000)};

