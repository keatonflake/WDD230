const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

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