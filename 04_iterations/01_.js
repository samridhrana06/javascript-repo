// for loop 
// for (let i = 0; i <= 10; i++) {
 
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number");
//     }
//     console.log(element);

// }

// console.log(element); // will not work here due to scope


// for (let i = 0; i < 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <10 ;j++) {
//     console.log(`Inner loop value: ${j}`);
//     }
    
// }

// let myArray = ["flash","Batman","superman"]
// // let myArray = ["flash","Batman","superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue

for (let index = 1; index <= 20; index++) {
    // const element = array[index];

    // if(index == 5) break;
    if(index == 5) continue;
    console.log(`Value of i is ${index}`);
    
}
