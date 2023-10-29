/*
Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the code has not been executed). Don't panic if you miss a few items - this exercise is more challenging than it looks.
*/

function hello(greeting, name) {
    return greeting + ' ' + name;
  }
  
  function xyzzy() {
    return { a: 1, b: 2, c: [3, 4, 5], d: {} };
  }
  
  const howdy = hello('Hi', 'Grace');
  let foo = xyzzy();


// Variables: hello, xyzzy, greeting, name, howdy, and foo. Remember that function names and parameters are variables. In addition, constants created with const are variables that can't be reassigned. Property names in an object are not variables.

// Property Names: a, b, c, d. It's also worth noting that array indexes are property names, so 0, 1, and 2 are property names for the [3, 4, 5] array. (Don't worry if you missed the array indexes as property names.)

// Primitive values: ' ', 1, 2, 3, 4, 5, 'Hi', and 'Grace' are the most obvious primitive values. It's worth noting that object property names are usually strings, and strings are primitive values. Thus, we should also include 'a', 'b', 'c', and 'd' in the list and 0, 1, and 2 for the array indexes of [3, 4, 5].

// Objects: The functions hello and xyzzy are both objects, as are the following:

{ a: 1, b: 2, c: [3, 4, 5], d: {} }
[3, 4, 5]
