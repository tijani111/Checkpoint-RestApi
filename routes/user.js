const express=require("express")
const router=express.Router();
const User=require("../models/User");
//get all the users
router.get("/all",async(req,res)=>{try { 
const users= await User.find()

    
} catch (error) {
    
}})
//ADD A NEW USER
router.post("/add",async(req,res)=>{
    const {name,age,email}=req.body 
try {
    const newUser=new User({name,age,email}) 
const user= await newUser.save()
res.json({msg:`a new User has been added`,user})
    
} catch (error) {
    
}})
//UPDATE A USER
router.put("/update/:id",async(req,res)=>{
    const NM=req.params.name
try {
    const user=await User.findByIdAndUpdate({name:NM},{$set:req.body})

res.json({msg:`${NM} has been updated`,user})
    
} catch (error) {
    
}})
//DELETE A USER
router.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id
try {
    const user=await User.findByIdAndDelete(ID)

res.json({msg:`${ID} has been deleted`,user})
    
} catch (error) {
    
}})
module.exports=router