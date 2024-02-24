const name = "samridh"
const repoCount = 50

// console.log(name+repoCount)

// console.log(`Hello my name is ${name} and i am in class ${repoCount}`)

const gameName = new String('samridh rana');

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('d'));
const newString = gameName.substring(0,3);
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newString1 = "   sam  "
// console.log(newString1)  does not remove white space 
// console.log(newString1.trim()) removes white space  

const url = "https://samridh.com/sam%20rana"
// console.log(url.replace('%20','-'))
console.log(gameName.split('-'))