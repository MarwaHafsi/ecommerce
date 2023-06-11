const express = require("express");
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const multer  = require('multer')

// configuration
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      let extArray = file.mimetype.split("/");
      let extension = extArray[extArray.length - 1];
      cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
    }
  })
const upload = multer({ storage: storage })

router.post('/ajout' , upload.single('image') ,ProductController.AddProduct )
router.put('/update/:id' , ProductController.UpdateProduct)
router.get('/list' , ProductController.ListProduct) 
router.delete('/delete/:id' , ProductController.DeleteProduct)
router.get('/:id' , ProductController.getProduct)
router.get('/store/:id' , ProductController.getProduitsByStore)

module.exports = router