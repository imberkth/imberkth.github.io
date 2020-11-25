function toggleMode() {
	document.getElementById("toggle").setAttribute("title", "Light Mode");
	var element1 = document.getElementById("body");
	element1.classList.toggle("body-dark");
	var element2 = document.getElementById("csimg");
	element2.classList.toggle("csimg-dark");
	var element3 = document.getElementById("copyimg");
	element3.classList.toggle("copyimg-dark");
	var element4 = document.getElementById("toggle-img");
	element4.classList.toggle("lightmode");
}