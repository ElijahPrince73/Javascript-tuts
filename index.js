//var testInterval = setInterval(function(){
	
	//alert("this is my interval alert")
//},

var myInterval = setInterval(function(){
	
	timer()
},1000);

var myButton = document.getElementsByTagName("button")[0];


function timer (){
	
	var theDate = new Date();
	
	var theTime = theDate.toTimeString();
	document.getElementById("showTimer").innerHTML = theTime;
}

function stopTimer (){
	clearInterval(myInterval);
	myButton.innerHTML = "Start Time";
	myButton.setAttribute("onclick" , "startTime()");
}

function startTime(){
	myInterval = setInterval(function(){
		timer()
	}, 1000);
	
	myButton.innerHTML = "stop Time";
	myButton.setAttribute("onclick" , "stopTimer()");
	
}