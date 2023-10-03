/*
Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.
*/

function evenOrOdd(number) {
    if(number % 2 === 0){
        console.log(number + ' is even');
    }else {
        console.log(number + ' is odd');
    }
}
evenOrOdd(34);
evenOrOdd(3);
evenOrOdd(4);
evenOrOdd(1);

