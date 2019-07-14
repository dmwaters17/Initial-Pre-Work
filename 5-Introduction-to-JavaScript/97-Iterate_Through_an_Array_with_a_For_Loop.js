// For loops can iterate through arrays, by creating a variable and setting the value to 0, then running a for loop where the variable is += to the array, for the length of that array.

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
   total += myArr[i];
}


// Only change code below this line
