
var cadetInfo = [];

$(document).ready(function(){
		showCadetInfo();
});

function showCadetInfo(){
	//var ID = localStorage.getItem("id").replace(/"/g, "");
	//document.getElementById("cadetID").innerHTML="Cadet ID: " + ID;
	var lastName = localStorage.getItem("lname").replace(/"/g, "");
	document.getElementById("outputLastName").value = lastName;
	var firstName = localStorage.getItem("fname").replace(/"/g, "");
	document.getElementById("outputFirstName").value = firstName;
	var social = localStorage.getItem("SSN").replace(/"/g, "");
	document.getElementById("outputSocial").value = social;
	var location = localStorage.getItem("location").replace(/"/g, "");
	document.getElementById("outputLocation").value = location;
	//document.getElementById("outputAge").value = localStorage.getItem("age");
	//document.getElementById("outputSex").value = localStorage.getItem("sex");


}

//function saveChanges(){
$('#save').click(function(){
	/*console.log("it works");
	var lname = $('#outputLastName').val();
	var fname = $('#outputFirstName').val();
	var social = $('#outputSocial').val();
	var location = $('#outputLocation').val();
	*/
	var jqxhr = $.ajax( "/editCadetRecord" ).done(function() {
		console.log("success");
	})
});
//}