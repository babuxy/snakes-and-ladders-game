"use strict";

// const player3Name = document.getElementById("fullName3").onclick = () =>{
// 	// var name = prompt("Enter your name");
//    document.getElementById("player3").innerHTML = fullName3;
//    console.log(fullName);
//    return fullName3;
// }
var SnakeAndLadderBoardGameGame = function () {
  function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
  }

  var playerOneScore = 0,
      playerTwoScore = 0;

  function checkScoreGreaterThan100(score, number) {
    if (score + number > 100) {
      score;
    } else {
      score = score + number;
    }

    return score;
  }

  function getScoreOnSnakeAndLadder(score) {
    switch (score) {
      case 1:
        score = 23;
        break;

      case 5:
        score = 14;
        break;

      case 21:
        score = 42;
        break;

      case 36:
        score = 58;
        break;

      case 29:
        score = 85;
        break;

      case 82:
        score = 100;
        break;

      case 71:
        score = 92;
        break;

      case 49:
        score = 67;
        break;

      case 64:
        score = 59;
        break;

      case 98:
        score = 48;
        break;

      case 31:
        score = 28;
        break;

      case 26:
        score = 8;
        break;

      case 15:
        score = 2;
        break;

      case 93:
        score = 72;
        break;

      case 73:
        score = 17;
        break;

      case 39:
        score = 19;
        break;
    }

    return score;
  } // function showActiveInactivePlayer(active, inactive) {
  //   const buttonOne = document.querySelector(".js-button-1");
  //   const buttonTwo = document.querySelector(".js-button-2");
  //   if (active === 1) {
  //     buttonTwo.classList.add("disabled");
  //     buttonOne.classList.remove("disabled");
  //   } else {
  //     buttonOne.classList.add("disabled");
  //     buttonTwo.classList.remove("disabled");
  //   }
  // }


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

  function getActivePlayer(number, playerNumber) {
    var active = number === 6 ? playerNumber : playerNumber % 2 + 1;
    var inactive = active % 2 + 1;
    return {
      active: active,
      inactive: inactive
    };
  }

  function clearPreviousPosition(score) {
    if (score > 0) {
      var getBoardItem = ".board-item-".concat(score);
      return document.querySelector(getBoardItem).style.setProperty("--coins-color", "transparent");
    }
  } // function playerOne() {
  //   //To roll the dice
  //   const number = rollDice();
  //   //To claar the previous position
  //   clearPreviousPosition(playerOneScore);
  //   //To show player is active or inactive based on dice number
  //   let { active, inactive } = getActivePlayer(number, 1);
  //   showActiveInactivePlayer(active, inactive);
  //   //To show the results on side(Need to fix this)
  //   document.querySelector(".js-dice-result").innerHTML = number + "  player 1";
  //   playerOneScore = checkScoreGreaterThan100(playerOneScore, number);
  //   playerOneScore = getScoreOnSnakeAndLadder(playerOneScore);
  //   if (playerOneScore === 100) {
  //     alert("player 1 is winner");
  //   } else {
  //     let getNewBoardItem = `.board-item-${playerOneScore}`;
  //     document
  //       .querySelector(getNewBoardItem)
  //       .style.setProperty("--coins-color", "red");
  //   }
  // }


  var playerOne = function playerOne() {
    //To roll the dice
    var number = rollDice(); //To claar the previous position

    clearPreviousPosition(playerOneScore); //To show player is active or inactive based on dice number

    var _getActivePlayer = getActivePlayer(number, 1),
        active = _getActivePlayer.active,
        inactive = _getActivePlayer.inactive;

    showActiveInactivePlayer(active, inactive); //To show the results on side(Need to fix this)

    document.querySelector(".js-dice-result").innerHTML = number + "  Barnali";
    playerOneScore = checkScoreGreaterThan100(playerOneScore, number);
    playerOneScore = getScoreOnSnakeAndLadder(playerOneScore);

    if (playerOneScore === 100) {
      alert("player 1 is winner");
    } else {
      var getNewBoardItem = ".board-item-".concat(playerOneScore);
      document.querySelector(getNewBoardItem).style.setProperty("--coins-color", "red");
    }
  };

  function playerTwo() {
    //To roll the dice
    var number = rollDice(); //To claar the previous position

    clearPreviousPosition(playerTwoScore); //To show player is active or inactive based on dice number

    var _getActivePlayer2 = getActivePlayer(number, 2),
        active = _getActivePlayer2.active,
        inactive = _getActivePlayer2.inactive;

    showActiveInactivePlayer(active, inactive); //To show the results on side(Need to fix this)

    document.querySelector(".js-dice-result").innerHTML = number + " Rit";
    playerTwoScore = checkScoreGreaterThan100(playerTwoScore, number);
    playerTwoScore = getScoreOnSnakeAndLadder(playerTwoScore);

    if (playerTwoScore === 100) {
      alert("player 2 is winner");
    } else {
      var getNewBoardItem = ".board-item-".concat(playerTwoScore);
      document.querySelector(getNewBoardItem).style.setProperty("--coins-color", "green");
    }
  }

  function createLadder(ladderClass, noOfSteps) {
    var ladderNode = document.querySelector(ladderClass);

    for (i = 0; i < noOfSteps; i++) {
      var ladderSpan = document.createElement("span");
      ladderNode.appendChild(ladderSpan);
    }
  }

  return {
    playerOne: playerOne,
    playerTwo: playerTwo,
    createLadder: createLadder
  };
}();

window.addEventListener("load", function (event) {
  SnakeAndLadderBoardGameGame.createLadder(".ladder-1", 4);
  SnakeAndLadderBoardGameGame.createLadder(".ladder-2", 7);
  SnakeAndLadderBoardGameGame.createLadder(".ladder-3", 19);
  SnakeAndLadderBoardGameGame.createLadder(".ladder-4", 7);
  SnakeAndLadderBoardGameGame.createLadder(".ladder-5", 7);
  SnakeAndLadderBoardGameGame.createLadder(".ladder-6", 7);
  SnakeAndLadderBoardGameGame.createLadder(".ladder-7", 5);
  SnakeAndLadderBoardGameGame.createLadder(".ladder-8", 6);
});