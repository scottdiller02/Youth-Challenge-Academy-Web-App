var express = require('express')
, router = express.Router()
var db = require('../db')
var assert=require('assert')
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());

router.get('/logout', function(req, res) {
	req.session.destroy();
	res.render('login', 
		{errmessage:"Logout Successful", errcolor:"alert alert-success"});
});	

//Admin
router.get('/login', function(req, res) {
	res.render('login');
});

   router.post('/checklogin', function(req, res) {
   	var collection = db.getDb().collection('staff');
   	var email=req.body.email;
   	var pwd=req.body.pwd;
      //var role=req.body.role;
   	var condition=`{"email":"${email}","pwd":"${pwd}"}`;
   	collection.find(JSON.parse(condition)).toArray(function(err, items) {
   		assert.equal(null,err);
   		if(items.length===0)
   			res.render('login', 
   				{errmessage:"Login Failed", errcolor:"alert alert-danger"
   			});
   		else if(items[0].role=="admin")
   			{
   				req.session.admin=true;
   				req.session.user=email;
   				res.redirect('/adminHome');
   			}
         else if(items[0].role=="recruiter")
            {
               //req.session.admin=true;
               req.session.user=email;
               res.redirect('/recruiterHome');
            }
         else if(items[0].role)
            {
                req.session.user=email;
               res.redirect('/counselorHome');
            }
         else
            {
               res.render('login', 
               {errmessage:"Login Failed", errcolor:"alert alert-danger"
            });
            }
   		});
   });


   module.exports = router;