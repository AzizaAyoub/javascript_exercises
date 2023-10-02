// Here's a function defined with 2 parameters and invoked with 2 arguments:

function add(left, right) {  // left & right are parameters here
    let sum = left + right;  // left & right are arguments here
    return sum;
}
let oldSum = add(10, 20);  // 10 and 20 are arguments
console.log(oldSum); 

secondSum = add(6, 3, 5); // 5 is ignored; prints 9
console.log(secondSum);

let newSum = add(3);  // second argument missing; prints NaN
console.log(newSum)
// 3 + undefined is NaN