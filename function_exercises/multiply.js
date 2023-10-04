// Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

let rlSync = require('readline-sync');
let number1 = rlSync.question('Enter first number ');
let number2 = rlSync.question('Enter second number ');
let sum = number1 * number2;
console.log(`${number1} * ${number2} = ${sum}`);