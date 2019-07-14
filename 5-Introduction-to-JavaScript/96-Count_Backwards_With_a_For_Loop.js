// Counting backwards in for loops is accomplished by decrementing in the final-expression.

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];
for (var i=9; i > 0; i-=2) {
  myArray.push(i);
}
// Only change code below this line.
