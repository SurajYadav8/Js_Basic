//Javascript Execution context 

//javascript is single threaded 

// 1 Global execution context 
// 2 function execution context
// 3 Eval execution context

// two phases 
// i memory execution phases
// ii execution phases
//  Example 
let val1 = 10
let val2 = 20 
 function addnum(num1,num2){
    let total = num1+num2 
    return total
 }
 let result = addnum(val1,val2)
 let result2 = addnum(9,8)

//  1 Global Execution
    //  this
// 2 Memory Phase
//    val1 - undefined
//    val2 - undefined
//    addnum - defination
//    result - undefined
//    result2 - undefined
// 3 Execuiton Phase
    // val1 - 10
    // val2 - 20
    // addnum -[new Variable environment + Execution thread]{
      // Memory Phase
        // val1 - undefined
        // val2 - undefined
        // total - undefined


     //Execution Context 
        // num1 - 8
        // num2 - 9
        // total - 17}
    // result1 - 17
    // result2 - 20
    
