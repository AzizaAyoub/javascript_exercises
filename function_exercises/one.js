// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
    let bar = 2;
}
foo();
console.log(bar);

/*
The code logs 1 to the console. foo doesn't affect the value assigned to bar on line 3 since JavaScript functions create an inner scope.
*/