const mongoose=require('mongoose');
const detailsSchema=new mongoose.Schema({
    prix:{
        type:Number,
        
    },
    quantite:{
        type:Number
        
        
    },},{timestamps:true})


module.exports=mongoose.model('details',detailsSchema)