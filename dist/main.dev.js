"use strict";

//Getting player Names
var x,
    y = "";

var clickEvent = function clickEvent() {
  x = document.getElementById("firstname").value;
  y = document.getElementById("secondname").value;
  document.querySelector(".js-button-1").innerHTML = x;
  document.querySelector(".js-button-2").innerHTML = y; // alert(x);

  console.log(x);
  console.log(y);
}; //https://teamtreehouse.com/community/how-does-mathfloormathrandom-6-1-work -> dice logic


var SnakeAndLadderBoard = function () {
  function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
  }

  var playerOneScore = 0;
  var playerTwoScore = 0; //Dice throw and image display

  var diceImage1 = '<img src="./dice1.png" id="imagesize">';
  var diceImage2 = '<img src="./dice2.png" id="imagesize">';
  var diceImage3 = '<img src="./dice3.png" id="imagesize">';
  var diceImage4 = '<img src="./dice4.png" id="imagesize">';
  var diceImage5 = '<img src="./dice5.png" id="imagesize">';
  var diceImage6 = '<img src="./dice6.png" id="imagesize">';
  var diceImage = "";

  var getDiceImage = function getDiceImage(number) {
    console.log(number);

    switch (number) {
      case 1:
        diceImage = '<img src="./dice1.png" id="imagesize">';
        break;

      case 2:
        diceImage = '<img src="./dice2.png" id="imagesize">';
        break;

      case 3:
        diceImage = '<img src="./dice3.png" id="imagesize">';
        break;

      case 4:
        diceImage = '<img src="./dice4.png" id="imagesize">';
        break;

      case 5:
        diceImage = '<img src="./dice5.png" id="imagesize">';
        break;

      case 6:
        diceImage = '<img src="./dice6.png" id="imagesize">';
        break;
    }

    console.log(diceImage);
    return diceImage;
  };

  var checkScoreGreaterThan100 = function checkScoreGreaterThan100(score, number) {
    if (score + number > 100) {
      score;
    } else {
      score = score + number;
    }

    return score;
  };

  var getScoreOnSnakeAndLadder = function getScoreOnSnakeAndLadder(score) {
    switch (score) {
      //Begin ladder climb
      case 1:
        score = 23;
        break;

      case 5:
        score = 14;
        break;

      case 21:
        score = 42;
        break;

      case 29:
        score = 85;
        break;

      case 36:
        score = 58;
        break;

      case 49:
        score = 67;
        break;

      case 71:
        score = 92;
        break;

      case 82:
        score = 100;
        break;
      // End of ladder climb
      //Begin snake gobbling

      case 15:
        score = 2;
        break;

      case 26:
        score = 8;
        break;

      case 31:
        score = 28;
        break;

      case 39:
        score = 19;
        break;

      case 64:
        score = 59;
        break;

      case 73:
        score = 17;
        break;

      case 93:
        score = 72;
        break;

      case 98:
        score = 48;
        break;
      //End snake gobbling
    }

    return score;
  };

  var showActiveInactivePlayer = function showActiveInactivePlayer(active, inactive) {
    var buttonOne = document.querySelector(".js-button-1");
    var buttonTwo = document.querySelector(".js-button-2");

    if (active === 1) {
      buttonTwo.classList.add("disabled");
      buttonOne.classList.remove("disabled");
    } else {
      buttonOne.classList.add("disabled");
      buttonTwo.classList.remove("disabled");
    }
  };

  var getActivePlayer = function getActivePlayer(number, playerNumber) {
    var active = number === 6 ? playerNumber : playerNumber % 2 + 1;
    var inactive = active % 2 + 1;
    return {
      active: active,
      inactive: inactive
    };
  };

  var clearPreviousPosition = function clearPreviousPosition(score) {
    // console.log(score);
    if (score > 0) {
      var getBoardItem = ".board-item-".concat(score);
      console.log(getBoardItem);
      return document.querySelector(getBoardItem).style.setProperty("--coins-color", "transparent");
    }
  };

  var playerOne = function playerOne() {
    //Begin roll dice
    var number = rollDice(); //To clear the previous position

    clearPreviousPosition(playerOneScore); //To show player is active or inactive

    var _getActivePlayer = getActivePlayer(number, 1),
        active = _getActivePlayer.active,
        inactive = _getActivePlayer.inactive;

    showActiveInactivePlayer(active, inactive); //Display scores
    // document.querySelector(".js-dice-result").innerHTML = number + " Barnali" + document.getElementById("name").value;
    // if(number <= 6) {
    //   document.querySelector(".js-dice-result").innerHTML = "./dice1.png"
    // }

    document.querySelector(".js-dice-result").innerHTML = document.getElementById("firstname").value + "'s score = " + number + "        " + getDiceImage(number); // document.querySelector(".js-dice-result").innerHTML = number + `${document.getElementById("player-name").innerHTML}  Barnali`;

    playerOneScore = checkScoreGreaterThan100(playerOneScore, number);
    playerOneScore = getScoreOnSnakeAndLadder(playerOneScore);

    if (playerOneScore === 100) {
      alert("player 1 is winner");
    } else {
      var getNewBoardItem = ".board-item-".concat(playerOneScore);
      document.querySelector(getNewBoardItem).style.setProperty("--coins-color", "red");
    }
  };

  var playerTwo = function playerTwo() {
    //Begin roll dice
    // const number = rollDice();
    number = rollDice(); //To clear the previous position

    clearPreviousPosition(playerTwoScore); //To show player is active or inactive

    var _getActivePlayer2 = getActivePlayer(number, 2),
        active = _getActivePlayer2.active,
        inactive = _getActivePlayer2.inactive;

    showActiveInactivePlayer(active, inactive); //Display scores
    // document.querySelector(".js-dice-result").innerHTML = number + " Rit";
    // document.querySelector(".js-dice-result").innerHTML = "Rit" +"'s score = " + number  ;
    // document.querySelector(".js-button-2").innerHTML = "Rit";

    document.querySelector(".js-dice-result").innerHTML = document.getElementById("secondname").value + "'s score = " + number + "        " + getDiceImage(number); // document.querySelector(".js-button-2").innerHTML = y;

    playerTwoScore = checkScoreGreaterThan100(playerTwoScore, number);
    playerTwoScore = getScoreOnSnakeAndLadder(playerTwoScore);

    if (playerTwoScore === 100) {
      alert("player 2 is winner");
    } else {
      var getNewBoardItem = ".board-item-".concat(playerTwoScore);
      document.querySelector(getNewBoardItem).style.setProperty("--coins-color", "green");
    }
  }; // Dynamic ladder creation  + getDiceImage(number)


  var createLadder = function createLadder(ladderClass, noOfSteps) {
    var ladderNode = document.querySelector(ladderClass);

    for (i = 0; i < noOfSteps; i++) {
      var ladderSpan = document.createElement("span"); // console.log(ladderSpan);

      ladderNode.appendChild(ladderSpan);
    }
  };

  return {
    playerOne: playerOne,
    playerTwo: playerTwo,
    createLadder: createLadder
  };
}();

window.addEventListener("load", function (event) {
  SnakeAndLadderBoard.createLadder(".ladder-1", 4);
  SnakeAndLadderBoard.createLadder(".ladder-2", 7);
  SnakeAndLadderBoard.createLadder(".ladder-3", 19);
  SnakeAndLadderBoard.createLadder(".ladder-4", 7);
  SnakeAndLadderBoard.createLadder(".ladder-5", 7);
  SnakeAndLadderBoard.createLadder(".ladder-6", 7);
  SnakeAndLadderBoard.createLadder(".ladder-7", 5);
  SnakeAndLadderBoard.createLadder(".ladder-8", 6);
});