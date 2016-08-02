var myVariable = parseInt(document.getElementById("myFirstInput").value);

document.getElementById("runTest").onclick =
function(){
	
	var myVariable = parseInt(document.getElementById("myFirstInput").value);
	
if ( myVariable == 100){
	alert("Its 100");
}

else if( myVariable == 200){
	alert("the number is not 100 nor 200");
}

else
{
	alert("The number is " + myVariable);
}	
}

