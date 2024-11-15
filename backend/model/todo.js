const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
        
    "description": "string",
    "status": "string"});
const user=mongoose.model('todo',userSchema);
module.exports=user;