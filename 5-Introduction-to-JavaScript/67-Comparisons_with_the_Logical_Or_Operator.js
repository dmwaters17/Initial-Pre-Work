// If either of two comparisons need to be satisfied the logical or operator can be used. It will return true if either operand is satisfied.


function testLogicalOr(val) {
  // Only change code below this line

 if ( val < 10 || val > 20 ) {
    return "Outside";
}
  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
