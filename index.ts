#! /usr/bin/env node
import inquirer from "inquirer";

const guessingNumber = Math.floor(Math.random() * 10 +1);
const result = await inquirer.prompt([
    {
        type: "number",
        name: "guessNumber",
        message: "Guess a number between 1 to 10",
       
    },

]);

// Conditional Instructions

if (result.guessNumber === guessingNumber) {
    console.log("Congrats! You got it!");
} else if (result.guessNumber < guessingNumber) {
    console.log("Your guess is too low");
} else if (result.guessNumber > guessingNumber) {
    console.log("Your guess is too high");
}