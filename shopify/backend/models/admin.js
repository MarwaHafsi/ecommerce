const mongoose=require("mongoose")


const adminSchema=new mongoose.Schema({
    nom:{
        type:String,
        required:true},
    prenom:{
        type:String,
        required:true},
    mail:{
        type:String,
        required:true},
    password:{
        type:String,
        required:true,}
    },{timestamps:true});
    
   

module.exports=mongoose.model('admin',adminSchema)

    

