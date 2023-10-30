const obj = {
    name:"rakesh",
    email:'rk@gmail.com',
    age:23
}
console.log(obj);

// destructuring 

const {email:myName} = obj;// bu usng this no need to use obj.email
console.log(myName); 
console.log(Object.keys(obj));
console.log(Object.values(obj));

const newObj = [{
    "name":"rakesh",
    email:'rk@gmail.com',
    age:23
}]

// console.log(newObj[0]['name']);
console.log(newObj[0].name);
