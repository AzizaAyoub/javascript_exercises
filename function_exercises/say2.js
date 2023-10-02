// log the below words to the console

console.log('Hello');
console.log('Hi!');
console.log('How do you do?');
console.log('quite all right');


// let's create a function

/*
As mentioned earlier, one benefit that functions give us is the ability to make changes in one location. Suppose we want to add a ==> to the beginning of every line that say outputs.
*/

function say2(text) {
    console.log('==> ' + text);
}

say2('Hello');
say2('Hi!');
say2('How do you do?');
say2('quite all right');