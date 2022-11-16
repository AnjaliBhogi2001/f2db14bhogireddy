var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Dog_controller = require('../controllers/Dog');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Dog', Dog_controller.Dog_create_post);
// DELETE request to delete Costume.
router.delete('/Dog/:id', Dog_controller.Dog_delete);
// PUT request to update Costume.
router.put('/Dog/:id', Dog_controller.Dog_update_put);
// GET request for one Dog.
router.get('/Dog/:id', Dog_controller.Dog_detail);
// GET request for list of all Dog items.
router.get('/Dog', Dog_controller.Dog_list);
module.exports = router;
// GET request for one costume. 
router.get('/Dog/:id', Dog_controller.Dog_detail); 
 