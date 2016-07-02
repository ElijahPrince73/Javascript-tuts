document.getElementById("guess").onclick = function () {
	var gotIt=false;
	var guesses=1;
	while (gotIt==false) {

		var x = Math.random();

		x = 6 * x;

		x = Math.floor(x);

		if (document.getElementById("myNumber").value == x) {
			gotIt=true
		} else {
guesses++;
		}
	}

};