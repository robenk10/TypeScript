let studentEntries = new Set <string | number>();  
   

//Add Values  
studentEntries.add("Dhoni");  
studentEntries.add("Peter");  
studentEntries.add("Gayle");  
studentEntries.add("Kohli");   
studentEntries.add("Dhawan");   
studentEntries.add(1);

  
//Returns Set data  
console.log(studentEntries);   
   
//Check value is present or not  
console.log(studentEntries.has("Kohli"));        
console.log(studentEntries.has(10));        
   
//It returns size of Set  
console.log(studentEntries.size);    
   
//Delete a value from set  
console.log(studentEntries.delete("Dhawan"));      
   
//Clear whole Set  
studentEntries.clear();  



if(! studentEntries.has(1)){
    studentEntries.add(1);
}
  
  
//Returns Set data after clear method.  
console.log(studentEntries);  