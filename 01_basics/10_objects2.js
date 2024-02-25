// singleton 

// const tinderuser = new Object();

const tinderuser = {}

tinderuser.id="123abc"
tinderuser.name="sam"
tinderuser.isloggedin=false

// console.log(tinderuser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            fisrtname: "Samridh",
            lastname: "Rana"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fisrtname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}


// const obj3 = {obj1,obj2}

// console.log(obj3)   
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}

console.log(obj3)


const user = [
    {
        id:1,
        email:"sam@email.com"
    },
    {
        id:2,
        email:"new@mail.com"
    }
]

// console.log(user[1].email)


console.log(Object.keys(tinderuser))

console.log(Object.values(tinderuser))

console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('isloggedin'));

