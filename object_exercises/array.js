/*
Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:
*/

let myArray = {
    0: 'Ahmad',
    1: 'Dubi',
    2: 'Meatball',
    length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}