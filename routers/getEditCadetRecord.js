//post edit cadet record
//Brandon Flynt
//edit a cadet record

var express = require('express')
, router = express.Router()

var db=require("../db");
var assert=require('assert')
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());
 
//edits cadet record
router.post('/editCadetRecord', function(req, res) {
   	var collection = db.getDb().collection('cadets');
   	console.log(req.body);

   	var company=req.body.outputCompany;
   	var firstName=req.body.outputFirstName;
   	var lastName=req.body.outputLastName;
   	var DOB=req.body.outputDOB;
   	var age=req.body.outputAge;
   	var race=req.body.outputRace;
   	var sex=req.body.outputSex;
   	var city=req.body.outputCity;
   	var county=req.body.outputCounty;
   	var departure=req.body.outputDeparture;
    var id = req.body.outputID;
 
    var filter = JSON.parse(`{"id":"${id}"}`);
   	var update = JSON.parse(`{"company":"${company}","lastName":"${lastName}","firstName":"${firstName}","DOB":"${DOB}","age":"${age}","race": "${race}", "sex":"${sex}","city":"${city}","county":"${county}","departure":"${departure}"}`);

   	console.log(update);

   	collection.updateOne(filter, {$set:update}, function(err, res) {
    	if (err) 
    		throw err;
   		console.log("1 document updated");
    	//db.close();
  	});
  	res.redirect('/cadetRecords');

});

module.exports = router;
