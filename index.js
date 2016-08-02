var myArray = ["superman ", "batman ", "hulk"];



var character = document.getElementById("character").value;

document.getElementById("addCharacter").onclick = function () {
	
character = document.getElementById("character").value;
	myArray.push(character)
	console.log(myArray);

	document.getElementById("square").innerHTML= "New Array: " + myArray;
}



//document.write(myArray);
//document.write(myArray[0]);

//document.getElementById("square").innerHTML = myArray;

//myArray.push("Captain-America");
//document.getElementById("square").innerHTML = myArray;

//myArray.pop()
//document.getElementById("square").innerHTML = myArray;
//myArray.shift();
//document.getElementById("square").innerHTML = myArray;
//myArray.unshift("Iron Man");
//document.getElementById("square").innerHTML = myArray;

//delete myArray[0];
//document.getElementById("square").innerHTML = myArray;
//myArray.splice(0,2);
//document.getElementById("square").innerHTML = myArray;

//myArray.splice(1,0 ,"Ant-Man");
//document.getElementById("square").innerHTML = myArray;