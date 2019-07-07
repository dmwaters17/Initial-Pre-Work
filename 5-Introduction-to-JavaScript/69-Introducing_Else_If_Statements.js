// If multiple conditions must be satisfied you can add any number of else if statements between if and else.

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if  (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
}
}
// Change this value to test
testElseIf(7);
