const express = require('express')

const router = express.Router();

const  getUser = require('../controller/user.js')

router.get('/test', getUser)


module.exports = router;