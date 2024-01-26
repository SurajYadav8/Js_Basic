// function add2no(no1,no2){
//     console.log(no1+no2);
// }

// add2no(3,7)
// add2no(3,"4")
// add2no(3,"a")

function add2no(no1,no2){
    // let result = no1+no2
    // return result
    return no1+no2
}

const result = add2no(3,7)
// console.log("Result:",result);

function loginusermsz(username = "Surya"){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginusermsz("Suraj"));
// console.log(loginusermsz());

function  CalculateCartPrice(val1,val2,...num1){ //...(rest operator:uses for mul values)
    return num1
}
// console.log(CalculateCartPrice(200,400,500,2000));

const user = {
    username: "Suraj",
    price: 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user)
handleobject({
    username: "Surya",
    price:399
})

const mynewarray = [200,400,500,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(mynewarray));
console.log(returnSecondValue([200,400,600,800]));