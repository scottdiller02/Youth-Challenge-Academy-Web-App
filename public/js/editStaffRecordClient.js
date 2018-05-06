//edit staff client
//Scott Diller

var staffInfo = [];

$(document).ready(function(){
		showStaffInfo();
});
//auto completes the form
function showStaffInfo(){

	var email = localStorage.getItem("email").replace(/"/g, "");
	document.getElementById("outputEmail").value = email;
	var password = localStorage.getItem("password").replace(/"/g, "");
	document.getElementById("outputPassword").value = password;
	var role = localStorage.getItem("role").replace(/"/g, "");;
	document.getElementById("outputRole").value = role;

}

//function saveChanges(){
$('#save').click(function(){

	var jqxhr = $.ajax( "/editStaffRecord" ).done(function() {
		console.log("success");
	})

});
$('#cancel').click(function(){

	window.location="/staffRecords";

});