const express = require("express");
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.post('/store' , CategoryController.AddaCategory )
router.put('/update/:id' , CategoryController.UpdateCategory)
router.get('/list' , CategoryController.ListCategory) 
router.get('/get/:id' , CategoryController.getCategory) 
router.delete('/delete/:id' , CategoryController.DeleteCategory)
router.get('/domaine/:id',CategoryController.getCategoriesByDomaine)
router.get('/createur/:id',CategoryController.getCategoriesByCreateur)


module.exports = router