const product = require("../models/product");
//function add product
exports.AddProduct=(req,res)=>{
    const data=req.body;
    const pro =new product (
        data );
     if (req.file){
      //  const ext = req.file.filename.substring(req.file.filename.indexOf('.')+1); 
        pro.image = req.file.filename;
     }
     
    pro.save((error,addedProduct)=>{
        if(error){ res.status(400).json(error);}
        if(addedProduct){ res.status(200).json(addedProduct)}
  
    })
  };
//function list product
exports.ListProduct=(req,res) => {
 product.find().populate('category boutique').exec((error,addedProductList)=>{
        if(error){ res.status(400).json(error);}
            if(addedProductList){ res.status(200).json(addedProductList)}
         })   
  };
//function delete product
exports.DeleteProduct=(req,res)=>{
    const id=req.params.id;
  
    product.findByIdAndDelete(id).exec(
        (error,deletedProduct)=>{
            if (error){res.status(400).json(error)}
            if (deletedProduct){ res.status(200).json({'msg':'message supprimé avec succés'})}
        }
    )
  };
//function update product
exports.UpdateProduct=( req , res) => { 

    const id = req.params.id;
    
    const data = req.body;
    
     product.findByIdAndUpdate( id , data ).exec( (error , editedProduct ) => {
         if (error){ res.status(400).json(error); }
         if (editedProduct){ res.status(200).json(editedProduct); } 
  
     } )
     
  
  }

  //function get product
exports.getProduct=( req , res) => { 

    const id = req.params.id;
    
    //const data = req.body;
    
     product.findById(id).populate('category boutique').exec( (error , Product ) => {
         if (error){ res.status(400).json(error); }
         if (Product){ res.status(200).json(Product); } 
  
     } )
     
  
  }


  // lister les produits dans un store
  exports.getProduitsByStore = (req , res) =>{
    const id = req.params.id;
    //const data = req.body;
     product.find({ boutique :  id}).populate('category boutique').exec( (error , Products ) => {
         if (error){ res.status(400).json(error); }
         if (Products){ res.status(200).json(Products); } 
  
     } )
  }
      