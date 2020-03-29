

class Student{
   
      id:number;
      name:string;

      constructor(id:number,name:string){
          this.id=id;
          this.name=name;
      }

          display():void {
          console.log(this.id+"   "+this.name);
          for(let i=0; i<4; i++){
              if(i%2==0){
                  console.log(i)
              }
          }
      }

}

class robin extends Student{
    id:number;
    name:string;


    constructor(id, name ){
      super(10,"eo");
      this.id=id;
      this.name=name;
    }
    display():void{
        super.display();
   console.log("hello world")
    }

}
 var a:number;;
 var b:string;
 b=prompt("enter the name");
 
let oj=new robin(a,b);
oj.display();