const myArr = [0,1,2,3,4,5]  //resizable, contain mix Datatypes
//shallow copy of array

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[0]);

//Array Methods 

// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)

// console.log(myArr);
//myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);
/* slice and splice are two different function which are used with 
arrays where slice only shows the elements of given range and not 
include last range , on the otherhand splice delete the elements 
from real array*/ 
const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);

