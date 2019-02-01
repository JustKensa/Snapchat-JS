window.onload = function(){
	var APIUrl = "https://api.snapchat.wac.epitech.eu/"
  
function signin() {
	//XMLHttpRequest is a javascript object which lets us communicate with the API.
	var request = new XMLHttpRequest();
	//The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.
	//here we prepare the request for an inscription
	var url = APIUrl + "connection";
	request.open('POST', url, true);
	//sets the value of an HTTP request header. When using setRequestHeader(), you must call it after calling open(), but before calling send().
	request.setRequestHeader("Content-Type", "application/json");
  
	console.log(url);
	var email = document.getElementById("emailR").value;
	var password = document.getElementById("passwordR").value;
	var data = {'email' : email , 'password' : password};
	console.log(data);
  
	//stringify transforms the javascript object data in a string to be sent and understood by the server
	console.log(JSON.stringify(data));
	request.onload =  function () {
	//var answer = JSON.parse(this.responseText);
	console.log("API answer " + this.status + " " + this.responseText);
	};
	 request.send(JSON.stringify(data));
}
  
	var registerButton = document.getElementById("buttonR");
	registerButton.addEventListener("click", signin);
}