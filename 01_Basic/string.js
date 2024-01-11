const name = "Suraj"
const repoCount = 50

console.log(name + repoCount + "Value");//old version don't use this method

//use this method to concatenate the strings 
 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Suraj-AB-com')

//position 
console.log(gameName[0]);

//type 
console.log(gameName.__proto__);

//length of string
console.log(gameName.length);

//change string in upercase 
console.log(gameName.toUpperCase());

//find character of string at any position
 console.log(gameName.charAt(5));

//find the index of charater in string
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,4)

// console.log(newString);

const anotherString = gameName.slice(-5,4) 

// console.log(anotherString);

const newStringOne = "   Suraj   "
//
console.log(newStringOne);

//remove the extra spaces
console.log(newStringOne.trim());

const url = "https://suraj.com/suraj%30Yadav"

//replace any character with another in string
console.log(url.replace('%30','-'));

//check the element in the string  
console.log(url.includes('suraj'));

//split the string on basis of some char
console.log(gameName.split('-'));

const p = /[A-Z]/

console.log(gameName.search(p));
