let cadetsArr=[];
let staff=[];

$(document).ready(function(){
	var jqxhr = $.ajax( "/getCadetRecords" ).done(function(docs) {
		for(doc of docs)
			cadetsArr.push(doc);
			staff.push(doc)
		if (cadetsArr)
			showCadets();
		if (staff)
			showStaff();
	})
});
//edit
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
	let cadetStorage=localStorage.getItem("cadets");
	let cadets=[];
	let info=`
					<table class="table table-striped">
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Address</th>
						<th>City</th>
						<th>State</th>
						<th>Zip</th>
						<th>View Cadet</th>
						<th>Edit Cadet</th>
					</tr>
			`;
	
	
	if (cadetStorage===null)
		document.getElementById("viewCadets").innerHTML="<h2>Error showing cadets</h2>";
	else
	{
		cadets=cadetStorage.split(",");
		
		for (let i in cart)
		{
			let item=cadetsArr[cadetStorage[i]];
			info+=
				`
					<tr>
						<td>${item.firstName}</td>
						<td>${item.lastName}</td>
						<td>${item.address}</td>
						<td>${item.city}</td>
						<td>${item.state}</td>
						<td>${item.zip}</td>
						<td><button class="btn btn-primary" onclick="viewCadet(${i});" >Remove</button></td>
						<td><button class="btn btn-primary" onclick="editCadet(${i});" >Remove</button></td>
					</tr>`;
		}//end of loop
		info+= `</table>`;
		document.getElementById("viewCadets").innerHTML=info;
	}
}

function viewCadet(rID)
{
	var cadets=localStorage.getItem("cadets");
	cadets=cadets.split(",");
	
	//cadets.splice(rID,1);
	if(cadet.length==0)
	{
		clearCart();
	}
	else
	{
		localStorage.setItem("cart", cart);
		localStorage.setItem("number", cart.length);
	}

	showCart();
}

function editCadet(rID)
{
	var cart=localStorage.getItem("cart");
	cart=cart.split(",");
	
	cart.splice(rID,1);
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
}

function editStaff(rID)
{
	var cart=localStorage.getItem("cart");
	cart=cart.split(",");
	
	cart.splice(rID,1);
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
}