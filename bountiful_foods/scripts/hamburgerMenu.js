const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
// hambutton.addEventListener('click', () => {
// 	mainnav.classList.toggle('show');
// 	hambutton.classList.toggle('show');
// });
console.log("burger");

hambutton.addEventListener("click", () => {
  if (hambutton.textContent == "≡") {
    mainnav.classList.toggle("show");
    hambutton.textContent = "✖️";
  }
  else if (hambutton.textContent == "✖️") {
	mainnav.classList.toggle("show");
    hambutton.textContent = "≡";
  }
  else{
	console.log("Hamburger menu failed")
  }
});