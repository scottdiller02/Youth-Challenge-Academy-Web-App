//search button functionality
//Brandon Flynt

$('#searchBtn').click(function(){
	console.log(document.getElementById("searchBy").value);
	console.log(document.getElementById("inputSearch").value);
	localStorage.setItem("searchBy", document.getElementById("searchBy").value);
	localStorage.setItem("inputSearch", document.getElementById("inputSearch").value);
	window.location="/searchCadets";
});

//TODO make enter key submit search
