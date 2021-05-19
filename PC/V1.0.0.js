function ans(){
	//console.log("WORK");
	q = document.getElementsByClassName("current")[0].innerHTML;
	text = q.split(" ");
	//alert(text[0]);
	//alert(text[1]);
	//alert(text[2]);
	//alert(text[3]);
	//alert(text[4]);
	//alert(text[5]);
	if (q.includes("÷")) {
		no1 = text[1];
		op = text[2].split("<!---->")[1];
		no2 = text[3];
	} else {
		no1 = text[1];
		op = text[3].split("<!---->")[0];
		no2 = text[4];
	}
	//alert(no1);
	//alert(op);
	//alert(no2);
	answer = "";
	if (op == "×") {
		answer = parseInt(no1) * parseInt(no2);
	}
	if (op == "÷") {
		answer = parseInt(no1) / parseInt(no2);
	}
	answer = String(answer);
	//alert(answer);
	nol = answer.split('');
	//alert(nol);
	//alert(nol.length);
	if (nol.length == 1){
		simulateKeydown (48 + parseInt(nol[0]), false, false, false);
	}
	if (nol.length == 2){
		simulateKeydown (48 + parseInt(nol[0]), false, false, false);
		simulateKeydown (48 + parseInt(nol[1]), false, false, false);
	}
	if (nol.length == 3){
		simulateKeydown (48 + parseInt(nol[0]), false, false, false);
		simulateKeydown (48 + parseInt(nol[1]), false, false, false);
		simulateKeydown (48 + parseInt(nol[2]), false, false, false);
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
input = getElementByXpath("/html")
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 32){
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    ans()
  }
});
