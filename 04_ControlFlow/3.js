// for of loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5,6,7]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps 
 
const map = new Map()
map.set('IN', "India")
map.set('UK',"United Kingdom")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-',value);
}

const object = {
    Game : 'GTA',
    Game2: 'RJD'
}

for (const key in object) {
//    console.log(`${key} shortcut is for ${object[key]}`);
}

const Language = ["Js","cpp","py","sol","rb","java"]

for (const key in Language) {
//   console.log(Language[key]);
}


const coding = ["js","cpp","sol","py"]

coding.forEach( function (item) {
//   console.log(item);  
})

coding.forEach( (item) => {
    // console.log(item);
})


function printme(item){
    // console.log(item);
}

coding.forEach(printme)

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
})

const mycode = [ 
    {
        LanguageName: "C++",
        LanguageFileName: "cpp"
    },
    {
        LanguageName: "Solidity",
        LanguageFileName: "sol"
    },
    {
        LanguageName: "JavaScript",
        LanguageFileName: "js"
    },
]

mycode.forEach( (item) => {
     console.log(item.LanguageName);
})
