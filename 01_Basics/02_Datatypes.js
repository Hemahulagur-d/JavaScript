"Use Strict" //Treat all the Javascript code as new version with new syntax

//For documentation use MDN[From Mozilla] and tc39.es[From ECMA Script]

//Datatypes in Javascript
// 1. Number
// 2. String
// 3. BigInt
// 4. Boolean
// 5. Null -->Null is the standalone value that can be used in some situations where we want to return no value but null[empty]
// 6. Undefined -->When something is not defined
// 7. Symbol

/*
Primitive and Non-Primitive datatypes
Primitive datatypes are built-in types and stores single value
Ex:Number,String,Boolean,Null,undefined,Symbol,BigInt
Non-Primitive datatypes are complex and user-defined and stores multiple values 
Ex: Arrays,Objects,Fucntions
*/

console.log(typeof null) // type = Object
console.log(typeof undefined) // type = undefined

const Id = Symbol("123"); //Makes it unique
const anotherId = Symbol("123"); //even though the values of Id is same as anotherId but the Symbol type makes it unique.

console.log(Id == anotherId) //output = false
