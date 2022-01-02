const express=require("express")
const app=express()
const connectDB=require("./DB/connectDB")
const User=require("./models/User");
app.use(express.json())

app.use('/rest/user',require('./routes/user'))
require('dotenv').config()
app.use(express.json())
connectDB();














const port=5000
app.listen(port,(err)=>{err?console.log(err):console.log(`the server is connected on ${port}...`)})