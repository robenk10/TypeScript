let keyval = new Map();  
  
keyval.set('1', 'abhishek');     
keyval.set(1, 'www.javatpoint.com');       
keyval.set(true, 'bool1');   
keyval.set('2', 'ajay');  
  
console.log( "Value1= " +keyval.get(1)   );   
console.log("Value2= " + keyval.get('1') );   
console.log( "Key is Present= " +keyval.has(3) );   
console.log( "Size= " +keyval.size );   
console.log( "Delete value= " +keyval.delete(1) );   
console.log(keyval.get(1));
console.log(keyval.has(1));
console.log( "New Size= " +keyval.size );  