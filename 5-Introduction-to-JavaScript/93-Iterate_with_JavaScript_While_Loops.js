// The while loop runs when the condition is true and stops when it is false. In this code, a blank array is made, and a variable is set to 0, it is then pushed to the array every time the condition i < 5 is met, it then increments 1. Therefore, 0 , 1, 2, 3, 4 is pushed until the incrementation hits a value of 5, thus making the condition false.

// Setup
var myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
// Only change code below this line.
