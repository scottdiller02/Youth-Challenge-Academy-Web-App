
var cadetInfo = [];

$(document).ready(function(){
		showCadetInfo();
});

function showCadetInfo(){

	var company = localStorage.getItem("company").replace(/"/g, "");
	document.getElementById("outputCompany").value= company;

	//var ID = localStorage.getItem("id").replace(/"/g, "");
	//document.getElementById("cadetID").innerHTML="Cadet ID: " + ID;

	var lastName = localStorage.getItem("lastName").replace(/"/g, "");
	document.getElementById("outputLastName").value = lastName;
	var firstName = localStorage.getItem("firstName").replace(/"/g, "");
	document.getElementById("outputFirstName").value = firstName;
	var dob = localStorage.getItem("DOB").replace(/"/g, "");
	document.getElementById("outputDOB").value = dob;
	var age = localStorage.getItem("age").replace(/"/g, "");
	document.getElementById("outputAge").value = age;
	var race = localStorage.getItem("race").replace(/"/g, "");;
	document.getElementById("outputRace").value = race;
	var sex = localStorage.getItem("sex").replace(/"/g, "");;
	document.getElementById("outputSex").value = sex;
	var city = localStorage.getItem("city").replace(/"/g, "");;
	document.getElementById("outputCity").value = city;
	var county = localStorage.getItem("county").replace(/"/g, "");;
	document.getElementById("outputCounty").value = county;
	var departure = localStorage.getItem("departure").replace(/"/g, "");;
	document.getElementById("outputDeparture").value = departure;



}

//function saveChanges(){
$('#save').click(function(){

	var jqxhr = $.ajax( "/editCadetRecord" ).done(function() {
		console.log("success");
	})

});
//}