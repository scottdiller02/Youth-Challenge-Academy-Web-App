var express = require('express')
, router = express.Router()

var db=require("../db");
 
router.get("/getStaffRecords", function(req, res){
	var collection = db.getDb().collection('staff')
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


router.get("/staffRecords", function(req, res){
	var collection = db.getDb().collection('staff');

	collection.find().toArray(function(err, docs){
		//collection2.find().toArray(function(err, docs2){
			res.render('staffRecords', {infoCadets: docs})
		})
	//})
})


module.exports = router