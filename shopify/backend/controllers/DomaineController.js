const domaine=require('../models/domaine');
//function add domaine
exports.AddDomaine=(req,res)=>{
    const dom= req.body
      
     
     const doma=new domaine(dom);     
     doma.save((error,addedDomaine)=>{
         if(error){ res.status(400).json(error);}
         if(addedDomaine){ res.status(200).json(addedDomaine)}
     })
   };
// function update domaine
exports.UpdateDomaine=( req , res) => { 

    const id = req.params.id;
    
    const data = req.body;
    
     domaine.findByIdAndUpdate( id , data ).exec( (error , editedDomaine ) => {
         if (error){ res.status(400).json(error); }
         if (editedDomaine){ res.status(200).json(editedDomaine); } 
  
     } ) 
  };
//function delete domaine
exports.deleteDomaine=(req,res)=>{
    const id=req.params.id;
    domaine.findByIdAndDelete(id).exec(
        (error,deletedDomaine)=>{
            if (error){res.status(400).json(error)}
            if (deletedDomaine){ res.status(200).json({'msg':'message supprimé avec succés'})}
        })
  };

//function list domaine
exports.listDomaine=(req,res) => {
    domaine.find({}).exec((error,addedDomaineList)=>{
        if(error){ res.status(400).json(error);}
            if(addedDomaineList){ res.status(200).json(addedDomaineList)}
         })   
  }

  exports.getDomaine=(req,res) => {
    id = req.params.id
    domaine.findById(id).exec((error,domaine)=>{
        if(error){ res.status(400).json(error);}
            if(domaine){ res.status(200).json(domaine)}
         })   
  }
  
  