console.log("helloworld");
function Add(n1, n2, showresult) {
    //console.log(typeof n1)
    // if(typeof n1=="number" && typeof n2=="number"){
    var result = n1 + n2;
    if (showresult) {
        console.log(result + " " + "type is true");
    }
    return result;
    /*}
    else{
        throw new Error("Incorrect ");
        
    }*/
}
var number1 = "12";
var number2 = 15;
var printresult = true;
var result = Add(+-number1, number2, printresult);
console.log(result);
