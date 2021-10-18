"use strict";
const prompt = require("prompt-sync")();
let {playerOneBoard, playerOneDestroyer, playerOneSub, playerOneBattleship1, playerOneBattleship2, playerOneCarrier} = require("./player1");
let {playerTwoBoard, playerTwoDestroyer, playerTwoSub, playerTwoBattleship1, playerTwoBattleship2, playerTwoCarrier} = require("./player2");

console.log("testing");
console.log(playerTwoBattleship1);

//for displaying fullboard
function printPlayersBoard(playerBoardArray){
    for(let i = 0; i < playerBoardArray.length; i++){
        console.log(playerBoardArray[i].toString());
    }
}

printPlayersBoard(playerTwoBoard);



