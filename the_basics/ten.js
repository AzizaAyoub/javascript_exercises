// What value does the following expression evaluate to?

'foo' === 'Foo'

// It evaluates as false since case matters when comparing strings.

// What value does the following expression evaluate to?

parseInt('3.1415')

// It evaluates to 3. parseInt converts strings that begin with a digit to their numeric equivalent. 
// If it encounters a non-digit such as ., it stops converting. 
// Thus, this example converts the 3 at the beginning of the string but ignores everything else.


// What value does the following expression evaluate to?

'12' < '9'

/* 
This question is a bit tricky: the expression evaluates as true since the operands are strings, not numbers. When you compare two strings, JavaScript performs a character-by-character comparison going from left to right, so on the first comparison, it determines that '1' < '9', so '12' must be less than '9'.'
Had you used numbers instead, the expression would evaluate as false.
*/


