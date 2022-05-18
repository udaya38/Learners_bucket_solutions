/*
Create a function in javascript which will take a nested object obj and a filter function filter as input and return the filtered object.

Input:
const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
    f: {
      g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filter = (s) => typeof s === "string";

Output:
{
  b: {
    c: "Hello World",
    h: "Good Night Moon",
  }
};
*/

SOLUTION:

return function deepFilter(obj, filter) {
  let outObj={};
  for(let nest in obj){
  	if(typeof obj[nest] === 'object'){
      let result=deepFilter(obj[nest],filter);
    	if(Object.keys(result).length !== 0){
        	outObj[nest]=result;
        };
    }
    else{
      if(filter(obj[nest])){
      	outObj[nest]=obj[nest];
      }
    }
  }
  return outObj;
};
