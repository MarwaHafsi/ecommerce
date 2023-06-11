const store = require("../models/store")
//function add store
exports.AddStores=(req,res)=>{
    const data=req.body;
    
    const st=new store(
        data);
        
        
    st.save((error,addedStore)=>{
        if(error){ res.status(400).json(error);}
        if(addedStore){ res.status(200).json(addedStore)}
  
    })
  };
//function delete store
exports.DeleteStore=(req,res)=>{
    const id=req.params.id;
  
    store.findByIdAndDelete(id).exec(
        (error,deletedStore)=>{
            if (error){res.status(400).json(error)}
            if (deletedStore){ res.status(200).json({'msg':'message supprimé avec succés'})}
        }
    )
  };
//function update store
exports.UpdateStore=( req , res) => { 

    const id = req.params.id;
    
    const data = req.body;
    
    store.findByIdAndUpdate( id , data ).exec( (error , editedStore ) => {
         if (error){ res.status(400).json(error); }
         if (editedStore){ res.status(200).json(editedStore); } 
  
     } )
     
  
  };
//function list store
exports.ListStore=(req,res) => {
    store.find().populate('domaine offre owner').exec((error,addedStoreList)=>{
        if(error){ res.status(400).json(error);}
            if(addedStoreList){ res.status(200).json(addedStoreList)}
         })   
  };
 
  //function pour afficher store
exports.getStore =(req,res) => {
    idstore = req.params.id
    store.findById(idstore).populate("domaine offre").exec((error,store)=>{
        if(error){ res.status(400).json(error);}
            if(store){ res.status(200).json(store)}
         })   
  };


//function lister les boutiques d'un client
exports.ListStoreByOwnerId=(req,res) => {
    iduser = req.params.id
    store.find({ owner : iduser }).populate("domaine offre").exec((error,addedStoreList)=>{
        if(error){ res.status(400).json(error);}
            if(addedStoreList){ res.status(200).json(addedStoreList)}
         })   
  };
  