// What happens when you run the following program? Why do we get that result?

{
    let foo = 'bar';
}
console.log(foo);

// The program outputs an error since foo is out of scope: the let statement creates variables with block scope.