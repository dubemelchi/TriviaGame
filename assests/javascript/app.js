//timer variable
var timeleft = 10;

//timer function
var gameTimer = setInterval(function(){

  document.querySelector("#timer").innerHTML = timeleft;
  timeleft -= 1; 

  if(timeleft <= -1){

    clearInterval(gameTimer);
    
    window.open("results.html", "_self");

    qandA()

  }

}, 1000);




