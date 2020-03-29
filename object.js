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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "robin",
    age: 35,
    hobbies: ["cricket", "reading"],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("admin");
}
