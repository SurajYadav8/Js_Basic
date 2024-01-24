// const tinderuser = new object{} //singleton

const tinderuser = {}

tinderuser.id = "456Spkr"
tinderuser.name = "Prince"
tinderuser.isloggedIn = false

// console.log(tinderuser);

const regularuser = {
    email:"Random@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Random",
            lastname: "Singh"
        }
    }
}

// console.log(regularuser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1 , obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email: "P@gmail.com"
    } ,
    {
        id: 2,
        email: "Y@gmail.com"
    }
]


users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('islogged'));


