//Brandon Flynt
//click save button
$('#saveAddApplicant').click(function(){
	var jqxhr = $.ajax( "/addApplicant" ).done(function() {
		console.log("success");
	})
});

//click cancel button
$('#cancelAddApplicant').click(function(){
	window.location="/applicantRecords";
});