// IIfe immediately invoked function expression

(function chai(){
    //named iife
    console.log(`DB Connected`);
})();


// iife named using arrow function

( (name) => {
    console.log(`DB connected two ${name}`);
})('sam');