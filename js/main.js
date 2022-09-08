var btn = document.getElementById("btn");
var text = document.getElementById("bodyColor");


btn.onclick = function func (){

	if (document.body.style.backgroundColor == "") {


			document.body.style.backgroundColor = "pink";
			text.innerHTML = "pink";
	}
	else if (document.body.style.backgroundColor == "pink") {
		document.body.style.backgroundColor = "gold";
			text.innerHTML = "gold";
	}
	else if (document.body.style.backgroundColor == "gold") {
		document.body.style.backgroundColor = "purple";
			text.innerHTML = "purple";
	}
	else if (document.body.style.backgroundColor == "purple") {
		document.body.style.backgroundColor = "orange";
			text.innerHTML = "orange";
	}
	else{
		document.body.style.backgroundColor = "";
		text.innerHTML = "white";

	}

	


}