console.log("test")
var hostname = window.location.hostname;
const req = new XMLHttpRequest();
//var subsite = hostname.split(".").first();
console.log("subsite : " + window.location.hostname.split(".")[0])
var defaultTime = Date.now();
document.onclick = function(event){
	var itemName = event.target.nodeName;
	if (event.target.nodeName == "INPUT" || event.target.nodeName == "BUTTON") {
		itemName += "_" + event.target.type
	}
	var newTime = Date.now();
	var deltaTime = newTime - defaultTime;

	
	defaultTime = Date.now();

	var data = {
		page : hostname,
		element : itemName,
		idle : deltaTime,
		terminal : Math.ceil(Math.random()*3)
	} 
	sendData(data)

};


req.onreadystatechange = function() {
	    if (req.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
	       if (req.status == 200) {
	           document.getElementById("myDiv").innerHTML = req.responseText;
	       }
	       else if (req.status == 400) {
	          alert('There was an error 400');
	       }
	       else {
	           alert('something else other than 200 was returned');
	       }
	    }
	};

function sendData(payload){

	console.log(payload);
try{
	req.open('POST', 'http://45.32.104.249:3000/action', true); 
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send(payload);
	
} catch (exception){
	console.log(exception)
}
	
}
