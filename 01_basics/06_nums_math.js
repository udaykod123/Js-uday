const score = 400
console.log(score);
let balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.80976
console.log(otherNumber.toPrecision(4));
const hunderds = 1000000
console.log(hunderds.toLocaleString('en-In'));

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.round(4.6));

console.log(Math.min(2, 4, 6, 8));
console.log(Math.max(2, 4, 6, 8));
console.log(Math.random())
console.log((Math.random()*10) + 1);
 const min = 10
 const max = 20

 console.log(Math.floor(Math.random()* (max - min + 1)) + min)