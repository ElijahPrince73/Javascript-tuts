document.getElementById("textChanger").onclick = function(){
	document.getElementById("firstDiv").innerHTML="You have succesfully changed me";
}

document.getElementById("textAppender").onclick = function(){
document.getElementById("secondDiv").innerHTML =document.getElementById("secondDiv").innerHTML + "Awsome"	
}

document.getElementById("textCreator").onclick= function(){
document.getElementById("emptyDiv").innerHTML="<p>Somehting is supposed to go here</p>"
}