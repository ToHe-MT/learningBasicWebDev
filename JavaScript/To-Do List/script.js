var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li")
var items = document.getElementsByClassName("item")
var deletes = document.getElementsByClassName("delete")
var p = document.getElementsByClassName("item")

function inputLength(input) {
	if (input.value.length ===0){
		return false; 
	} 
	return true;
	}

function createListElement() {
	var li = document.createElement("li");
	var p = document.createElement("p")
	p.appendChild(document.createTextNode(input.value));
	p.className="item";
	input.value = "";
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("delete"));
	button.classList.add("delete")
	li.appendChild(p)
	li.appendChild(button);
	ul.appendChild(li);
}
function addListAfterClick() {
	if (inputLength(input)) {
		createListElement();
	} else {
		alert("Please Insert Tasks")
	}
}
function addListAfterKeypress(event) {
	if (inputLength(input) && event.keyCode === 13) {
		createListElement(); 
	} else {
			alert("Please Insert Tasks")
		}
}
function addEventListenerli(element){
	element.addEventListener("click", ()=>element.classList.toggle("done"))
}

function addEventListenerDelete(parent,element,index){
	element[index].addEventListener("click", ()=>parent[index].remove())
}

function toggleAndRemoveUl(element){
	if (element.target.className==="item"){
		element.target.classList.toggle("done")
	}
	if (element.target.className==="delete"){
		element.target.parentElement.remove();
	} 
}
ul.addEventListener("click",toggleAndRemoveUl);

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);