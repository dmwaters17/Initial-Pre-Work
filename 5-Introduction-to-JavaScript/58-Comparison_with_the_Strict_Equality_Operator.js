// The == operator will return true if values are the same but have different types - numbers and strings. The === operator will only return true if the value and type return true. 

// Setup
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(7);
