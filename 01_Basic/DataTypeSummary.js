//  Primitive

//  7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const id = Symbol('123')
const anotherId = ('123')
console.log(id == anotherId);

const bigNumber = 345698254643587712n

// Reference (Non Primitive)

// array , objects , Functions

const heros = ["Krish", "Shaktiman", "Naagraj"]
let myobj = {
    name: "Suraj",
    age: 22,
}

const myFunction = function(){
console.log("Hello World");
}

console.log(typeof bigNumber);
 