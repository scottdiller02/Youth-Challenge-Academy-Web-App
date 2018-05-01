var express = require('express')
, router = express.Router()

var db=require("../db");
var assert=require('assert')
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());
 
//edits staff records
router.post('/editStaffRecord', function(req, res) {
   	var collection = db.getDb().collection('staff');
   	console.log(req.body);

   	var email=req.body.outputEmail;
   	var password=req.body.outputPassword;
   	var role=req.body.outputRole;

    //for now uses email as primary key
   	var id = JSON.parse(`{"email":"${email}"}`);

   	var update = JSON.parse(`{"pwd":"${password}","role":"${role}"}`);

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