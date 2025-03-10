// Primitive and non-Primitive
// 7 types of Primitive - Number,string,Boolean,BigInt,Null,Undefined,Symbol
// Non-Primitive - Arrays,Functions,object 
// Return type for all non-primitive are object

let constaints = Symbol("123")
let containers = Symbol("123")

console.log(constaints == containers);

// Note worthy that in Symbol of values are given equal then also they are not equal

// There are two type of memory space
// 1. Staxck   2.Heap
// 1.Heap -> Primitive data types(a reference is created)
// Stack -> Non-Primitive data type(original value change)

let username = 12657;

let userid = username;
userid = 98761;

console.log(username);
console.log(userid);

let myObj = {
    userid : 123,
    email : "ansh@gmail.com"
}
let myNewObj = myObj;
myNewObj.email = "naman@gmail.com";

console.log(myObj.email);
console.log(myNewObj.email);

