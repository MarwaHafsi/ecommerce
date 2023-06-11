const express = require("express");
const router = express.Router();
const ClientController = require('../controllers/ClientController');

router.post('/ajout' , ClientController.AddClient )
router.put('/update/:id' , ClientController.UpdateClient)
router.get('/list' , ClientController.ListClients) 
router.delete('/delete/:id' , ClientController.DeleteClient)


module.exports = router