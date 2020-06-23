let el = document.getElementsByTagName("button")[0];
el.addEventListener("mouseenter", changecolor);
el.addEventListener("mouseleave", returncolor);
function changecolor (e) {
	e.target.removeAttribute("class");
	e.target.setAttribute("class", "btn btn-transparent border-white");

}
function returncolor (e) {
	e.target.removeAttribute("class");
	e.target.setAttribute("class", "btn btn-success border-white");
}