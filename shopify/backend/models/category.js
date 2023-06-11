const mongoose=require("mongoose")
const categorySchema=new mongoose.Schema({
    nom : {
        type : String,
        required : true
    },
    
    description : {
        type : String,
        required : true
    },
    
    domaine : {
        type : mongoose.Schema.Types.ObjectId ,
         ref : 'domaines' 
    },
    createur : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'users'
    }
     
     
} , { timestamps : true })
  
module.exports=mongoose.model('categories',categorySchema)