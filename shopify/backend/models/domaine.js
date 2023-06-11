const mongoose=require('mongoose');

const domaineSchema=new mongoose.Schema({
   nom:{
       type:String,
       required:true

   },
   description:{
    type:String,
    required:true  
   },},{timestamps:true}

)

module.exports=mongoose.model('domaines',domaineSchema)