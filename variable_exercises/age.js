/*
Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.
*/

let rlSync = require('readline-sync');
let age = Number(rlSync.question('Enter your age '));
console.log(`You are ${age} years old`);
console.log(`In 10 years, you will be ${10 + age} years old.`);
console.log(`In 20 years, you will be ${20 + age} years old.`);
console.log(`In 30 years, you will be ${30 + age} years old.`);
console.log(`In 40 years, you will be ${40 + age} years old.`);