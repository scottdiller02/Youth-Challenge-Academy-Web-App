var express = require('express')
, router = express.Router()

var db=require("../db");
var assert=require('assert')
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());
 
//enters session notes
router.post('/noteSession', function(req, res) {
   	var collection = db.getDb().collection('notes');
   	console.log(req.body);

   	var notes =req.body.notes;
    var id = req.body.outputIDS;
 

   	var notes = JSON.parse(`{"id":"${id}","notes":"${notes}"}`);

   	collection.insert(notes, function(err, res) {
    	if (err) 
    		throw err;
   		console.log("1 document inserted");
    	//db.close();
  	});
  	res.redirect('/counselorHome');

});

module.exports = router;
