// Let's write a program that iterates over the names in an array of names and creates a new array with the names in uppercase:

let names = ['rahman', 'aman', 'rahmat', 'ismat'];

let upperNames = [];
let index = 0;

while (index < names.length) {
    let upperCaseNames = names[index].toUpperCase();
    upperNames.push(upperCaseNames);
    index += 1;
}
console.log(upperNames);