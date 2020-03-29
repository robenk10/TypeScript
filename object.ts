/*const person:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number,string];
}={
    name:"robin",
    age:35,
    hobbies:["cricket","reading"],
    role:[2,'author']
}

let favoriteactivities:string;
favoriteactivities="cricket";
console.log(person.name)


for(const hobby of person.hobbies){
    if(hobby ==="cricket"){
    console.log(hobby);
    }
     
}

console.log(person.role);*/
enum Role{
    ADMIN,
    READ_ONLY,
    AUTHOR
};
const person={
    name:"robin",
    age:35,
    hobbies:["cricket","reading"],
    role:Role.ADMIN   
}

if(person.role===Role.ADMIN){
console.log("admin")
}