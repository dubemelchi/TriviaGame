$(document).ready(function(){


var timeleft = 10;

var correct = 0;

if(timeleft <=10){

  $("#results").hide();
}

//timer function
var gameTimer = setInterval(function(){

  $("#timer").html(timeleft);

  timeleft -= 1; 


  if(timeleft <= -1){

    clearInterval(gameTimer);
    
    
  $("#Trivia").hide();

  $("#clock").hide();

  $("#results").show();

  qandA();

  }

}, 1000);




})

