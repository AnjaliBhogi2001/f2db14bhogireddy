var Dog = require('../models/Dog');
// List of all Costumes
exports.Dog_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog list');
};
// for a specific Costume.
exports.Dog_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Dog_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog create POST');
};
// Handle Costume delete form on DELETE.
exports.Dog_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Dog_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog update PUT' + req.params.id);
};
// VIEWS

   // List of all Costumes
exports.Dog_list = async function(req, res) {
    try{
    theDog = await Dog.find();
    res.send(theDog);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Dog_view_all_Page = async function(req, res) {
    try{
    theDog = await Dog.find();
    res.render('Dog', { title: 'Dog Search Results', results: theDog });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.Dog_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Dog();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.dogName = req.body.dogName;
    document.dogAge = req.body.dogAge;
    document.dogBreed = req.body.dogBreed;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}