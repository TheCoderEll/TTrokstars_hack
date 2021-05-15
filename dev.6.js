function ans(){
	q = document.getElementsByClassName("current")[0].innerHTML;
	text = q.split(" ");
	no1 = text[0];
	op = text[1];
	no2 = text[2];
	answer = "";
	if (op == "×") {
		answer = no1 * no2
	}
	if (op == "÷") {
		anser = no1 / no2
	}
	nol = anser.split('');
	if (nol.length == 1){
		simulateKeydown (no1[0].keycode, false, false, false);
	}
	if (nol.length == 2){
		simulateKeydown (no1[0].keycode, false, false, false);
		simulateKeydown (no1[1].keycode, false, false, false);
	}
	if (nol.length == 3){
		simulateKeydown (no1[0].keycode, false, false, false);
		simulateKeydown (no1[1].keycode, false, false, false);
		simulateKeydown (no1[2].keycode, false, false, false);
	}
	simulateKeydown (13, false, false, false);
}
function simulateKeydown (keycode,isCtrl,isAlt,isShift){
	var e = new KeyboardEvent( "keydown", { bubbles:true, cancelable:true, char:String.fromCharCode(keycode), key:String.fromCharCode(keycode), shiftKey:isShift, ctrlKey:isCtrl, altKey:isAlt } );
        Object.defineProperty(e, 'keyCode', {get : function() { return this.keyCodeVal; } });     
        e.keyCodeVal = keycode;
        document.dispatchEvent(e);
}
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
function initilise_button(){
	var script = document.createElement('button');
	script.innerHTML = "ANS";
	script.id = "ANS";
	document.body.appendChild(script);
}
function proc(){
	initilise_button();
}
proc();
document.getElementById('ANS').addEventListener('click', ans());
