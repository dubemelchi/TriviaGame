

//timer variable
var timeleft = 10;

//timer function
var gameTimer = setInterval(function(){

   

  document.getElementById("timer").innerHTML = timeleft;

  timeleft -= 1; 

  if(timeleft <= -2){

    clearInterval(gameTimer);

    document.getElementById("timer").innerHTML = "Pencils Down!";

    window.open("results.html", "_self");

  }

}, 1000);



