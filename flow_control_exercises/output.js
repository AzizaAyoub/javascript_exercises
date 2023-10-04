// What values do the following expressions evaluate to?

false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // 3
true && (1 + 2); // true
false && (1 + 2); // false
(1 + 2) && true; // 3
(32 * 4) >= 129; // false
false !== !true; // true
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // false