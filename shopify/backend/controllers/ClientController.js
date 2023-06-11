const client = require("../models/User")
//function add client
exports.AddClient=(req,res)=>{
    const data=req.body;
     
    
    const cli=new client (data);
        
        
    cli.save((error,addedClient)=>{
        if(error){ res.status(400).json(error);}
        if(addedClient){ res.status(200).json(addedClient)}
  
    })
  };
//function list clients
exports.ListClients=(req,res) => {
    client.find({ role : 'User'}).exec((error,addedClientList)=>{
        if(error){ res.status(400).json(error);}
            if(addedClientList){ res.status(200).json(addedClientList)}
         })   
  };
//function delete client
exports.DeleteClient=(req,res)=>{
    const id=req.params.id;
  
    client.findByIdAndDelete(id).exec(
        (error,deletedClient)=>{
            if (error){res.status(400).json(error)}
            if (deletedClient){ res.status(200).json({'msg':'message supprimé avec succés'})}
        }
    )
  }    
//function update client
exports.UpdateClient=( req , res) => { 

    const id = req.params.id;
    
    const data = req.body;
    
     client.findByIdAndUpdate( id , data ).exec( (error , editedClient ) => {
         if (error){ res.status(400).json(error); }
         if (editedClient){ res.status(200).json(editedClient); } 
  
     } )
     
  
  }
  