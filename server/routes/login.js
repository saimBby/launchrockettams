const express = require('express')

// controller functions
const { login, tamslogin}  = require('../controllers/loginController')

const router = express.Router()

// postimg route
router.post('/login', login)
router.post("/tamslogin", tamslogin)

module.exports = router