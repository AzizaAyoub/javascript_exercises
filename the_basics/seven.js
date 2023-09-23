// Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array?

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?

// No, there won't be an error. 
// When you use an index value that has no corresponding element, JavaScript returns undefined, so line 3 logs undefined to the console.


