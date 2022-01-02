const mongoose=require("mongoose");
const schema=mongoose.Schema;
const userSchema=new schema({
name:{
    type:String,
    unique:true,
    required:true

},
age:{
    type:Number,
    required:true
},
email:{
    type:String,
    unique:true,
    required:true
    

}

}) 
//export the model
module.exports=User=mongoose.model("user",userSchema)