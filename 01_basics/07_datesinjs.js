// Dates

let myDate = new Date();

// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())

// console.log(typeof(myDate))



// let mycreatedDate = new Date(2024,1,7);
// console.log(mycreatedDate.toDateString())

// let mycreatedDate = new Date(2024,1,7,5,3);
// console.log(mycreatedDate.toLocaleString())

let mycreatedDate = new Date("01-14-2024");
// console.log(mycreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(mycreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`)

newDate.toLocaleDateString('default', {
    weekday: "long",
    timeZone: ""
})





