const offre = require("../models/offre");
//function add offre
exports.AddOffre=(req,res)=>{
    const off= req.body;
     const of=new offre(off);     
     of.save((error,addedOffre)=>{
         if(error){ res.status(400).json(error);}
         if(addedOffre){ res.status(200).json(addedOffre)}
     })
   };
//function list offre
exports.ListOffre=(req,res) => {
    offre.find().exec((error,addedOffreList)=>{
        if(error){ res.status(400).json(error);}
            if(addedOffreList){ res.status(200).json(addedOffreList)}
         })   
  };
//function delete offre
exports.DeleteOffre=(req,res)=>{
    const id=req.params.id;
    offre.findByIdAndDelete(id).exec(
        (error,deletedOffre)=>{
            if (error){res.status(400).json(error)}
            if (deletedOffre){ res.status(200).json({'msg':'message supprimé avec succés'})}
        })
  };
//function update offre
exports.UpdateOffre=( req , res) => { 

     const id = req.params.id;
     data = req.body
     offre.findByIdAndUpdate(id , data ).exec( (error , editedOffre ) => {
         if (error){ res.status(400).json(error); }
         if (editedOffre){ res.status(200).json(editedOffre); } 
  
     } )
     
  }
 exports.getOffre = (req , res) => {
    const id = req.params.id;
    offre.findById(id).exec( (error , offre ) => {
        if (error){ res.status(400).json(error); }
        if (offre){ res.status(200).json(offre); } 
 
    } )
 }
  