// If two comparisons need to be satisfied the logical and operator can be used. It will return true if both operands are satisfied.

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
}

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
