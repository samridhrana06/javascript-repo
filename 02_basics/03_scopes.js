// // var c = 300

// let a = 300
// if(true)
// {
//     let a = 10
//     const b = 20
//     // var c = 30
//     console.log("Inner: ",a);
// }

// console.log("outside: ",a);
// // console.log(b);
// // console.log(c);

// nested scope

function one() {
  const userName = "Samridh";

  function two() {
    const website = "Youtube";
    console.log(userName);
  }
//   console.log(website);

  two();

}

// one();


if(true){
    const username = "samridh"
    if(username === "samridh"){
        const website = " Youtube"
        // console.log(username+website);
    }
    // console.log(website)
}
// console.log(username);


///   -------------------------- Intresting ---------------------

// function addone(num){
// return num+1
// }

// addone(5)

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))