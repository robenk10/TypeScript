console.log("helloworld");

function Add(n1:number, n2:number ,showresult:boolean){
    //console.log(typeof n1)
   // if(typeof n1=="number" && typeof n2=="number"){
   const result=n1+n2;
   if(showresult){
       console.log(result +" " + "type is true")
   }
  return result;
    /*}
    else{
        throw new Error("Incorrect ");
        
    }*/
}

const number1="12";
const number2=15;
const printresult=true;

const result=Add(+-number1,number2,printresult);
console.log(result);