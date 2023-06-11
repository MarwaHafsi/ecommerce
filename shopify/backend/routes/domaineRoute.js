const express = require("express");
const router = express.Router();
const domaineController = require('../controllers/DomaineController');
router.post('/ajout' , domaineController.AddDomaine )
router.put('/update/:id' , domaineController.UpdateDomaine)
router.get('/list' , domaineController.listDomaine) 
router.get('/get/:id' , domaineController.getDomaine) 
router.delete('/delete/:id' , domaineController.deleteDomaine)


module.exports = router;
