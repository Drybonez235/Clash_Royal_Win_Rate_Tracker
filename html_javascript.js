//let name =  document.getElementById("player_id_input").innerText;

//This function validates the player_id input and then calls the request function with the player id and time as parametrs.
function start() {
    let element = document.getElementById("player_id_input_field");
    let error = document.getElementById("player_id_error");
    let player_id = element.value;
    let currentDate = new Date();
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
        make_get(player_id.slice(1));
    }
    
   return console.log(time);
}

//This just refreshes everything. maybe
function refresh() {
    return location.reload();
}

function make_get(player_id_var) {
    const xhttp = new XMLHttpRequest();
    let host = "http://localhost:8080";
    let data ="&player_id=" + player_id_var.toString();
    
    
    xhttp.onload = function() {
        console.log("This worked");
        console.log(xhttp.responseText);
    }
    xhttp.open("POST", host);
    //xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send(data);
}
