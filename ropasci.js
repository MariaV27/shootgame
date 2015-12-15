window.rpsShoot = {
  gameStatus: {
    userScore: 0,
    computerScore: 0,
    roundCount: 1
  }
}

$(document).ready(function(){
var roundCount = $("#roundCount");
console.log (roundCount.text())

  function scoreReset(){
    if  (roundCount.text() = 2) {
    prompt("this is 2")
  }

}
});

var myDataRef = new Firebase('https://e9yxycrj3to.firebaseio-demo.com/');

$(".userButton").click(function(e) {
  e.preventDefault();
  var roundsAmount = $ ("#roundsAmount").val()
  $('#myModal').toggle()
  
});

var yourChoice, computerAttack, yourScore, opponentScore;
var threeOptions = ["Rock", "Paper", "Scissors"];
var amotofRounds = $ ("#amtofRounds").val()


function bindControl() {
  $(".btn-danger").on("click", function() {          
    playerChoice = $(this).attr('data-choice'); 
    playersMove();  
    setTimeout(gameLogic, 1500);
    setTimeout(bindControl, 4000);  
  });
}

function playersMove(){
   $(".btn-danger").off();
  console.log(yourChoice)
  if (youeChoice === "rock") {
    $(".fa-hand-rock-o, .playerTurn").fadeTo("fast", 1.0).delay(1500).fadeTo("fast", 0.3);
  }
  else if(yourChoice === "paper") {
    $(".fa-hand-paper-o, .yourTurn").fadeTo("fast", 1.0).delay(1500).fadeTo("fast", 0.3);
    $(".fa-hand-paper-o, .yourTurn").fadeTo("fast", 1.0).delay(1500).fadeTo("fast", 0.3);
  }
    else if(yourChoice === "scissors") {
    $(".fa-hand-scissors-o, .yourTurn").fadeTo("fast", 1.0).delay(1500).fadeTo("fast", 0.3);
  }
}

function gameLogic() {
  var opponentChoice = Math.floor(Math.random() * attackOptions.length);
  if (opponentChoice === 0) {
    computerAttack = "paper";
    $(".fa-hand-paper-o, .opponentTurn").fadeTo("fast", 1.0).delay(1500).fadeTo("fast", 0.3);
  } else if (computerChoice === 1) {
    computerAttack = "rock";
    $(".fa-hand-rock-o, .opponentTurn").fadeTo("fast", 1.0).delay(1500).fadeTo("fast", 0.3);
  } else if (computerChoice === 2) {
    computerAttack = "scissors";
    $(".fa-hand-scissors-o, .opponentTurn").fadeTo("fast", 1.0).delay(1500).fadeTo("fast", 0.3);
  }
  console.log(yourChoice, opponentAttack)

  if (yourChoice === opponentAttack) {
    console.log("tie");
    $(".playerTie").fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3);
  } else if (yourChoice === "rock" && opponentAttack === "paper") || (yourChoice === "paper" && opponentAttack === "scissors") || (yourChoice === "scissors" && computerAttack === "rock")) {
    console.log("you lose");

    $(".opponentVictory").fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3);
    RPS.gameState.opponentScore++;

  } else if ((yourChoice === "rock" && opponentAttack === "scissors") || (yourChoice === "scissors" && opponentAttack === "paper") || (yourChoice === "paper" && computerAttack === "rock")) {
    console.log("you win!");
    RPS.gameState.userScore++;
    $(".yourVictory").fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3).fadeTo("fast", 1.0).fadeTo("fast", 0.3);
  }
  RPS.gameState.roundCount++;

  $("span").each(function() {
    $(this).html(RPS.gameState[$(this).attr("id")]);
  });
  var roundCount =$("#roundCount").val()
console.log(roundCount.val())
  if (("#roundCount".val())=3){
  prompt("hello there!")
}
}



$(document).ready(function(){
bindControl();  

});