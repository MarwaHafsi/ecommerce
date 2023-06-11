const mongoose=require("mongoose")


const offreSchema=new mongoose.Schema({
    nom:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true
        
    },
    budget:{
        type:Number,
        required:true
    },
    nbrecat:{
        type:Number,
        required:true
    },
    nbreprod:{
        type:Number,
        required:true

    }

},{timestamps:true})

module.exports = mongoose.model('offres',offreSchema)