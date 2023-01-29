let rotation = 0;
const angle = 5;
const rotated = document.getElementById('rotateDanny');
const list = document.getElementById('Club Members');



function rotate(){
	console.log("attempting to rotate")
	
	rotation = (rotation + angle) % 360;
	rotated.style.transform = `rotate(${rotation}deg)`;
	console.log("Rotating")
}

function addMember(){
	var li = document.createElement("li");
	var candidate = document.getElementById('name')
	li.appendChild(document.createTextNode(candidate.value));
    list.appendChild(li);
}