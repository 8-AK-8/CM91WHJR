function send(){
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  actual_answer = number1 * number2;
  question_number = "<h4>" + number1 + " x " + number2 + "</h4>";
  input_box = "<br>Answer : <input type = 'text' id='ooutput'>";
  check_button = "<br></br><button class='btn btn-info' onclick='check()'>Check</button>";
  row = question_number + input_box + check_button ;
  check_button = 
  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}


player1_name = localStorage.getItem("player_1");
player2_name = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("p1name").innerHTML = player1_name + ":";
document.getElementById("p2name").innerHTML = player2_name + ":";

document.getElementById("p1score").innerHTML = player1_score;
document.getElementById("p2score").innerHTML = player2_score;

document.getElementById("qa1").innerHTML = "Question turn - " + player1_name;
document.getElementById("qa2").innerHTML = "Answer turn - " + player2_name;

question_turn = "player_1"
answer_turn = "player_2"

function check(){
  get_answer = document.getElementById("input_box").value;
  answer = get_answer.toLowerCase();
  if(answer == word){
    if(answer_turn == "player_1"){
      player1_score = player1_score + 1
      document.getElementById("p1score").innerHTML = player1_score;
    }else{
      player2_score = player2_score + 1
      document.getElementById("p2score").innerHTML = player2_score;
    }
  }
  if(question_turn == "player_1"){
    question_turn = "player_2"
    document.getElementById("qa1").innerHTML = "Question turn - " + player2_name;
  } else {
    question_turn = "player_1"
    document.getElementById("qa1").innerHTML = "Question turn - " + player1_name;
  }

  if(answer_turn == "player_1"){
    answer_turn = "player_2"
    document.getElementById("qa2").innerHTML = "Answer turn - " + player2_name;
  } else {
    answer_turn = "player_1"
    document.getElementById("qa2").innerHTML = "Answer turn - " + player1_name;
  }
  document.getElementById("answer").innerHTML = ""
}