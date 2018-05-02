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

//creates applicant table
function showApplicants()
{
	
	let info=`
					<table class="table table-striped">
					<tr>
						<th>Company</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>DOB</th>
						<th>Age</th>
						<th>Sex</th>
						<th>Race</th>
						<th>City</th>
						<th>County</th>
						<th>Departure</th>
						<th>ID</th>
						<th>Edit/View</th>
						<th>Update to Cadet</th>
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
						<td>${item.company}</td>
						<td>${item.firstName}</td>
						<td>${item.lastName}</td>
						<td>${item.DOB}</td>
						<td>${item.age}</td>
						<td>${item.sex}</td>
						<td>${item.race}</td>
						<td>${item.city}</td>
						<td>${item.county}</td>
						<td>${item.departure}</td>
						<td>${item.id}</td>
						<td><button class="btn btn-primary" onclick="editApplicant(${i});" >Edit/View</button></td>
						<td><button class="btn btn-primary" onclick="updateApplicant(${i});" >Update</button></td>
					</tr>`;
		}//end of loop
		info+= `</table>`;
		document.getElementById("viewApplicants").innerHTML=info;
	}
}
//saves applicant data and goes to update applicant page
function updateApplicant(item){
	applicant = applicantsArr[item];
	

	if(applicantsArr.length==0)
	{
		clearCart();
	}
	else
	{

		localStorage.setItem("company", JSON.stringify(applicant.company));
		localStorage.setItem("firstName", JSON.stringify(applicant.firstName));
		localStorage.setItem("lastName", JSON.stringify(applicant.lastName));
		localStorage.setItem("DOB", JSON.stringify(applicant.DOB));
		localStorage.setItem("age", JSON.stringify(applicant.age));
		localStorage.setItem("sex", JSON.stringify(applicant.sex));
		localStorage.setItem("race", JSON.stringify(applicant.race));
		localStorage.setItem("city", JSON.stringify(applicant.city));
		localStorage.setItem("county", JSON.stringify(applicant.county));
		localStorage.setItem("departure", JSON.stringify(applicant.departure));
		localStorage.setItem("id", JSON.stringify(applicant.id));
		localStorage.setItem("formComplete", JSON.stringify(applicant.formComplete));
	}

	window.location="/updateApplicant";
}
//goes to edit applicant page
function editApplicant(item)
{
	applicant = applicantsArr[item];
	

	if(applicantsArr.length==0)
	{
		clearCart();
	}
	else
	{

		localStorage.setItem("company", JSON.stringify(applicant.company));
		localStorage.setItem("firstName", JSON.stringify(applicant.firstName));
		localStorage.setItem("lastName", JSON.stringify(applicant.lastName));
		localStorage.setItem("DOB", JSON.stringify(applicant.DOB));
		localStorage.setItem("age", JSON.stringify(applicant.age));
		localStorage.setItem("sex", JSON.stringify(applicant.sex));
		localStorage.setItem("race", JSON.stringify(applicant.race));
		localStorage.setItem("city", JSON.stringify(applicant.city));
		localStorage.setItem("county", JSON.stringify(applicant.county));
		localStorage.setItem("departure", JSON.stringify(applicant.departure));
		localStorage.setItem("id", JSON.stringify(applicant.id));
		localStorage.setItem("formComplete", JSON.stringify(applicant.formComplete));
	}

	window.location="/editApplicantRecord";
}
//goes to view page
function viewApplicantProfile(item)
{
	applicant = applicantsArr[item];
	

	if(applicantsArr.length==0)
	{
		clearCart();
	}
	else
	{

		localStorage.setItem("company", JSON.stringify(applicant.company));
		localStorage.setItem("firstName", JSON.stringify(applicant.firstName));
		localStorage.setItem("lastName", JSON.stringify(applicant.lastName));
		localStorage.setItem("DOB", JSON.stringify(applicant.DOB));
		localStorage.setItem("age", JSON.stringify(applicant.age));
		localStorage.setItem("sex", JSON.stringify(applicant.sex));
		localStorage.setItem("race", JSON.stringify(applicant.race));
		localStorage.setItem("city", JSON.stringify(applicant.city));
		localStorage.setItem("county", JSON.stringify(applicant.county));
		localStorage.setItem("departure", JSON.stringify(applicant.departure));
		localStorage.setItem("id", JSON.stringify(applicant.id));
		localStorage.setItem("formComplete", JSON.stringify(applicant.formComplete));
	}

	window.location="/applicantProfile";
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