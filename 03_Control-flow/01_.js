// control flow

// if
// const temp = 41
// const isUserLoggedin = true
// if(temp === 41){
// console.log("Yes");
// }
// console.log("Its temprature time");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;

// if(score >100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// const balance = 1000
// if (balance > 500) console.log("Test");

// const balance = 1000
// if (balance < 500) {
//     console.log("Less than 500");
// }
// else if(balance < 750){
// console.log("Less than 750");
// }
// else if (balance < 900) {
//     console.log("Less than 900");
// }
// else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn == true && debitCard==true) {
//     console.log("Allow to buy courses");
// }
// else
// {console.log("Not allowed");}

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("Allow");
}
else
{console.log("Not allowed");}