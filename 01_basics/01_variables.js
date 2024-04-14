const accountId = 20303980292
let accountEmail = "uday@kodnest.com"
 accountPassword = "12345"
 accountCity = "Bangalore"

 /*
 prefer not to use var 
 because of issue in block scope and functional scope
 */
 let accountState;
// console.log(accountId);
accountEmail = "mishrauday138@gmail.com"
accountPassword = "Uday@123"
accountCity = "Mumbai"
console.table([accountEmail, accountCity, accountPassword, accountState]);