
var cadetInfo = [];

$(document).ready(function(){
	//var jqxhr = $.ajax( "/getEditCadetRecord" ).done(function(docs) {
	//	for(doc of docs)
	//		cadetInfo.push(doc);
		showCadetInfo();
	//})
});

function showCadetInfo(){
	//var ID = localStorage.getItem("id").replace(/"/g, "");
	//document.getElementById("cadetID").innerHTML="Cadet ID: " + ID;
	var lastName = localStorage.getItem("lastName").replace(/"/g, "");
	document.getElementById("outputLastName").value = lastName;
	var firstName = localStorage.getItem("firstName").replace(/"/g, "");
	document.getElementById("outputFirstName").value = firstName;
	var social = localStorage.getItem("ssn").replace(/"/g, "");
	document.getElementById("outputSocial").value = social;
	var campus = localStorage.getItem("campus").replace(/"/g, "");
	document.getElementById("outputCampus").value = campus;
	//document.getElementById("outputAge").value = localStorage.getItem("age");
	//document.getElementById("outputSex").value = localStorage.getItem("sex");


}

//function saveChanges(){
$('#save').click(function(){
	//console.log("it works");
	var lastName = $('#outputLastName').val();
	var firstName = $('#outputFirstName').val();
	var social = $('#outputSocial').val();
	var campus = $('#outputCampus').val();

	var jqxhr = $.ajax( "/editCadetRecord" ).done(function() {
		console.log("success");
	})

});
//}