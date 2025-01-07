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


