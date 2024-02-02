var express = require('express');
var router = express.Router();
var i = require('../controller/iconntroller')

router.post('/i',i.insert)

module.exports = router;
