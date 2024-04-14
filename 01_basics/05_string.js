const name = "uday"
const repoCount = 5

//console.log(name + repoCount + "Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = String("udayam-dev")

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 2)
console.log(newString);

const anotherString = gameName.slice(1, 2);
console.log(anotherString);

const newStringOne = "     uday.  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://app.kodnest.in/login"
console.log(url.replace('login', 'student-webapp/home'));
