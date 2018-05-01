//not used in app for now. directly adds cadets.

var express = require('express')
, router = express.Router()

var db=require("../db");

var assert=require('assert')
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());


router.post("/addCadet", function(req, res) {
	
   	var collection = db.getDb().collection('cadets');

   	var company=req.body.outputCompany;
   	var firstName=req.body.outputFirstName;
   	var lastName=req.body.outputLastName;
   	var DOB=req.body.outputDob;
   	var age=req.body.outputAge;
   	var race=req.body.outputRace;
   	var sex=req.body.outputSex;
   	var city=req.body.outputCity;
   	var county=req.body.outputCounty;
   	var departure=req.body.outputDeparture;

   	
   	var insert = JSON.parse(`{"company":"${company}","lastName":"${lastName}","firstName":"${firstName}","DOB":"${DOB}","age":"${age}","race":"${race}","sex":"${sex}","city":"${city}","county":"${county}","departure":"${departure}"}`);
   	console.log(insert);

   	collection.insertOne(insert, function(err, res) {
    	if (err) 
    		throw err;
   		console.log("1 document added");
    	//db.close();
  	});
  	res.redirect('/cadetRecords');
	
	
});

module.exports = router;
