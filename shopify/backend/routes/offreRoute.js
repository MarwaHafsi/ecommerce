const express = require("express");
const router = express.Router();
const OffreController = require('../controllers/OffreController');

router.post('/ajout' , OffreController.AddOffre )
router.put('/update/:id' , OffreController.UpdateOffre)
router.get('/list' , OffreController.ListOffre) 
router.get('/get/:id' , OffreController.getOffre) 
router.delete('/delete/:id' , OffreController.DeleteOffre)


module.exports = router