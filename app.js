console.log("App file loaded...");
const user = require("./user"); //export.. {}
const emp = require("./emp") //
const { studentDetail,year} = require("./student")

console.log(user);
console.log(user.userName)
console.log(user.userAge)

console.log(emp)
// emp() //works only 1 funciton exported...
emp.getEmployee()
emp.saveEmployee()

studentDetail()
console.log(year)
