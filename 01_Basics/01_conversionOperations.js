//CASE 1
let score = "33abc"

console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // output:NaN -->NOT A NUMBER

//CASE 2
let score1 = null

console.log(typeof score1) // output:Object
console.log(score1) // output:null
console.log(Number(score1)) // output:0

//CASE 3
let score2 = undefined

console.log(typeof score2) // output:undefined
console.log(score2) // output:undefined
console.log(Number(score2)) // output:NaN

//CASE 4
let score3 = "Hema Hulagur"

console.log(typeof score3) // output:string
console.log(score3) // output:Hema Hulagur
console.log(Number(score3)) // output:NaN

//CASE 5
let score4 = true

console.log(typeof score4) // output:boolean
console.log(score4) // output:true
console.log(Number(score4)) // output:NaN

/* 
Conversion of anything to Number
"33" => 33
"33abc" => NaN
true => 1 ; false => 0
*/

//CASE 6
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //output:true

let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)//output:false

let isLoggedIn2 = "Hema Hulagur"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)//output:true

// 1 => true; 0 => false
// "" => false
// "Hema Hulagur" => true

//CASE 7
let age = 23
let age1 = String(age)
console.log(age1) //output:23
console.log(typeof(age1)) //output:string
