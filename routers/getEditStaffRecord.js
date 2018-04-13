var express = require('express')
, router = express.Router()

var db=require("../db");
var assert=require('assert')
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());
 

router.post('/editStaffRecord', function(req, res) {
   	var collection = db.getDb().collection('staff');
   	console.log(req.body);

   	var email=req.body.outputEmail;
   	var password=req.body.outputPassword;
   	var role=req.body.outputRole;


   	//var id = JSON.parse(`{"_id":"${_id}"}`);
   	var id = JSON.parse(`{"email":"${email}"}`);
   	//var id = JSON.parse(`{"_id":"5aab24cbd39c9e2cd0fe7a09"}`);
   	console.log(id);

   	var update = JSON.parse(`{"password":"${password}","role":"${role}"}`);

   	console.log(update);

   	collection.updateOne(id, {$set:update}, function(err, res) {
    	if (err) 
    		throw err;
   		console.log("1 document updated");
    	//db.close();
  	});
  	res.redirect('/staffRecords');

});

module.exports = router;