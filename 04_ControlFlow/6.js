// reduce method 
const Nums = [1,2,3]

const myTotal = Nums.reduce(function (acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0)

console.log(myTotal);

const myttl = mynm.reducer( (acc, curr) => acc+curr,0)
console.log(myttl);