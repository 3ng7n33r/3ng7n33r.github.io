function scrollto(y) {
	let elmnt = document.getElementById(y);
	elmnt.scrollIntoView({ behavior: "smooth" });
}

function makevis(y, ...invisTable) {
	let elmnt = document.getElementById(y);
	elmnt.style.display = "table";

	invisTable.forEach((tableElmnt) => {
		let invisElmnt = document.getElementById(tableElmnt);
		invisElmnt.style.display = "none";
	});
}
