// this is continuation of c89 
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);// save players name on local storage
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
    //redirecting to the game_page.html
}

