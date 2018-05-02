var express = require('express')
, router = express.Router()

var db=require("../db");

  
var assert=require('assert')
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());


router.post("/addStaff", function(req, res) {
	console.log(req.body);
	
   	var collection = db.getDb().collection('staff');
   	//var _id=req.body.cadetID;
   	var email=req.body.outputEmail;
   	var password=req.body.outputPassword;
   	var role=req.body.outputRole;

   			
   			var insert = JSON.parse(`{"email":"${email}","password":"${password}","role":"${role}"}`);
   			var update = JSON.parse(`{"email":"${email}","password":"${password}","role":"${role}"}`);
   			console.log(insert);

   			collection.insertOne(insert, function(err, res) {
    		if (err) 
    			throw err;
   			console.log("1 document added");
    		//db.close();
  			});

  	collection.updateOne({$set:update}, function(err, res) {
		if (err) 
	    		throw err;
	   		console.log("1 document updated");
	    	//db.close();
	  	});
   	
   	
  	res.redirect('/staffRecords');
	
	
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
