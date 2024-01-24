const marvel_heros = ["thor","Hulk","Ironman"]
const dc_heros = ["Superman","Batman","Flash"]

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6,],7,[8,9,[5,6,4]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Suraj"));
// console.log(Array.from("Suraj"));
// console.log(Array.from({name:"Suraj"}));//interesting case (gives[])

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));