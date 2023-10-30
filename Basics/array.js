const arr = [1,2,3,4];
// console.log(arr);
const arr1 = new Array(1,2,3,4);// another way fro declaring an array
// console.log(arr1);
// array functions

// console.log(arr.join(" "));
// push , pop, unshift, shift,slice,splice,includes,indexof

const a = arr.slice(1,3);// it will not include last index and no chnage in original array
// console.log(a);
const b = arr.splice(1,3);//it includes last index and chnage in original array also
// console.log(b);
// console.log(arr);//changed original array

const myArr1 = ['rakesh','kumar','sharma'];
const myArr2 = ['neha','kumari','sharma'];

// myArr1.push(myArr2);

console.log(myArr1);

// concat

const newArr = myArr1.concat(myArr2);
console.log(newArr);

// spread operator

const newSpreadArr = [...myArr1,...myArr2];
console.log(newSpreadArr);

console.log(Array.isArray(myArr1))

console.log(Array.from('rakesh'))