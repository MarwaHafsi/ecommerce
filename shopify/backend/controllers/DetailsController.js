const details = require("../models/details");

//function add detail
exports.AddDetails=(req,res)=>{
    const det= req.body;
     
    
        
     const deta=new details(det);     
     deta.save((error,addedDetail)=>{
         if(error){ res.status(400).json(error);}
         if(addedDetail){ res.status(200).json(addedDetail)}
     })
   };
//function list details
exports.ListDetails=(req,res) => {
    details.find().exec((error,addedDetailList)=>{
        if(error){ res.status(400).json(error);}
            if(addedDetailList){ res.status(200).json(addedDetailList)}
         })   
  };
//function delete details
exports.DeleteDetails=(req,res)=>{
    const id=req.params.id;
    details.findByIdAndDelete(id).exec(
        (error,deletedDetail)=>{
            if (error){res.status(400).json(error)}
            if (deletedDetail){ res.status(200).json({'msg':'message supprimé avec succés'})}
        })
  };
//function update details
exports.UpdateDetails=( req , res) => { 

    const id = req.params.id;
    
    const data = req.body;
    
     details.findByIdAndUpdate( id , data ).exec( (error , editedDetail ) => {
         if (error){ res.status(400).json(error); }
         if (editedDetail){ res.status(200).json(editedDetail); } 
  
     } )
     

  }
    
  