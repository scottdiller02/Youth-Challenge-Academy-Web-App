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

   	var company=req.body.outputCompany;
   	var fname=req.body.outputFirstName;
   	var lname=req.body.outputLastName;
   	var DOB=req.body.outputDOB;
   	var age=req.body.outputAge;
   	var race=req.body.outputRace;
   	var sex=req.body.outputSex;
   	var city=req.body.outputCity;
   	var county=req.body.outputCounty;
   	var departure=req.body.outputDeparture;

   	//var id = JSON.parse(`{"_id":"${_id}"}`);
   	var id = JSON.parse(`{"DOB":"${DOB}"}`);
   	//var id = JSON.parse(`{"_id":"5aab24cbd39c9e2cd0fe7a09"}`);
   	console.log(id);

   	var update = JSON.parse(`{"company":"${company}","lname":"${lname}","fname":"${fname}","age":"${age}","race": "${race}", "sex":"${sex}","city":"${city}","county":"${county}","departure":"${departure}"}`);

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
