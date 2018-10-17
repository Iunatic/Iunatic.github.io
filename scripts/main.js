document.querySelector('img').onclick = function() {
	if (document.querySelector('img').getAttribute('src') === 'images/1.png')
	{
		document.querySelector('img').setAttribute('src', 'images/2.png');
	}
		else {
			document.querySelector('img').setAttribute('src', 'images/1.png');
		}
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Cyberpunk is our future, ' + myname;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Cyberpunk is our future, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}