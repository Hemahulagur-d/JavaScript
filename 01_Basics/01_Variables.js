const accountId = 14567
let accountEmail = "hema@gmail.com"
var accountPassword = "1364"
accountCity = "Jaipur"
let accountStatus; // stored undefined

//Investigation 
//accountId = 23456-->You cannot re-declare or update the const variable
accountEmail = "hima@sgmail.com"
accountPassword = "4t567"
accountCity = "Bengaluru"

console.table([accountEmail,accountPassword,accountCity,accountStatus])

/*
Never use the var, because of the issue with block scope and functional scope it follows global scope means can be used anywhere therefore it is not a good practice
Use let for variables 
Use const for Constants
*/