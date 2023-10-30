//scope 

let a = 10;
var b = 20;
const c = 30;

if(true){

    let a = 100;
    var b = 200;
    const c =300;
    // console.log(a);
}

// console.log(a)
// console.log(b)
// console.log(c)

// annonymus function

const one  = function (){
    console.log('this is anyonymus function here');
}
one();// if we stere a function in a variavle then it is called anonymus function

// arraow function

const two = () => {

    console.log('this is arraow function')
}

two();

const three = (name) => { // we can pass parameter in arraow function as well

    console.log(`${name} welcome to arrow function`)
}

three('rakesh');

// imemiadtly invoked function 

//  ()() this is the syntex of immidate invoked function

(function(){
    console.log('this invoked function')
})();

(()=>{
    console.log('this invoked function with arrow function')
})();

((name)=>{
    console.log(`${name} this invoked function with arrow function`)
})('rakesh');

// this function is generaly used for database connections
