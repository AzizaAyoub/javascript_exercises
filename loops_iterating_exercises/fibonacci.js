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