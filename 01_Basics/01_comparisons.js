//Comparison Operators returns boolean values i.e, true/false
//< , > , <= , >= , != , == , === These are the comparison operators

console.log(2 > 1)
console.log(4 < 3)
console.log(5 <= 4)
console.log(9 >= 6)
console.log(6 != 4)
console.log(4 == 4)

//Differnece between == and ===
/*
== is a comparison operator that compares two values but not their type.
=== is a comparison operator that compares two values along with their type.
*/

console.log("2" > 1) //output:True -->Becasuse js converts the "2" into 2 and performs the comparison
console.log("02" == 2) //output:True 

console.log("2" == 2) //output:true
console.log("2" === 2) //output:false

//Avoid such comparisons and only prioritize the clean code.
console.log(null < 0) //output:false
console.log(null == 0) //output:false
console.log(null >= 0) //output:true

console.log(undefined < 0) //output:false
console.log(undefined == 0) //output:false
console.log(undefined >= 0) //output:false


