var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Dog', { title: 'Search Results Dog' });
});
var express = require('express');
const Dog_controlers= require('../controllers/Dog');
var router = express.Router();
/* GET costumes */
router.get('/', Dog_controlers.Dog_view_all_Page );
module.exports = router;