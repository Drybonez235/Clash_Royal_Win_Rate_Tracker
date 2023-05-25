//let name =  document.getElementById("player_id_input").innerText;

//This function validates the player_id input and then calls the request function with the player id and time as parametrs.
function start() {
    let element = document.getElementById("player_id_input_field");
    let error = document.getElementById("player_id_error");
    let player_id = element.value;
    let time = Date.now();
    
    if (player_id.charAt(0) != "#") {
        error.innerHTML = "Player ID must start with #";
    }
    else if (player_id == "" || player_id.length != 10) {
        error.innerHTML = "Player ID must be 9 charactors long";
    }
    else{
        element.disabled = true;
        error.innerHTML="";
        
    }
    
   return console.log(time);
}

//This just refreshes everything. maybe
function refresh() {
    
    return console.log("Refresh is working");
}
