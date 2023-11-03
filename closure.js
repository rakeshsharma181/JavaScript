function outer() {
    let name = 'rakesh';
    function inner() {
        console.log(name);
    }
    return inner;
}
let myFunction = outer();// this is closure  calling
myFunction();