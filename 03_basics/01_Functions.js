// function myName(){
//     console.log("uday");
//     console.log("KodNest");
//     console.log("ELearningProvider");
//     console.log("blr");
//     console.log("productBaseDev");
    
// }
// myName()
//--------------------------------------------------------------------------------------->
// function addThreeNumbers(number1, number2, number3){
// console.log(number1  + number2 + number3);
// }
// addThreeNumbers(4,10,34)

function addThreeNumbers(number1, number2, number3){

    // let result = number1 + number2 + number3
    // return result
   //-------------------------------------------------------------------------------------> 
      return number1 + number2 + number3
    }

   const result = addThreeNumbers(4,10,34)
   console.log("Result :",result)

   //-------------------------------------------------------------------------------------->
   function logInUserMessage(userName = "uday"){
    if(userName === undefined)
    {
        console.log("please enter a nname");
        return
    }
    return `${userName} just logged in`
   }
   console.log(logInUserMessage());