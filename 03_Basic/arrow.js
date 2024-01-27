const user ={
    username: 'Suraj',
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);//this keyword is used for current context here 
        // console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "Surya"
// user.welcomeMessage()

// console.log(this);

// function yog(){
//     let username = "Surya"
//     console.log(this.username);//here undefined occurs because this keyword is used in the object
// }
// yog()

// const yog = () =>{
//     let username = "Surya"
//     console.log(this);
// }
// yog()

// () => {}//this is basic arrow function 
// const addtwo = (num1,num2) => {
//     return num1+num2
// }

// const addtwo = (num1,num2) => num1+num2 // implicit return arrow function 
// const addtwo = (num1,num2) => (num1+num2)
const addtwo = (num1,num2) => ({username:"Surya"})
console.log(addtwo(5,4));



