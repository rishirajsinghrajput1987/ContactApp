



//On Enter Press button clicked

// contactName.addEventListener("keyup", function(e){
// 	if(e.keyCode === 13) {
// 		addBtn.click();
// 	}
// });




showContacts();
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function(e){
	
	let contactName = document.getElementById("contactName");
	let contactNumber = document.getElementById("contactNumber");

	if(contactName == "") {
		showError("nameErr", "Enter Your Name")
	}

	let getContacts = localStorage.getItem("contacts");

	if(getContacts === null) {
		contactObj = [];
	}
	else {
		contactObj = JSON.parse(getContacts);
	}

	contactListObj = {
		name: contactName.value,
		number: contactNumber.value
	}
	

	contactObj.push(contactListObj);

	localStorage.setItem("contacts", JSON.stringify(contactObj));

	contactName.value = "";
	contactNumber.value = "";

	showContacts();


});





function showError(errId , msg) {
	let err = document.getElementById("errId");
	err.innerHTML = msg;
}



function showContacts() {

	let getContacts = localStorage.getItem("contacts");
	if(getContacts === null) {
		contactObj = [];
	}
	else {
		contactObj = JSON.parse(getContacts);
	}

	
	let tr = "";

	contactObj.forEach(function(ele, index) {

		tr  += `<tr>
		            <td>${ele.name}</td>
		            <td>${ele.number}</td>
		            <td>
		            <a class="add" title="Add" data-toggle="tooltip">
		            	<i class="material-icons">&#xE03B;</i>
		            </a>
		            <a class="edit" title="Edit" data-toggle="tooltip">
		            	<i class="material-icons">&#xE254;</i>
		            </a>
		            <a id="${index}" onclick="deleteContact(this.id)" class="delete" title="Delete" data-toggle="tooltip">
		            	<i class="material-icons">&#xE872;</i>
		            </a>
		            </td>
		        </tr>`;

	});

	let tableBody = document.getElementById("tableBody");

	if(contactObj.length != 0) {
		tableBody.innerHTML = tr; 
	}
	else {
		tableBody.innerHTML = "<tr><td colspan='3' align='center'>No Contacts Available</td></tr>";
	}

}


function deleteContact(index) {
	//console.log(index)
	let getContacts = localStorage.getItem("contacts");
	if(getContacts === null) {
		contactObj = [];
	}
	else {
		contactObj = JSON.parse(getContacts);
	}

	contactObj.splice(index, 1);

	localStorage.setItem("contacts", JSON.stringify(contactObj));

	showContacts();
}


