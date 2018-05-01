var express = require('express')
, router = express.Router()

var db=require("../db");

//gets the applicants from database
router.get("/getApplicantRecords", function(req, res){
	var collection = db.getDb().collection('applicants')
	res.setHeader("Content-Type", "application/json");
	collection.find().toArray(function(err, docs){
	//docs contains all records from cadets in 
	//js array format
	var info=[];
	for(doc of docs) 
	info.push(doc);
	res.json(info);


	})
});


router.get("/applicantRecords", function(req, res){
	var collection = db.getDb().collection('applicants');

	collection.find().toArray(function(err, docs){

			res.render('applicantRecords', {infoApplicants: docs})
	})
});


module.exports = router