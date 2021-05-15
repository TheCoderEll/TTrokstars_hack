function initilise_button(){
	var script = document.createElement('button');
	script.innerHTML = "ANS";
	script.onclick = "ans()";
	document.body.appendChild(script);}();
}
function proc(){
	initilise_button();
}
proc();
