// # Primative -> makes copy
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.

// const id = Symbol('123')
// const anotherid = Symbol('123')

// console.log(id === anotherid)

// const bigNumber = 129841874n =>Big Int

// Javascript is Dynamically assigned

// # Reference type (They do not make copyes)
// Array, Object, Functions
const heros = ["Shaktiman","nagraj","doga"]
let myObj = {
    name:"samridh",
    age: 21,
}

const myfunction = function(){
console.log("Hello")
}

console.log(typeof(heros))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions