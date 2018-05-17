console.log("test")
var hostname = window.location.hostname;
//var subsite = hostname.split(".").first();
console.log("subsite : " + window.location.hostname.split(".")[0])
var elementClickCounter = []
document.onclick = function(event){
	console.log(event.target.nodeName);
	if (event.target.nodeName == "INPUT" || event.target.nodeName == "BUTTON") {
		console.log(event.target.type)
	}
};


function incrementCounter(element){

}