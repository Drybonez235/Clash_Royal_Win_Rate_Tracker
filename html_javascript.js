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
        make_get(player_id);
    }
    
   return console.log(time);
}

//This just refreshes everything. maybe
function refresh() {
    
    return location.reload();
}

function make_get(player_id_var) {
    //const httpRequest = new XMLHttpRequest();
    //let host = 'http://[::]:8080';
    //let path = '/Documents/Xcode/Clash_Royal_Win_Rate_Tracker/?';
    //let url = host + path + player_id_var;
    
//    httpRequest.open("GET", url);
//    httpRequest.send();
//    console.log("We got to the end at least");
    
    
}

