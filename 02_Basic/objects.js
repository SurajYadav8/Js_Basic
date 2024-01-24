// singleton

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Suraj",
    [mySym]:"mykey1",
    age: 21,
    location: "Delhi",
    email: "suraj@google.com",
    isloggedIn: false,
    lastloginDays: ["Mon","Sat"]

}

//  console.log(JsUser.email);
//  console.log(JsUser["email"]);
//  console.log(JsUser[mySym]);

 JsUser.email = "Suraj@yahoo.com"
//  Object.freeze(JsUser)
//  console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());