const mongoose=require('mongoose')

const clientSchema=new mongoose.Schema({
    nom:{
        type:String,
   
    },
    prenom:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    password:{
        type:String,
        
    },
    adresse:{
        type:String,
        

    },
    region:{
        type:String,
    

    },
    codePostale:{
        type:Number,
    

    },
    type:{
        type:String,
     

    },},{timestamps:true})

    module.exports=mongoose.model('clients',clientSchema)
