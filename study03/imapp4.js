var text = "";
var i = 1;
do {
    text = "The number is " + i;
    i++;
    var ii = 1
    while(ii < 10) {
        console.log(i, ii, text)
        ii++
    }
}
while (i < 10);