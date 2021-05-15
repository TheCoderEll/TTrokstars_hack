function ans(){
	q = document.getElementByClassName("current").innerHTML;
	text = q.split(" ");
	no1 = text[0];
	op = text[1];
	no2 = text[2];
	if (op == "×") {
		
function createKeyboardEvent(name, key, altKey, ctrlKey, shiftKey, metaKey, bubbles) {
  var e = new Event(name)
  e.key = key
  e.keyCode = e.key.charCodeAt(0)
  e.which = e.keyCode
  e.altKey = altKey
  e.ctrlKey = ctrlKey
  e.shiftKey = shiftKey
  e.metaKey =  metaKey
  e.bubbles = bubbles
  return e
}
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
function initilise_button(){
	var script = document.createElement('button');
	script.innerHTML = "ANS";
	script.onclick = "ans()";
	document.body.appendChild(script);
}
function proc(){
	initilise_button();
}
proc();
