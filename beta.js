function ans(){
	console.log("WORK");
	q = document.getElementsByClassName("current")[0].innerHTML;
	text = q.split(" ");
	no1 = text[1];
	op = text[2].split("<!---->")[1];
	no2 = text[3];
	alert(no1);
	alert(no2);
	answer = "";
	if (op == "×") {
		answer = no1 * no2
	}
	if (op == "÷") {
		answer = no1 / no2
	}
	alert(answer);
	nol = answer.split('');
	alert(nol);
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
function proc(){
	var script = document.createElement('button');
	alert("A");
	script.innerHTML = "ANS";
	alert("B");
	script.id = "but";
	alert("C");
	document.body.append(script);
	alert("D");
	alert("READY");
	document.getElementById('but').addEventListener('click', ans);
}
proc();
