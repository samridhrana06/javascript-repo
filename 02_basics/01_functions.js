function sayMyname() {
  console.log("s");
  console.log("a");
  console.log("m");
}

// sayMyname()  // for execute we use ()

// function addTwonumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwonumbers(number1, number2) {
    // let result = number1+number2
    return number1+number2

  }
const result = addTwonumbers(3,5)

// console.log("result: ",result);

function loginUserMessage(userName="sam"){
    if(userName === undefined){
        console.log("Please Enter a user name");
    return
    }
return `${userName} just logged in`
    
}

// loginUserMessage("samridh")
console.log(loginUserMessage());

