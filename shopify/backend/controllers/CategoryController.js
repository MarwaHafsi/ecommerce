const category = require("../models/category")
//function add category
exports.AddaCategory=(req,res)=>{
    const data=req.body;
    
    const cat=new category(
        data);
        
        
    cat.save((error,addedCategory)=>{
        if(error){ res.status(400).json(error);}
        if(addedCategory){ res.status(200).json(addedCategory)}

    })
}
//function update category
exports.UpdateCategory=( req , res) => { 

    const id = req.params.id;
    
    const data = req.body;
    
    category.findByIdAndUpdate( id , data ).exec( (error , editedCategory ) => {
         if (error){ res.status(400).json(error); }
         if (editedCategory){ res.status(200).json(editedCategory); } 
  
     } )
     
  
  }

//function list category
exports.ListCategory=(req,res) => {
    category.find().exec((error,addedCategoryList)=>{
        if(error){ res.status(400).json(error);}
        if(addedCategoryList){ res.status(200).json(addedCategoryList)}
         })   
};
//function delete category
exports.DeleteCategory=(req,res)=>{
    const id=req.params.id;
 
    category.findByIdAndDelete(id).exec(
        (error,deletedCategory)=>{
            if (error){res.status(400).json(error)}
            if (deletedCategory){ res.status(200).json({'msg':'message supprimé avec succés'})}
        }
    )
}   


//function list category par domaine
exports.getCategoriesByDomaine=(req,res) => {
    domaine = req.params.id
    category.find({ domaine : domaine }).populate('domaine').exec((error,categories)=>{
        if(error){ res.status(400).json(error);}
        if(categories){ res.status(200).json(categories)}
         })   
};


exports.getCategory = ( req , res ) => {
    id = req.params.id
    category.findById(id).populate('domaine createur').exec((error,category)=>{
        if(error){ res.status(400).json(error);}
        if(category){ res.status(200).json(category)}
         })   
}

//function list category par createur
exports.getCategoriesByCreateur=(req,res) => {
    idcreateur = req.params.id
    category.find({ createur : idcreateur }).populate('domaine').exec((error,categories)=>{
        if(error){ res.status(400).json(error);}
        if(categories){ res.status(200).json(categories)}
         })   
};

  
