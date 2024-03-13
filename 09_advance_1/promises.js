const promiseOne = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)

})

promiseOne.then(function(){
    console.log('Promise consumed');
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('async 2 resolved');
})


const promiseThree = new Promise(function(resolve,reject){
setTimeout(function(){
resolve({username:"sam",email:"email.com"})
},1000)
})

promiseThree.then(function(user){
console.log(user);
})

const promiseFourth = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username:"samridh",password: "123"})
        }
        else{
            reject('ERROR Something went wrong')
        }
    }, 1000);
    })

   const username = promiseFourth.then((user)=>{
console.log(user);
return user.username;
    }).then((username)=>{
        console.log(username);
    }).catch(function(error){
        console.log(error);
    }).finally(()=> console.log("the promise is resolved"));


    const promiseFive = new Promise(function(resolve,reject){
        setTimeout(() => {
            let error = true;
            if(!error){
                console.log({username:"JavaScript",password:"123"});
            }
            else{
                reject("Error: Js went wrong")
            }
        }, 1000);
    });
async function ConsumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

ConsumePromiseFive()
