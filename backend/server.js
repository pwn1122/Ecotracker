require("dotenv").config()
const express = require('express');
const mongoose = require( 'mongoose');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const signUp =  require('./router/signUp')
const app =  express()

const PORT = process.env.PORT || 4000 ;
app.use(
    cors({
      origin:"http://localhost:5173",
      credentials: true
    })
  );
  app.use(cookieParser());
  app.use(express.json())
  
app.use("/" , signUp)  

// mongodb://localhost:27017/ecotracker

mongoose.connect(process.env.MONGO_URL)

.then(()=>{
  app.listen(PORT , ()=>{
      console.log('server start ' + PORT);
      console.log("MongoDB Connected Successfully")
  })
})
.catch(err => console.log(err))


