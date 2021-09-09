import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Asraful",
        email: "mxasraful@outlook.com",
        password: bcrypt.hashSync("12356", 10),
        isAdmin: true, 
    },
    {
        name: "Joy",
        email: "joy@gmail.com",
        password: bcrypt.hashSync("12356", 10),
    }
]

export default users