var express = require('express')
, router = express.Router()

var db=require("../db");
var assert=require('assert')
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());
 

router.post('/editCadetRecord', function(req, res) {
   	var collection = db.getDb().collection('cadets');
   	console.log(req.body);
   	//var _id=req.body.cadetID;
   	var firstName=req.body.outputFirstName;
   	var lastName=req.body.outputLastName;
   	var ssn=req.body.outputSocial;
   	var campus=req.body.outputCampus;
   	//var age=req.body.outputAge;
   	//var sex=req.body.outputSex;

   	//var id = JSON.parse(`{"_id":"${_id}"}`);
   	var id = JSON.parse(`{"ssn":"${ssn}"}`);
   	//var id = JSON.parse(`{"_id":"5aab24cbd39c9e2cd0fe7a09"}`);
   	console.log(id);

   	var update = JSON.parse(`{"lastName":"${lastName}","firstName":"${firstName}","campus":"${campus}"}`); //"SSN":"${SSN}","age":"${age}","sex":"${sex}",}
   	console.log(update);

   	collection.updateOne(id, {$set:update}, function(err, res) {
    	if (err) 
    		throw err;
   		console.log("1 document updated");
    	//db.close();
  	});
  	res.redirect('/cadetRecords');

});

module.exports = router;
