var express = require('express')
, router = express.Router()

var db=require("../db");
var assert=require('assert')
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());
 
//adds applicant to cadets and removes applicant from applicants
router.post('/updateApplicant', function(req, res) {
   	var collection = db.getDb().collection('applicants');
    var collection2 = db.getDb().collection('cadets');
    //console.log(req.body);

    var company=req.body.outputCompany;
    var firstName=req.body.outputFirstName;
    var lastName=req.body.outputLastName;
    var DOB=req.body.outputDOB;
    var age=req.body.outputAge;
    var race=req.body.outputRace;
    var sex=req.body.outputSex;
    var city=req.body.outputCity;
    var county=req.body.outputCounty;
    var departure=req.body.outputDeparture;
    var id = req.body.outputID;


    var insert = JSON.parse(`{"company":"${company}","lastName":"${lastName}","firstName":"${firstName}","DOB":"${DOB}","age":"${age}","race": "${race}", "sex":"${sex}","city":"${city}","county":"${county}","departure":"${departure}","id":"${id}"}`);
    var filter = JSON.parse(`{"id":"${id}"}`);
    console.log(insert);

    collection2.insertOne(insert, function(err, res) {
        if (err) 
            throw err;
        console.log("1 cadet added");
        //db.close();
    });
    collection.deleteOne(filter, function(err, res) {
        if (err) 
            throw err;
        console.log("1 applicant removed");
        //db.close();
    });
    res.redirect('/applicantRecords');
});

module.exports = router;
