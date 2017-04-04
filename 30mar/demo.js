var fnum = parseFloat(process.argv[2]);
var snum = parseFloat(process.argv[3]);
if( fnum === snum && fnum % 7 == 0 && snum % 7 == 0 ){
    console.log("true");
} else {
    console.log("false");
}