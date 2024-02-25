// creation of object

// singleton 
// Object.create

//object literals 

const mySym = Symbol("key1")

const jsuser = {
    name : "Samridh",
    "full name": "Samridh rana",
    age: 21,
    [mySym] : "My key1",
    location : "Chandigarh",
    email : "Samridhrana@email.com",
    isloggin : false,
    lastloginDays : ["Monday","Saturday"]
}
// console.log(jsuser.email)
// console.log(jsuser["full name"])

console.log(jsuser["mySym"])



// myArray = ["S","A","M"]

jsuser.email = "Samridh@cuchd.in"
Object.freeze(jsuser)
jsuser.email = "samridh@chatgpt"
console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello js user")
}

console.log(jsuser.greeting)