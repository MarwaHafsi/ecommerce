const express = require("express");
const router = express.Router();
const DetailsController = require('../controllers/DetailsController');

router.post('/ajout' , DetailsController.AddDetails)
router.put('/update/:id' , DetailsController.UpdateDetails)
router.get('/list' , DetailsController.ListDetails) 
router.delete('/delete/:id' , DetailsController.DeleteDetails)


module.exports = router