// Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

// Note that 83 is 3*3 + 5*5 + 7*7.

function sumOfSquares(numbers) {
    return numbers.reduce((accumulator, number) => {
      return accumulator + number * number;
    }, 0);
  }

/*
What happens if you forget to provide an initial value of 0 for the accumulator? Take a look at the MDN Documentation for reduce and see if you can determine what sumOfSquares would return if you omitted the initial accumulator value.
*/