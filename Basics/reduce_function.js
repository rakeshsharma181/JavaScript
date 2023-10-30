const users = [
    { firstname: "rakesh", lastName: "kumar", age: 26},
    { firstname: "neha", lastName: "kumari", age: 23},
    { firstname: "rahul", lastName: "gupta", age: 37},
    { firstname: "deepika", lastName: "padukone", age: 50}
];
const output =  users.reduce((names,curr)=>{
    if(curr.age > 30){
        names.push(curr.firstname)
    }
    return names;
},[])

console.log(output);

const one = [1,2,3,4,5];

const sum = one.reduce((acc,curr)=>{
    return acc + curr;
},0);

console.log(sum);

