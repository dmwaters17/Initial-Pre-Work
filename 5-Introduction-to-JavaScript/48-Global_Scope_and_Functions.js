// Variables have a scope that can be contained to a function or be visible to all the code. The default setting for var is global, meaning it is totally visible. This may not be desired.

// Declare your variable here
var myGlobal = (10);

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = (5);
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
