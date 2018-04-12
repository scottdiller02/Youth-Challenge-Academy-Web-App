$('#searchBtn').click(function(){
	console.log(document.getElementById("inputLastName").value);
	console.log(document.getElementById("inputLocation").value);
	localStorage.setItem("lastName", document.getElementById("inputLastName").value);
	localStorage.setItem("location", document.getElementById("inputLocation").value);
	window.location="http://localhost:3000/searchCadets";
});