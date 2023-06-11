const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    nom : {
        type : String,
        
    },
    
    description : {
        type : String,
        
    },
    category : {
        type :  mongoose.Schema.Types.ObjectId,
        ref : 'categories'

    },
    boutique : {
        type :  mongoose.Schema.Types.ObjectId,
        ref : 'stores'

    },
    prix : {
        type :  Number,
        

    },
    qte : {
        type :  Number,
        

    },
    image : {
        type : String,
        required : true,
    }
    
    
    
    } , { timestamps : true })
  
module.exports=mongoose.model('products',productSchema)