$(document).ready(function(){
var roundCount = $("#roundCount");
console.log (roundCount.text())

  function scoreReset(){
    if  (roundCount.text() = 2) {
    prompt("this is 2")
  }

}
});

$(".userButton").click(function(e) {
  e.preventDefault();
  var roundsAmount = $ ("#roundsAmount").val()
  $('#myModal').toggle()
  
});

window.RPS = {
  gameState: {
    userScore: 0,
    computerScore: 0,
    roundCount: 1
  }
}

