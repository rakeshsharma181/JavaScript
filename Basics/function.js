function test(num){
    return num;
}
console.log(test(123));

// rest parameter

function test1(...num){
    return num;
}

console.log(test1(1,3,4,345));// with the help of rest opeartor we can pass n numbers of parameters.
