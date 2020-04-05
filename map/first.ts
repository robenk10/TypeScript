class department{
    id:number;
    dname:string;
    listofstudent:number;
   

    constructor(id:number,dname:string,listofstudent:number){
     this.id=id;
     this.dname=dname;
     this.listofstudent=listofstudent;
    }

  

}

let mymap =new Map<number,department>();
mymap.set(1,new department(1,"cse",45));
mymap.set(2,new department(2,"civil",40));
mymap.set(3,new department(3,"it",45));
mymap.set(4,new department(4,"mec",60));

for(let [key,value] of mymap.entries()){
    if(value.listofstudent>50){
  console.log(key+"   "+value.id+" "+value.dname+" "+value.listofstudent)
    }
}
let cha: [string, number];  
 cha =["ron",true];
 for(let ah of cha){
   console.log(ah.valueOf());
 }