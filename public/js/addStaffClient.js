//Scott Diller
//saves staff
$('#saveAddStaff').click(function(){

	var jqxhr = $.ajax( "/addStaff" ).done(function() {
		console.log("success");
	})
});
//cancel
$('#cancelAddStaff').click(function(){
	window.location="http://localhost:3000/staffRecords";
});