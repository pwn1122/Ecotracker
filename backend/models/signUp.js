// const mongoose = require('mongoose')

// const userSchema = mongoose.Schema({
//     username:{
//         type: String,
//         required : true
//     },
//     email:{
//         type: String,
//         required :[ true , 'email is required'] ,
//         unique: [true , 'This Email is already Registered']
//     },
//     password:{
//         type: String,
//         required :[true , 'Password is required'] 
//     }
// })

// module.exports = mongoose.model('user', userSchema)

const mongoose =  require('mongoose')
const schema =  mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phoneNumber : {
        type : Number,
        required : true,
        unique : true 
    },
    password :  {
    type : String , 
    require : true
    }
})
module.exports = mongoose.model('user', schema)