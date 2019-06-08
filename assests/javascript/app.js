
var timeleft = 10;
var gameTimer = setInterval(function(){

  document.getElementById("timer").innerHTML = timeleft;

  timeleft -= 1;

  if(timeleft <= -2){
    clearInterval(gameTimer);
    document.getElementById("timer").innerHTML = "Pencils Down!"
    
  }

}, 1000);

