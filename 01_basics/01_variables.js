const accountId = 50220
let accountEmail = "buddhadipmukherjee05@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState

//accountId = 2; accountId = 2;TypeError: Assignment to constant variable
accountEmail = "buddha"
accountPassword = "123"
accountCity = "Delhi"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);