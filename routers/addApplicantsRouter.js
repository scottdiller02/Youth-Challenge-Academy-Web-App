var express = require('express')
, router = express.Router()
var db = require('../db')
var ObjectId = require('mongodb').ObjectID;
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());

router.post('/processOrders', function(req, res) {
	var info=[];
	var i=0;
	var company=req.body.outputCompany;
	var lastName=req.body.outputLastName;
	var firstName=req.body.outputFirstName;
	var dob=req.body.outputDob;
	var age=req.body.outputAge;
	var race=req.body.outputRace;
	var sex=req.body.outputSex;
	var country=req.body.outputCountry;
	var departure=req.body.outputDeparture;
	var itemIds=req.body.itemIds;
	var objIds=[];
	for(item of itemIds)
		objIds.push(ObjectId(item));
	var collectionO = db.getDb().collection('orders');
	var date=new Date();
	var collectionM = db.getDb().collection('menu');

	var orderItems=[];
	collectionM.find({"_id":{$in:objIds}},
		{name:1, price:1, description: 1})
	.toArray(function(err,items){
		collectionO.insert({"phone":phone,
		 "items":items,"orderdBy":date});
	})
	
	res.send(" Done!");
});
module.exports = router;