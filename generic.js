/*function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>( 100 );
console.log(output1);
console.log(output2);



//null and undefind
var ch=null;
console.log( ch);   //output: null
console.log( typeof(ch) );   //output: object


//inference

//var x = "JavaTpoint";
//var y = 501;
 // x=y; gives error bcoz x type are string.....


 function sum(x:number , y:number)
{
    return x + y;
}
let Addition: number = sum(10,20); // Correct
//let str: string = sum(10,20); // Compiler Error



//Assertion ....................
let code= 111;
let employeeCode =<number> code;*/
// example of for of and for in ......................
var i;
var arr1 = ["JavaTpoint", "2300", "Java", "Abhishek"];
for (i in arr1) {
    console.log(i);
}
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    i = arr1_1[_i];
    console.log(i);
}
