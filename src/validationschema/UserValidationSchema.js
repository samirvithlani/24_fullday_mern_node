const zod = require("zod")

const userValidationSchema = zod.object({
    name:zod.string().min(3,"min 3 char").max(20,"max 20 char"),
    email:zod.string().email(),
    age:zod.number().min(18,"min 18 year").max(100,"max 100 year"),
    hobbiess:zod.array(zod.string()),
    bloodGroup:zod.enum(["A+","B+","A-","B-"])
})
module.exports = userValidationSchema