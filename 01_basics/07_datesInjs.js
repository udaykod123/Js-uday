// Dates

let myDates = new Date()
// console.log(myDates);
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.toISOString());
// console.log(myDates.toJSON());
// console.log(myDates.toLocaleString());
// console.log(myDates.toLocaleTimeString());
// console.log(myDates.toTimeString());

// let createdDate = new Date(2024, 4, 23)
// console.log(createdDate.toDateString());
// let myCreatedDate = new Date(2024, 4, 23, 6, 20)
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleTimeString());
// console.log(myCreatedDate.toJSON());
// console.log(myCreatedDate.toTimeString());

let myCreatedDate = new Date("2024-04-21")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDate());









