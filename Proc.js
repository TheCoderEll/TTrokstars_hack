function initilise_button(){
	function () { var script = document.createElement('button'); script.innerHTML = "ANS"; script.onclick = "ans()"; document.body.appendChild(script);}();
}
function proc(){
	initilise_button();
}
proc();
