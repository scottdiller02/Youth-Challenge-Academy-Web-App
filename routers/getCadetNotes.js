//gets cadet notes
//wip

var express = require('express')
, router = express.Router()

var db=require("../db");
 
router.get("/getCadetRecords", function(req, res){
	var collection = db.getDb().collection('cadets')
	res.setHeader("Content-Type", "application/json");
	collection.find().toArray(function(err, docs){
	//docs contains all records from cadets in 
	//js array format
	var info=[];
	for(doc of docs) 
	info.push(doc);
	res.json(info);

	})
})


router.get("/cadetRecords", function(req, res){
	var collection = db.getDb().collection('cadets');

	collection.find().toArray(function(err, docs){
			res.render('cadetRecords', {infoCadets: docs})
	})

})


module.exports = router
