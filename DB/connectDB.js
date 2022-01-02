const mongoose=require("mongoose");

const connectDB =()=>{
    mongoose.connect("mongodb://localhost/rest",()=>{
        try {
            console.log("database is connected")
        } catch {
            console.log("Error")
        }
    })
}

module.exports = connectDB;