// When there are multiple options possible the switch statement can be used. A switch statement is comprised of a number of case statements which represent each option. The case statements will return should the input value match the case. Switch requires a strict equality and will execute until a break is encountered.

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return"gamma";
      break;
    case 4:
      return "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
