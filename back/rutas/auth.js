const {login, register, logout} = require('../controller/auth')
const express = require('express')
const router = express.Router();



router.get('/login', login)
router.post('/register', register)
router.post('/logout', logout)

module.exports = router