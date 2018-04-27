$('#searchBtn').click(function(){
	console.log(document.getElementById("searchBy").value);
	console.log(document.getElementById("inputSearch").value);
	localStorage.setItem("searchBy", document.getElementById("searchBy").value);
	localStorage.setItem("inputSearch", document.getElementById("inputSearch").value);
	window.location="http://localhost:3000/searchCadets";
});
/*
//TODO make enter key submit search
var input = document.getElementById("inputSearch");
input.addEventListener("keyup", function(event) {
	event.preventDefault();
  	if (event.keyCode === 13) {
    	document.getElementById("searchBtn").click();
  	}
});
*/