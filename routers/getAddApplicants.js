var express = require('express')
, router = express.Router()

var db=require("../db");

  
var assert=require('assert')
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());

/*
router.get("/getAddApplicant", function(req, res){
	var collection1 = db.getDb().collection('applicants');
	console.log(req.body);
	
	res.setHeader("Content-Type", "application/json");
	collection1.find().toArray(function(err, docs){
	//docs contains all records from phase1 in 
	//js array format
	var info1=[];
	for(doc1 of docs1) 
	info1.push(doc1);
	res.json(info1);
	})
	//collection2.find().toArray(function(err, docs){
	//docs contains all records from phase2 in 
	//js array format
	//var info2=[];
	//for(doc2 of docs2) 
	//info2.push(doc2);
	//res.json(info2);
	//})
	
});
*/
router.post("/addApplicant", function(req, res) {
	console.log(req.body);
	
   	var collection = db.getDb().collection('applicants');
   	var collection2 = db.getDb().collection('cadets');
   	//var _id=req.body.cadetID;
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
   	var id = 0;

   	collection.count({}, function(err, res) {
   		var collection2 = db.getDb().collection('cadets');
   		collection2.count({}, function(err2, res2) {
   			id = res + res2 + 1;
   			
   			var insert = JSON.parse(`{"company":"${company}","lastName":"${lastName}","firstName":"${firstName}","DOB":"${DOB}","age":"${age}","race":"${race}","sex":"${sex}","city":"${city}","county":"${county}","departure":"${departure}", "id": "${id}"}`);
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

/*
router.get("/applicants", function(req, res){
	var collection1 = db.getDb().collection('applicants');

	collection1.find().toArray(function(err, docs1){
		//collection2.find().toArray(function(err, docs2){
			res.render('applicants', {infoP1: docs1, infoP2: docs2})
		})
	//})
})

*/
module.exports = router;
