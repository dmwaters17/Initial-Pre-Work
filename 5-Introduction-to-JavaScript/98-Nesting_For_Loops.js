// This function contains two for loops, the first to loop through the first array, the second to start looping through the nested arrays. It will run through each nested array and multiply each number to form a product.  

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line

  for(var i=0; i < arr.length; i++){
    for (var j=0; j < arr[i].length; j++){
      product = product * arr[i][j];
    }
  }

// Modify values below to test your code
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
