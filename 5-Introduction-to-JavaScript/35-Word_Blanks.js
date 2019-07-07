// Strings can be arranged in a piecemeal fashion using a Madlib style and the + operator. 

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "The " + myNoun + " was not very " + myAdjective + " and " + myVerb + " not so " + myAdverb;

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
