function darkMode() {
	document.getElementById("body").setAttribute("class", "body-dark")
	document.getElementById("csimg").setAttribute("src", "img/coming-soon-dark.png")
	document.getElementById("copyimg").setAttribute("src", "img/copyright-small-dark.png")
	document.getElementById("toggle").setAttribute("class", "lightmode")
	document.getElementById("toggle").setAttribute("title", "Light Mode");
	document.getElementById("toggle").setAttribute("onclick", "lightMode()");
}

function lightMode() {
	document.getElementById("body").setAttribute("class", "body")
	document.getElementById("csimg").setAttribute("src", "img/coming-soon.png")
	document.getElementById("copyimg").setAttribute("src", "img/copyright-small.png")
	document.getElementById("toggle").setAttribute("class", "darkmode")
	document.getElementById("toggle").setAttribute("title", "Dark Mode");
	document.getElementById("toggle").setAttribute("onclick", "darkMode()");
}