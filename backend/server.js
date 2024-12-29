const express = require('express');
const mongoose = require( 'mongoose');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const signUp =  require('./router/signUp')


const app =  express()
const port = 4000 ;
app.use(
    cors({
      origin:"http://localhost:5173",
      credentials: true
    })
  );
  app.use(cookieParser());
  app.use(express.json())
  
app.use("/" , signUp)  


mongoose.connect('mongodb://localhost:27017/ecotracker')
.then(()=>{
  app.listen(port , ()=>{
      console.log('server start ' + port);
  })
})
.catch(err => console.log(err))


// const app = express();

// let port = 4000; 
// app.use(express.json())
// app.use(cors())

// // mongoose.connect("mongodb://localhost:27017/ecotracker",{
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // },() => {
// //     console.log("DB Connected Successfully")
// // });


// const mongoURI = "mongodb://localhost:27017/ecotracker"

// const connectToMongo = async () => {
// try {
//     mongoose.set('strictQuery', false)
//     mongoose.connect(mongoURI) 
//     console.log('Mongo connected')
// }
// catch(error) {
//     console.log(error)
//     process.exit()
// }
// }

// module.exports = connectToMongo;

// app.post("/login" , (req , res)=>{
//     res.send("My API Login")
// })
// app.post("/register" , (req , res)=>{
//    const{username , email , password} = req.body
//      User.findOne({email:email} , (err , user) =>{
//      if (user){
//         res.send({massege:"User Already Exited"})
//      }
//      else{

//          const user = new User({
//           username,
//           email,
//           password
//          })
      
//          user.save(err =>{
//           if (err){
//               res.send(err)
//           } 
//           else{
//            res.send({massege:"successfully Registerd"})
//           }
//          })
//      }
//    })
// })

// // const userSchema = mongoose.Schema({
// //     username:{
// //         type: String,
// //         required : true
// //     },
// //     email:{
// //         type: String,
// //         required :[ true , 'email is required'] ,
// //         unique: [true , 'This Email is already Registered']
// //     },
// //     password:{
// //         type: String,
// //         required :[true , 'Password is required'] 
// //     }
// // })

// // const User = new mongoose.model("User", userSchema) 

// app.listen(port, () => {
//     console.log("server Start " + port);
// })

