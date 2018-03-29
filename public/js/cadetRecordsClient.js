let cadetsArr=[];

$(document).ready(function(){
	var jqxhr = $.ajax( "/getCadetRecords" ).done(function(docs) {
		for(doc of docs)
			cadetsArr.push(doc);
			showCadets();
	})
});
//trigger automatically..
$(document).ready(function(){
	var jqxhr=$.ajax("/getMenuItems")
	.done(function(docs){
		for(doc of docs)
			cadetsArr.push(doc);
		generateCadets();
	})
	.fail(function(){
		alert("Try Again");
	})
})
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

function generateCadets() {
	var i=0;
	var htmlPart="";
	htmlPart=`
					<table class="table table-striped">
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>SSN</th>
						<th>Campus</th>
						<th>Age</th>
						<th>Sex</th>
						<th>Select</th>
					</tr>
			`;
	var arr=localStorage.getItem("cadets");
	if(arr===null)
		htmlPart="You have no items in cadets!";
	else
	{
		var arrIndices = JSON.parse("[" + arrS + "]");
	
	  for(i = 0, length = arr.length; i < length; i++){
	  	cadetNum=arr[i];
	  	htmlPart+=
				`
					<tr>
						<td>`+ arr.firstName + `</td>
						<td>` + arr.lastName + `</td>
						<td>` + arr.ssn + `</td>
						<td>` + arr.campus + `</td>
						<td>` + arr.age + `</td>
						<td>` + arr.sex + `</td>
						<td><button class="btn btn-primary" onclick="viewCadet(` + i + `);" >Select</button></td>
					</tr>`;
	  }
	}
	//htmlPart=localStorage.getItem("cart");
	var div=document.getElementById("viewCadets");
	div.innerHTML=htmlPart;
	//div.insertAdjacentHTML('afterend', htmlPart);
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
						<th>SSN</th>
						<th>Campus</th>
						<th>Age</th>
						<th>Sex</th>
						<th>Select</th>
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
						<td>${item.ssn}</td>
						<td>${item.campus}</td>
						<td>${item.age}</td>
						<td>${item.sex}</td>
						<td><button class="btn btn-primary" onclick="viewCadet(${i});" >Select</button></td>
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