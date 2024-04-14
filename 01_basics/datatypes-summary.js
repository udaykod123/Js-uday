/*
primitive datatype
7 : type
1. String, 2. Number, 3. Boolean, 4. null, 5. undefined, 6. Symbol, 7. bigInt

Non primitive or referance type
1. Array, Objects, Functions
*/
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

// Arrays
const heros = ["virat", "rohit", "sachin"]

// objects 
let myObj = {
    name: "uday",
    age: 26,
    role: "dev"

}

// Function
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof scoreValue);

/*
the type of operator
11.4.3 The typeof Operator

The production Uary typeat Dayxevaluated as follows

1. Let not be the mosult of evaluating Unary Exponim

Lat of be GetValue(

) 3. Return a Soring determined by Typefoul) according to Table 20.

is true, retum "undefined".

Table 20-typand Operator Results
 
Type of val                         Result

Undefined                           "undefined"
Null                                "object"
Boolean                             "boolean"
Number                              "number"
String                              "string"

object Inative and                  "object"
does not implement Call

Object (native or                   "function"
host and does implement Cail)



*/