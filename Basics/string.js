let myName = "rakesh";
let myAge = 33;
console.log(myName);

const myEmail = new String('rk@gmail.com');

console.log(myEmail);
// console.log(myName[0]);

// string concatination

console.log("my name is" + myName + "my age is" + myAge);

console.log(`my name is ${myName} my age is ${myAge}`);// this is the best way for concatinate a string using backticks

// string functions 

console.log(myEmail.charAt(1));
console.log(myEmail.indexOf('k'));
console.log(myName.toUpperCase());
console.log(myName.substring(0,4));//stat from 0 and not includ last number index
console.log(myName.slice(-5,4));
/*
diff b/w slice and substring is that slice accept negative value but substring doesnot
*/

console.log(myName.split());// this function convert a string in to an array

let string = 'rakesh kumar sharma'

console.log(string.split(" "));
