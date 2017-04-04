var fs = require('fs');

fs.readFile("best_things_ever.txt", "utf8", function(error, data) {

  // We will then print the contents of data
  //console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  //console.log(dataArr);
  for(var i=0;i<dataArr.length;i++){
    console.log(dataArr[i].trim());
  }

});