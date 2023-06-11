const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login' , authController.login )
router.post('/register' , authController.registre )
router.get('/createAdmin',authController.createAdmin )

module.exports = router