/*
Given an nested object obj which can have any type of value, deep flatten it and return the new object in Javascript.

Input:
{
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
       L: 56
    },
    Q: [1, 2]
   }   
}

Output:
{
  "A": "12"
  "B": 23,
  "C.O.L": 56,
  "C.P": 23,
  "C.Q.0": 1,
  "C.Q.1": 2,
}
*/

SOLUTION:

return function deepFlatten(obj,dot='') {
   let outObj={};
  for(let nest in obj){
  	if(typeof obj[nest] === 'object'){
      let result=deepFlatten(obj[nest],dot+nest+'.');
      outObj={...outObj,...result}
    }
    else{
      outObj[dot+nest]=obj[nest]
    }
  }
  return outObj; 
  
};
