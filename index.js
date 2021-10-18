"use strict";
const prompt = require("prompt-sync")();
let {playerOneBoard, playerOneDestroyer, playerOneSub, playerOneBattleship1, playerOneBattleship2, playerOneCarrier} = require("./player1");
let {playerTwoBoard, playerTwoDestroyer, playerTwoSub, playerTwoBattleship1, playerTwoBattleship2, playerTwoCarrier} = require("./player2");

console.log("testing");
console.log(playerTwoBattleship1);

//for displaying fullboard
function printPlayersBoard(playerBoardArray){
    for(let i = 0; i < playerBoardArray.length; i++){
        console.log(playerBoardArray[i].join(" "));
    }
}

console.log("Enter letter to place your Destoryer (2 blocks)")

function placeShip(row, col){
   
}

function rowSelect(){
    console.log("Enter the letter of the row.");
    let userInput = prompt();
    userInput = userInput.trim().toUpperCase();
    switch (userInput) {
        case "A":
            return 1;
        case "B":
            return 2;
        case "C":
            return 3;
        case "D":
            return 4;
        case "E":
            return 5;
        case "F":
            return 6;
        case "G":
            return 7;
        case "H":
            return 8;
        case "I":
            return 9;
        case "J":
            return 10;
        case "K":
            return 11;
        case "L":
            return 12;
        case "M":
            return 13;
        case "N":
            return 14;
        case "O":
            return 15;
        case "P":
            return 16;
        case "Q":
            return 17;
        case "R":
            return 18;
        case "S":
            return 19
        case "T":
            return 20;
        default:
            console.log("Invalid input. Try again.");
            rowSelect();
            break;
    }
}

printPlayersBoard(playerTwoBoard);
rowSelect();
console.log(playerOneDestroyer.name);


