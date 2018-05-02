let cadetsArr=[];

$(document).ready(function(){
	var jqxhr = $.ajax( "/getCadetRecords" ).done(function(docs) {
		for(doc of docs)
			cadetsArr.push(doc);
		showCadets();
	})
});

function registerButtonEvents()
{
	let buttons=document.getElementsByTagName("button");
	for (let i=0; i<buttons.length-1;i++)
	{
		buttons[i].addEventListener("click", function (){
			addToCart(i);
		} );
	}
}

//creates the table
function showCadets()
{
	
	let info=`
					<table class="table table-striped">
					<tr>
						<th>Company</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>DOB</th>
						<th>Age</th>
						<th>Race</th>
						<th>Sex</th>
						<th>City</th>
						<th>County</th>
						<th>Departure</th>
						
						<th>ID</th>
						<th>Edit/View</th>
					</tr>
			`;	//<th>SSN</th>
	
	
	if (cadetsArr===null)
		document.getElementById("viewCadets").innerHTML="<h2>Error showing cadets</h2>";
	else
	{
		var searchBy = localStorage.getItem("searchBy");
		var inputSearch = localStorage.getItem("inputSearch").replace(/"/g, "");
		console.log(searchBy);
		console.log(inputSearch);
		//loops through all cadets
		for (let i in cadetsArr)
		{
			let item=cadetsArr[i];
			//loops through each cadets property values to find one that matches the search
			for (let [key, value] of Object.entries(item)) {
    			if (item.hasOwnProperty(key)) {
       				if(key == searchBy && value == inputSearch){
       					info+=
				`
					<tr>
						<td>${item.company}</td>
						<td>${item.firstName}</td>
						<td>${item.lastName}</td>
						<td>${item.DOB}</td>
						<td>${item.age}</td>
						<td>${item.race}</td>
						<td>${item.sex}</td>
						<td>${item.city}</td>
						<td>${item.county}</td>
						<td>${item.departure}</td>

						
						<td>${item.id}</td>
<<<<<<< HEAD
						<td><button class="btn btn-primary" onclick="viewCadet(${i});" >Edit/View</button></td>
=======
						<td><button class="btn btn-primary" onclick="editCadet(${i});" >Edit</button></td>
						<td><button class="btn btn-primary" onclick="viewCadetProfile(${i});" >View</button></td>

>>>>>>> 9159d7a71447a534d3aab1028e6b04803f6c327b
					</tr>`; //<td>${item.ssn}</td>
       				}
    			}
			}

			
		}//end of loop
		info+= `</table>`;
		document.getElementById("viewCadets").innerHTML=info;
	}
}
//goes to edit cadet page
function editCadet(item)
{
	cadet = cadetsArr[item];
	

	if(cadetsArr.length==0)
	{
		clearCart();
	}
	else
	{

		localStorage.setItem("company", JSON.stringify(cadet.company));
		localStorage.setItem("firstName", JSON.stringify(cadet.firstName));
		localStorage.setItem("lastName", JSON.stringify(cadet.lastName));
		localStorage.setItem("DOB", JSON.stringify(cadet.DOB));
		localStorage.setItem("age", JSON.stringify(cadet.age));
		localStorage.setItem("race", JSON.stringify(cadet.race));
		localStorage.setItem("sex", JSON.stringify(cadet.sex));
		localStorage.setItem("city", JSON.stringify(cadet.city));
		localStorage.setItem("county", JSON.stringify(cadet.county));
		localStorage.setItem("departure", JSON.stringify(cadet.departure));
		localStorage.setItem("id", JSON.stringify(cadet.id));
	}

	window.location="/editCadetRecord";
}
//goes to view cadet page
function viewCadetProfile(item)
{
	cadet = cadetsArr[item];
	

	if(cadetsArr.length==0)
	{
		clearCart();
	}
	else
	{
		localStorage.setItem("company", JSON.stringify(cadet.company));
		localStorage.setItem("firstName", JSON.stringify(cadet.firstName));
		localStorage.setItem("lastName", JSON.stringify(cadet.lastName));
		localStorage.setItem("DOB", JSON.stringify(cadet.DOB));
		localStorage.setItem("age", JSON.stringify(cadet.age));
		localStorage.setItem("race", JSON.stringify(cadet.race));
		localStorage.setItem("sex", JSON.stringify(cadet.sex));
		localStorage.setItem("city", JSON.stringify(cadet.city));
		localStorage.setItem("county", JSON.stringify(cadet.county));
		localStorage.setItem("departure", JSON.stringify(cadet.departure));
		localStorage.setItem("id", JSON.stringify(cadet.id));
	}

	window.location="/cadetProfile";
}

function getMenuArr(){

		var xhr = new XMLHttpRequest();
	    var url = ajaxUrl+"/getCadetRecords";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange=function(){
         if (xhr.readyState==4 && xhr.status==200){
           arr=JSON.parse(xhr.responseText);
            showCadets();
       }
      }
      xhr.send();


   
}
