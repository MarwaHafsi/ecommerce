const mongoose=require("mongoose")
const storeSchema=new mongoose.Schema({
    nom : {
        type : String,   
    },
    description : {
        type : String,
       
    },
    domaine : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'domaines'
    } ,
    offre : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'offres'
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }
    
    } , { timestamps : true })
  
module.exports=mongoose.model('stores',storeSchema)