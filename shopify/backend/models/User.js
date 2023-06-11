const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    nom:{
        type:String,
        required:true},
    prenom:{
        type:String,
        required:true},
    email:{
        type:String,
        required:true},
    password:{
        type:String,
        required:true}
        ,
    adresse:{
        type:String,
        required:true}
        ,
    telephone:{
        type:String,
        required:true}

    ,
    role:{
        type:String,
        required:true
    }

    },{timestamps:true});
    
userSchema.methods = {
    authenticate : function( password ){
        return password == this.password

    }
}   

module.exports=mongoose.model('users',userSchema)