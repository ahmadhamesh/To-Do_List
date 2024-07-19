const inputBox = document.getElementById('input-box');
const listContainer  = document.getElementById('list-container');

function addTask() {
	if (inputBox.value === '') {
		alert("you must write something")
	}else {
		let li = document.createElement("li"); //create the new html li tag and store in li 
		li.innerHTML = inputBox.value; //display the input box value in li tag
		listContainer.appendChild(li); //show value inside ul tag id 'list-container'
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);

	}

	inputBox.value = ""; //to remove the input box
	saveData();
}


//check and uncheck data and data delete on click

listContainer.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
}, false);


//to store data in browser
function saveData(){
	localStorage.setItem("data", listContainer.innerHTML)
}


function showTask(){
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

