import Calsi from './app';

class operation implements Calsi{
    Add(num1,num2) {
      return num1+num2;
    }
    subtract() {
        throw new Error("Method not implemented.");
    }
    multi() {
        throw new Error("Method not implemented.");
    }
    div() {
        throw new Error("Method not implemented.");
    }
    
}

let obj:operation=new operation();
console.log(obj.Add(5,6));