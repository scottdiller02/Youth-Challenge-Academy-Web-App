let applicantsArr=[];

$(document).ready(function(){
	var jqxhr = $.ajax( "/getApplicantRecords" ).done(function(docs) {
		for(doc of docs)
			applicantsArr.push(doc);
		showApplicants();
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


function showApplicants()
{
	
	let info=`
					<table class="table table-striped">
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>DOB</th>
						<th>Campus</th>
						<th>Age</th>
						<th>Sex</th>
						<th>Race</th>
						<th>City</th>
						<th>County</th>
						<th>Edit</th>
						<th>View</th>
					</tr>
			`;
	
	
	if (applicantsArr===null)
		document.getElementById("viewApplicants").innerHTML="<h2>Error showing applicants</h2>";
	else
	{
		
		
		for (let i in applicantsArr)
		{
			let item=applicantsArr[i];
			

			info+=
				`
					<tr>
						<td>${item.firstName}</td>
						<td>${item.lastName}</td>
						<td>${item.DOB}</td>
						<td>${item.campus}</td>
						<td>${item.age}</td>
						<td>${item.sex}</td>
						<td>${item.race}</td>
						<td>${item.city}</td>
						<td>${item.county}</td>
						<td><button class="btn btn-primary" onclick="viewCadet(${i});" >Edit</button></td>
						<td><button class="btn btn-primary" onclick="viewCadetProfile(${i});" >View</button></td>
					</tr>`;
		}//end of loop
		info+= `</table>`;
		document.getElementById("viewApplicants").innerHTML=info;
	}
}

function viewApplicants(item)
{
	applicant = applicantsArr[item];
	

	if(applicantsArr.length==0)
	{
		clearCart();
	}
	else
	{
		localStorage.setItem("id", JSON.stringify(applicant._id));
		localStorage.setItem("firstName", JSON.stringify(applicant.firstName));
		localStorage.setItem("lastName", JSON.stringify(applicant.lastName));
		localStorage.setItem("DOB", JSON.stringify(applicant.DOB));
		localStorage.setItem("campus", JSON.stringify(applicant.campus));
		localStorage.setItem("age", JSON.stringify(applicant.age));
		localStorage.setItem("sex", JSON.stringify(applicant.sex));
		localStorage.setItem("race", JSON.stringify(applicant.race));
		localStorage.setItem("city", JSON.stringify(applicant.city));
		localStorage.setItem("county", JSON.stringify(applicant.county));
	}

	editApplicant(item);
}

function getMenuArr(){

		var xhr = new XMLHttpRequest();
	    var url = ajaxUrl+"/getApplicantRecords";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange=function(){
         if (xhr.readyState==4 && xhr.status==200){
           arr=JSON.parse(xhr.responseText);
            showApplicnats();
       }
      }
      xhr.send();


   
}

function editApplicant(item)
{
	window.location="http://localhost:3000/editApplicantRecord";

}