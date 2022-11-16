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
/* GET detail Dog page */
router.get('/detail', Dog_controlers.Dog_view_one_Page);
/* GET create Dog page */
router.get('/create', Dog_controlers.Dog_create_Page);
/* GET create update page */
router.get('/update', Dog_controlers.Dog_update_Page);
/* GET delete Dog page */
router.get('/delete', Dog_controlers.Dog_delete_Page);