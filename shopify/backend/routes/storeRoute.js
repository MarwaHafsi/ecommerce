const express = require("express");
const router = express.Router();
const StoreController = require('../controllers/StoreController');

router.post('/ajout' , StoreController.AddStores )
router.put('/update/:id' , StoreController.UpdateStore)
router.get('/list' , StoreController.ListStore) 
router.get('/:id' , StoreController.getStore) 
router.delete('/delete/:id' , StoreController.DeleteStore)
router.get('/owner/:id' , StoreController.ListStoreByOwnerId)



module.exports = router