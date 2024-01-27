// Immediately Invoked Function Expressions (IIFE)


(function lassi(){
    // named iffe
    console.log(`DB CONNECTED`);
})();// (first paranthesis is used for the definition of the function )(second paranthesis is used for the execution of function or function call)
// we use iffi for avoiding the global scope pollution 

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Suraj');


