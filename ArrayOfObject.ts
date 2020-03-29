
let arr:any[] =new Array(
     {
       id:101,
       name:'robin',
       depart:{
           dname:'computer',
           company:'abc'
       }
    },
    {
        id:101,
        name:'rohan',
        depart:{
            dname:'marketing',
            company:'xyz'
        }
     },
     {
        id:101,
        name:'vishal',
        depart:{
            dname:'medicine',
            company:'yub'
        }
     },
);

for(let i=0; i<arr.length; i++){
    if(arr[i].depart.dname=='computer'){
     console.log(arr[i].depart.company)
    }
}