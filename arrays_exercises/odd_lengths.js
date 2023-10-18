// Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

let array = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(array)); // => [1, 5, 3]

// Note that it is possible to solve this problem without using map. However, our intent is to show how you can combine multiple functions to achieve a desired result.

function oddLengths(strings) {
    let lengths = strings.map((letters) => letters.length);
    let oddLengths = lengths.filter((number) => number % 2 === 1);
    return oddLengths;
  }
  
  let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
  console.log(oddLengths(arr));
  