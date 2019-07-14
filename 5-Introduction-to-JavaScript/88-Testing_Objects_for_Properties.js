// Object.hasOwnProperty() checks if an object has the provided property or not. .hasOwnProperty() uses boolean logic. Here an if statement is used to check if the property exists and if it does, return that object. Otherwise, return the string "Not Found".

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  else {
      return "Not Found"
  }
}

// Test your code by modifying these values
checkObj("gift");
