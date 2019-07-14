// A random number within a desired range can be achieved by subtracting a minimum number from a maximum, adding one so as to not receive a 0, then subtracting the minimum so as to not exceed the maximum.

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
