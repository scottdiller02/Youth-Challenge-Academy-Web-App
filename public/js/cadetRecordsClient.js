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
	//let cadetStorage=localStorage.getItem("cadets");
	//let cadetStorage= cadetsArr;
	//console.log(cadetsArr);
	//let cadets=[];
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
					</tr>
			`;
	
	
	if (cadetsArr===null)
		document.getElementById("viewCadets").innerHTML="<h2>Error showing cadets</h2>";
	else
	{
		//cadets=cadetStorage.split(",");
		
		for (let i in cadetsArr)
		{
			let item=cadetsArr[i];
			

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
						<td><button class="btn btn-primary" onclick="viewCadet(${i});" >Edit</button></td>
					</tr>`;
		}//end of loop
		info+= `</table>`;
		document.getElementById("viewCadets").innerHTML=info;
	}
}

function viewCadet(item)
{
	//var cadets=localStorage.getItem("cadets");
	//cadets=cadets.split(",");
	cadet = cadetsArr[item];
	
	//cadets.splice(rID,1);
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

	/*var cart=localStorage.getItem("cart");
	cart=cart.split(",");
	
	cart.splice(item, 1);
	if(cart.length==0)
	{
		clearCart();
	}
	else
	{
		localStorage.setItem("cart", cart);
		localStorage.setItem("number", cart.length);
	}

	showCart();
	*/
}