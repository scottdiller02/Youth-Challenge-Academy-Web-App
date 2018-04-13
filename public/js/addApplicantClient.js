
$('#saveAddApplicant').click(function(){
	/*console.log("it works");
	var lname = $('#outputLastName').val();
	var fname = $('#outputFirstName').val();
	var social = $('#outputSocial').val();
	var location = $('#outputLocation').val();
	*/
	var jqxhr = $.ajax( "/addApplicant" ).done(function() {
		console.log("success");
	})
});

$('#cancelAddApplicant').click(function(){
	window.location="http://localhost:3000/applicantRecords";
});