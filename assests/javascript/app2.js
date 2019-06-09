
function qandA (){

  var q1 = document.trivia.q1.value;
  var q2 = document.trivia.q2.value;
  var q3 = document.trivia.q3.value;
  var q4 = document.trivia.q4.value;
  var q5 = document.trivia.q5.value;

  var correct = 0;
  var incorrect =0;

  if(q1 == "false"){
    correct++;
  }else{
    incorrect++;
  }

  if(q2 == "true"){
    correct++;
  }else{
    incorrect++;
  }

  if(q3 == "true"){
    correct++;
  }else{
    incorrect++;
  }

  if(q4 == "false"){
    correct++;
  }else{
    incorrect++;
  }

  if(q5 == "false"){
    correct++;
  }else{
    incorrect++;
  }

  

console.log(q1);
console.log(correct);
console.log(incorrect);
}