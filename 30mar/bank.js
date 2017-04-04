var fs = require('fs');
var deposit = 0;
var total = 0;
var withdraw = 0;
var act = process.argv[2];
var val = process.argv[3];

switch(act) {
    case "total":
    total();
    break;

    case "deposit":
    deposit();
    break;

    case "withdraw":
    withdraw();
    break;

    case "lotto":
    lotto();
    break;
}
//for total:
function total(){
fs.readFile("bank.txt", "utf8", function(error, data) {
  var dataArr = data.split(",");
  //console.log(dataArr);
  for(var i=0;i<dataArr.length;i++){
    total +=parseFloat(dataArr[i]);
  }
  console.log(total);
});
}
//for deposit:
function deposit(){
    if(val == ""){
        val = 0;
    }else {
        fs.writeFile("bank.txt",parseFloat(val),"utf8",function(err){
            if(err){
                return console.log(err);
            }
        });
    }
}
