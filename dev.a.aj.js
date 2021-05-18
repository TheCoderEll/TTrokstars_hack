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
function proc(){
	var style = document.createElement('style');
	style.src = "https://thecoderell.github.io/TTrokstars_hack/style.1.css";
	document.body.append(style);
	var div = document.createElement('div');
	div.id = "bu";
	document.document.getElementsByClassName("game")[0].append(div);
	var script = document.createElement('button');
	//alert("A");
	script.innerHTML = "ANS";
	//alert("B");
	script.id = "buheader";
	//alert("C");
	div.append(script);
	//alert("D");
	//alert("READY");
	dragElement(document.getElementById('bu'))
	document.getElementById('buheader').addEventListener('click', ans);
}
proc();
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
