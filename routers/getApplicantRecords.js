var express = require('express')
, router = express.Router()

var db=require("../db");
 
router.get("/getApplicantRecords", function(req, res){
/*
  scott
	var collection = db.getDb().collection('applicants')
	res.setHeader("Content-Type", "application/json");
	collection.find().toArray(function(err, docs){
	//docs contains all records from cadets in 
	//js array format
	var info=[];
	for(doc of docs) 
	info.push(doc);
	res.json(info);
	//console.log(info);
	//res.render('cadets', {info: docs})

	})
})


router.get("/applicantRecords", function(req, res){
	var collection = db.getDb().collection('applicants');

	collection.find().toArray(function(err, docs){
		//collection2.find().toArray(function(err, docs2){
			res.render('applicantRecords', {infoApplicants: docs})
*/
	var collection1 = db.getDb().collection('applicants')
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
})


router.get("/applicants", function(req, res){
	var collection1 = db.getDb().collection('applicants');

	collection1.find().toArray(function(err, docs1){
		//collection2.find().toArray(function(err, docs2){
			res.render('applicants', {infoP1: docs1, infoP2: docs2})
		})
	//})
})



module.exports = router
