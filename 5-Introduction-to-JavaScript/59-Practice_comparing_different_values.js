// This exercise demonstrates the difference between the equality and strict equality operators.

// Setup
function compareEquality(a, b) {
  if (10 === '10') { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
