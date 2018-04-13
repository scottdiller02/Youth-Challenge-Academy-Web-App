var express=require("express");
var http=require("http");
var path=require("path");
var handlebars=require("express-handlebars").create({defaultLayout:"home"});
var bodyParser = require('body-parser');
var db = require('./db');
var dbLink=require("./json/config.json");
//var dbLink=require("./json/dbproduction.json");
var url = dbLink.devServer.url;

var session=require("express-session");
var app=express();
app.use(session({
	secret: 'secret msg',
	resave: false,
	saveUninitialized: true
}))

var authAdmin=function(req,res,next){
	if(req.session &&req.session.admin)
		return next();
	else
		return res.send(401,"401: You need to log in!");
};

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
var publicPath=path.resolve(__dirname, "public"	);
app.use(express.static(publicPath));

app.get('/adminHome.html', authAdmin);
app.use(require('./routers/getAdminHome'));
app.use(require('./routers/getCadetRecords'));
app.use(require('./routers/getAddCadetRecords'));
app.use(require('./routers/getCounselorHome'));
app.use(require('./routers/getEditCadetRecord'));
app.use(require('./routers/getEditStaffRecord'));
app.use(require('./routers/getRecruiterHome'));
app.use(require('./routers/getApplicantRecords'));
app.use(require('./routers/getAddApplicants'));
app.use(require('./routers/getStaffRecords'));
app.use(require('./routers/getSearch'));
//app.user routers
app.use(require('./routers/login'));
// Connect to Mongo on start
db.connect(url, function(err){
    if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
} else {
	var listener=http.createServer(app).listen(process.env.PORT||3000);
	console.log('Server is listening at port'+listener.address().port);
 }
})

app.get("/",function(req,res){
		console.log("Coming a request!");
		res.render(`login`);
	//res.sendFile(`${publicPath}/login.html`);
});

app.get("/login",function(req,res){
		console.log("Coming amainrequest!");
		res.render(`login`);
	//res.sendFile(`${publicPath}/login.html`);
});

app.get("/adminHome",function(req,res){
		console.log("Coming a admin request!");
	res.render(`adminHome`);
});

app.get("/cadetRecords",function(req,res){
		console.log("Coming a cadet request!");
	res.render(`cadetRecords`);
});

app.get("/editCadetRecord",function(req,res){
		console.log("Coming a cadet request!");
	res.render(`editCadetRecord`);
});

app.get("/addCadetRecord",function(req,res){
		console.log("Coming a cadet request!");
	res.render(`addCadetRecord`);
});

app.get("/applicantRecords",function(req,res){
		console.log("Coming an applicant request!");
	res.render(`applicantRecords`);
});

app.get("/addApplicant",function(req,res){
		console.log("Coming an applicant request!");
	res.render(`addApplicant`);
});

app.get("/staffRecords",function(req,res){
		console.log("Coming a staff request!");
	res.render(`staffRecords`);
});

app.get("/editStaffRecord",function(req,res){
		console.log("Coming a staff request!");
	res.render(`editStaffRecord`);
});

app.get("/recruiterHome",function(req,res){
		console.log("Coming a recruiter request!");
	res.render(`recruiterHome`);
});

app.get("/counselorHome",function(req,res){
		console.log("Coming a counselor request!");
	res.render(`counselorHome`);
});

app.get("/search",function(req,res){
		console.log("Coming a search request!");
	res.render(`search`);
});

app.get("/searchCadets",function(req,res){
		console.log("Coming a search request!");
	res.render(`searchCadets`);
});

app.get("/cadetProfile",function(req,res){
		console.log("Coming a search request!");
	res.render(`cadetProfile`);

});

app.get("/cadetProfile",function(req,res){
		console.log("Coming a search request!");
	res.render(`cadetProfile`);
});


app.set('db',db);
module.exports.app=app;
