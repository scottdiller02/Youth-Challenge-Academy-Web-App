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


function showCadets()
{
	
	let info=`
					<table class="table table-striped">
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>SSN</th>
						<th>Campus</th>
						<th>Age</th>
						<th>Sex</th>
						<th>Edit</th>
						<th>View</th>
					</tr>
			`;
	
	
	if (cadetsArr===null)
		document.getElementById("viewCadets").innerHTML="<h2>Error showing cadets</h2>";
	else
	{
		
		
		for (let i in cadetsArr)
		{
			let item=cadetsArr[i];
			

			info+=
				`
					<tr>
						<td>${item.firstName}</td>
						<td>${item.lastName}</td>
						<td>${item.ssn}</td>
						<td>${item.campus}</td>
						<td>${item.age}</td>
						<td>${item.sex}</td>
						<td><button class="btn btn-primary" onclick="viewCadet(${i});" >Edit</button></td>
						<td><button class="btn btn-primary" onclick="viewCadetProfile(${i});" >View</button></td>
					</tr>`;
		}//end of loop
		info+= `</table>`;
		document.getElementById("viewCadets").innerHTML=info;
	}
}

function viewCadet(item)
{
	cadet = cadetsArr[item];
	

	if(cadetsArr.length==0)
	{
		clearCart();
	}
	else
	{
		localStorage.setItem("id", JSON.stringify(cadet._id));
		localStorage.setItem("firstName", JSON.stringify(cadet.firstName));
		localStorage.setItem("lastName", JSON.stringify(cadet.lastName));
		localStorage.setItem("ssn", JSON.stringify(cadet.ssn));
		localStorage.setItem("campus", JSON.stringify(cadet.campus));
		localStorage.setItem("age", JSON.stringify(cadet.age));
		localStorage.setItem("sex", JSON.stringify(cadet.sex));
	}

	editCadet(item);
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

function editCadet(item)
{
	window.location="http://localhost:3000/editCadetRecord";

}