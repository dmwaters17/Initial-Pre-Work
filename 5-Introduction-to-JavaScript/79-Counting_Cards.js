// This exercise requires several different types of statements. Each card is categorized into a positive or negative cases. Each case then contains a counter of +1 or -1. The if statement at the end then evaluates the value, if it is greater than 0 that is deemed desirable and will return the string "bet", if the value is something other than greater than 0, it will return the string "Hold".

var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
   count++;
   break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;
}
      if (count > 0){
        return count + " Bet";
      } else {
        return count + " Hold";
      }

  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
