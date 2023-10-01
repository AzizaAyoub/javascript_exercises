// Let's write a program that asks for two numbers from the user, adds them, then displays the result.

let rlSync = require('readline-sync');
let number1 = Number(rlSync.question('Enter your first number\n'));
let number2 = Number(rlSync.question('Enter your second number\n'));
let sum = number1 + number2;
console.log(`The numbers ${number1} and the numbers ${number2} add to ${sum}`);