
var timeleft = 25;
var gameTimer = setInterval(function(){

  document.getElementById("timer").innerHTML = timeleft;

  timeleft -= 1;

  if(timeleft <= 0){
    clearInterval(gameTimer);
    document.getElementById("timer").innerHTML = "Finished"
  }
  
}, 1000);

