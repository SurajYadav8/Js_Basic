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
 

// ++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive)

let myName = "Suraj"

let anothername = myName
anothername = "chaiaurcode"

console.log(myName);
console.log(anothername);

let user ={
    email: "user@gmail.com",
    upi: "@user02",
}

let user1 = user

user1.email = "suraj@google.com"

console.log(user.email);
console.log(user1.email);