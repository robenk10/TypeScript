function Add(n1:number|string, 
    n2:number|string,
    resultconversion:'as-number' | 'as-text'
    ){
    let res;
    if(typeof n1 === 'number' &&  typeof n2==='number' ||  resultconversion ==='as-number'){
    res = +n1 + +n2;
    }
    else{
     res=n1.toString() + n2.toString();
    }  
    return res;
}
const result = Add(2, 5 ,'as-number');  
console.log(result);

const res=Add("robin","kedari", 'as-text');
console.log(res)