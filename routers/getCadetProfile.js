//get cadet profile
//Scott Diller

var express = require('express')
, router = express.Router()

var db=require("../db");
 
router.get("/getCadetProfile", function(req, res){
	var collection1 = db.getDb().collection('cadets')
	res.setHeader("Content-Type", "application/json");
	collection1.find().toArray(function(err, docs){
	//docs contains all records from phase1 in 
	//js array format
	var info1=[];
	for(doc1 of docs1) 
	info1.push(doc1);
	res.json(info1);
	})

})


router.get("/cadets", function(req, res){
	var collection1 = db.getDb().collection('cadets');

	collection1.find().toArray(function(err, docs1){
			res.render('cadetProfile', {infoP1: docs1, infoP2: docs2})
	})
})


module.exports = router