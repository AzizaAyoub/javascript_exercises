// We can use a tree-like structure to understand the mechanics of the Fibonacci program.
function fibonacci(number) {
    if (number < 2) return number; // 0 if number is 0, 1 if number is 1
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
  
  console.log(fibonacci(6));  // => 8
  console.log(fibonacci(20)); // => 6765

/*
Each time the fibonacci function runs, it recursively invokes itself twice, once with a number 1 less than the current number, and once with a number 2 less than the current number.
*/

function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320