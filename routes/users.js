var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', usersController);

module.exports = router;
