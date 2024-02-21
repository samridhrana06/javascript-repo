const accountId = 144553
let accountEmail = "demomain@accountEmail.com"
var accountPassword = "1234"
accountCity = "Dehradun"
let accountState;

// not allowed
// accountId = 2
accountEmail = "newmail.com"
accountPassword="334411"
accountCity = "Chandigarh"

//  console.log(accountId)


/*
prefer not to use Var 
beacuse of issuse in block scope and functional scope
*/
 console.table([accountId,accountEmail,accountPassword,accountCity,accountState])