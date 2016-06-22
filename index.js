//  1  2  3
//  4  5  6
//  7  8  9

var playerLetter = prompt("X or O?").toUpperCase();
if (playerLetter === "") {
  playerLetter = "X";
}
if (playerLetter === "O") {
  var enemyLetter = "X";
}
else {
  enemyLetter = "O";
}  
var playerTurn = true;
var lastInput;

var winArr = [["#1", "#2", "#3"], ["#4", "#5", "#6"], ["#7", "#8", "#9"], ["#1", "#4", "#7"],["#2", "#5", "#8"], ["#3", "#6", "#9"], ["#1", "#5", "#9"], ["#3", "#5", "#7"]];

var winOrLose = function() {
	for (var w = 0; w < winArr.length; w++) {
			if ($(winArr[w][0]).html() === playerLetter && $(winArr[w][1]).html() === playerLetter && $(winArr[w][2]).html() === playerLetter) {
				alert("You Win!");
				restart();
				break;
      }
			else if ($(winArr[w][0]).html() === enemyLetter && $(winArr[w][1]).html() === enemyLetter && $(winArr[w][2]).html() === enemyLetter) {
				alert("You Lose!");
				restart();
				break;}
		}
	}

function isEmpty(i) {
  var index = "#" + i;
  if ($(index).html() === " ") {
    return true;
  } else {
    return false;
  }
} //Checks if square is empty

function enemyGuess() {
  var i = 0;
  while (true) {
    var enemyInput = Math.floor(Math.random() * (10 - 1) + 1)
    if (isEmpty(enemyInput)) {
      $("#" + enemyInput).html(enemyLetter)
      break
    } else if (isEmpty(1) === false && isEmpty(2) === false && isEmpty(3) === false && isEmpty(4) === false && isEmpty(5) === false && isEmpty(6) === false && isEmpty(7) === false && isEmpty(8) === false && isEmpty(9) === false) {
      alert("It's a Tie!!");
      restart();
      break;
    }
 
  }
}

if (playerTurn) {
  $(".square").click(function() {
    var squareId = $(this).attr("id");
    if (isEmpty(squareId)) {
      $(this).html(playerLetter);
      lastInput = $(this).attr("id");
    }
	winOrLose();
	if (winOrLose() === true) {
		return 0;
	}
    enemyGuess();
    winOrLose();
  });
} //Places player letter

function restart() {
  for (var i = 1; i < 10; i++) {
    var index = "#" + i;
    $(index).html(" ");
  }
}

$("#restart").click(function() {
  restart();
});