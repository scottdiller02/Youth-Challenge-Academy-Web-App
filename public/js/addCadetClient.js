//Brandon Flynt
//save button
$('#saveAddCadet').click(function(){
	var jqxhr = $.ajax( "/addCadet" ).done(function() {
		console.log("success");
	})
});

//cancel button
$('#cancelAddCadet').click(function(){
	window.location="/cadetRecords";
});