var express = require('express');
const Dog_controlers= require('../controllers/Dog');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

router.get('/', Dog_controlers.Dog_view_all_Page );
router.get('/Dog/:id', Dog_controlers.Dog_detail); 

router.get('/detail', secured,Dog_controlers.Dog_view_one_Page);

/* GET create Dog page */
router.get('/create',secured, Dog_controlers.Dog_create_Page);

/* GET create Dog page */
router.get('/update', secured,Dog_controlers.Dog_update_Page);

/* GET delete Dog page */
router.get('/delete',secured, Dog_controlers.Dog_delete_Page);

module.exports = router;