$('#save').click(function(){

	var jqxhr = $.ajax( "/noteSession" ).done(function() {
		console.log("success");
	})

});