console.log('Rakesh');

// variables 

const accountId = 123;
let emailAddress = "abc@gmail.com";
var password = 'abc@123';
console.log(accountId);

// Datatypes (premitive datatypes)(pass by value means paas the copy)->use stack memory

/*
number
string
bigint
boolean
null=> standalone value
undefind
symbol=> unique
*/

// non premitive data types(pass by refrence means paas the refrence of main variable)->use heap memory

// Array
// Object
// Function

let arr1 = [1,2,3];
let arr2 = arr1;
arr2[0] = 4;
console.log(arr1);// we have changed in arr2 but it also chnage in arr1 because it passed the refrence of arr1

let obj1 = {name:"Rakesh",email:"rk@google.com"};
let obj2 =  obj1;
obj2.name = "neha";// it will also change in obj1 because of refrence 
console.log(obj1);

let array = [1,2,3];

console.log(typeof null); // object
console.log(typeof undefined) // undefined
console.log(typeof array); // object

//operations

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 +2); //122
console.log(1 + 2 + "2"); // 32
// in these opeartion start from left to right, if at left string is first
// then it behave like a string at right side also and if number is first in left side then 
// first use numbers oprtaions and then string

