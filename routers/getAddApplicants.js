var express = require('express')
, router = express.Router()

var db=require("../db");

  
var assert=require('assert')
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());

//adds applicants
router.post("/addApplicant", function(req, res) {
	console.log(req.body);
	
   	var collection = db.getDb().collection('applicants');
   	var collection2 = db.getDb().collection('cadets');
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
    var formComplete=req.body.outputFormComplete;
   	var id = 0;

   	collection.count({}, function(err, res) {
   		var collection2 = db.getDb().collection('cadets');
   		collection2.count({}, function(err2, res2) {
   			id = res + res2 + 1;
   			
   			var insert = JSON.parse(`{"company":"${company}","lastName":"${lastName}","firstName":"${firstName}","DOB":"${DOB}","age":"${age}","race":"${race}","sex":"${sex}","city":"${city}","county":"${county}","departure":"${departure}", "id": "${id}", "formComplete":"${formComplete}"}`);
   			console.log(insert);

   			collection.insertOne(insert, function(err, res) {
    		if (err) 
    			throw err;
   			console.log("1 document added");
    		//db.close();
  			});
   		});
   	});
	
   	
   	
  	res.redirect('/applicantRecords');
	
	
});


module.exports = router;
