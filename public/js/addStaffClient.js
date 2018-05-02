$('#saveAddStaff').click(function(){
	/*console.log("it works");
	var lname = $('#outputLastName').val();
	var fname = $('#outputFirstName').val();
	var social = $('#outputSocial').val();
	var location = $('#outputLocation').val();
	*/
	var jqxhr = $.ajax( "/addStaff" ).done(function() {
		console.log("success");
	})
});

$('#cancelAddStaff').click(function(){
	window.location="http://localhost:3000/staffRecords";
});