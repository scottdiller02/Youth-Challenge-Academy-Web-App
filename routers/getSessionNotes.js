var express = require('express')
, router = express.Router()

var db=require("../db");
var assert=require('assert')
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());
 
//edits session notes
router.post('/sessionNotes', function(req, res) {
   	var collection = db.getDb().collection('cadets');
   	console.log(req.body);

   	var notes =req.body.outputNotes;
    var id = req.body.outputID;
 
    var filter = JSON.parse(`{"id":"${id}"}`);
   	var update = JSON.parse(`{"notes":"${notes}"}`);

   	console.log(update);

   	collection.updateOne(filter, {$set:update}, function(err, res) {
    	if (err) 
    		throw err;
   		console.log("1 document updated");
    	//db.close();
  	});
  	res.redirect('/counselorHome');

});

module.exports = router;
