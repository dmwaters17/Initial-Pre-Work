// Math.random function will return a decimal from 0 to not quite 1. By creating a variable of 0 and running a while loop that equals 0, the loop will run until the random result is not 0. 

function randomFraction() {

  // Only change code below this line.
var result = 0;
  while (result === 0) {
    result = Math.random();
  }
  return result;
}
  // Only change code above this line.
