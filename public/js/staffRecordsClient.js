let staffArr=[];

$(document).ready(function(){
	var jqxhr = $.ajax( "/getStaffRecords" ).done(function(docs) {
		for(doc of docs)
			staffArr.push(doc);
		showStaff();
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

//makes staff table
function showStaff()
{
	
	let info=`
					<table class="table table-striped">
					<tr>
						<th>Email</th>
						<th>Password</th>
						<th>Role</th>
						
					</tr>
			`;
	
	
	if (staffArr===null)
		document.getElementById("viewStaff").innerHTML="<h2>Error showing staff</h2>";
	else
	{
		
		
		for (let i in staffArr)
		{
			let item=staffArr[i];
			

			info+=
				`
					<tr>

						<td>${item.email}</td>
						<td>${item.pwd}</td>
						<td>${item.role}</td>

						<td><button class="btn btn-primary" onclick="editStaff(${i});" >Edit</button></td>
					</tr>`;
		}//end of loop
		info+= `</table>`;
		document.getElementById("viewStaff").innerHTML=info;
	}
}
//edit staff
function editStaff(item)
{
	staff = staffArr[item];
	

	if(staffArr.length==0)
	{
		clearCart();
	}
	else
	{


		localStorage.setItem("email", JSON.stringify(staff.email));
		localStorage.setItem("password", JSON.stringify(staff.pwd));
		localStorage.setItem("role", JSON.stringify(staff.role));

	}

	editStaff(item);
}

function getMenuArr(){

		var xhr = new XMLHttpRequest();
	    var url = ajaxUrl+"/getStaffRecords";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange=function(){
         if (xhr.readyState==4 && xhr.status==200){
           arr=JSON.parse(xhr.responseText);
            showStaff();
       }
      }
      xhr.send();


   
}

function editStaff(item)
{
	window.location="/editStaffRecord";

}