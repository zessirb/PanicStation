console.log("test")
var hostname = window.location.hostname;
//var subsite = hostname.split(".").first();
console.log("subsite : " + window.location.hostname.split(".")[0])
var elementClickCounter = []
var defaultTime = Date.now()
document.onclick = function(event){
	console.log(event.target.nodeName);
	var itemName = event.target.nodeName;
	if (event.target.nodeName == "INPUT" || event.target.nodeName == "BUTTON") {
		itemName += "_" + event.target.type
	}
	var newTime = Date.now();
	var deltaTime = newTime - defaultTime;

	console.log(deltaTime)
	defaultTime = Date.now()

};
