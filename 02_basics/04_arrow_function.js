const user = {
    userName : "samridh",
    price : 999,

    Welcome : function(){
        console.log(`${this.userName}, welcome to website`);
        // console.log(this);
    }

}

// user.Welcome()
// user.userName = "sam"
// user.Welcome()

// console.log(this)

// function coffee(){
//     let useraname = "samridh"
//     console.log(this.useraname)
// }
// coffee()


// const chai = function(){

//     let useraname = "samridh"
//     console.log(this.useraname)
// }
// chai()


const chai = () => {

    let useraname = "samridh"
    console.log(this)
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(1,4));


//implicit
// const addTwo=(num1,num2)=> num1+num2


// const addTwo=(num1,num2)=> (num1+num2)

const addTwo=()=> ({useraname: "samridh"})


// console.log(addTwo());


// const myArray = [2,3,4,5]
// myArray.forEach()

