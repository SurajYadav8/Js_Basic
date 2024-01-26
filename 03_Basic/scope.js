// var c = 300
let a = 300
if (true)
{
    let a = 10
    const b = 20
    var c = 30 // dont use
    // console.log("INNER:",a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one (){
    const  username = "Suraj"

    function two (){
        const website = "Keshavam"
        // console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true) {
    const username = "Suraj"
    if(username === "Suraj"){
        const  website = " Keshavam"
        //console.log(username + website );
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++ interesting ++++++++++++++

addone(5)//runs properly

function addone(num){
    return num +1
}


addTwo(5)//Error Occurs for this function(ReferenceError: Cannot access 'addTwo' before initialization) 

const addTwo = function(num){
    return num + 2
}


