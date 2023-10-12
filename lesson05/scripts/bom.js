// In your js file, declare three const variables that hold references to the input, button, and .list elements.
// Example
const input = document.querySelector("#favchap");
const button = document.querySelector("#mybutton");
const list = document.querySelector("#list");
// Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.
// Examples
button.addEventListener("click", () => {

  if (input.value == "") {
    input.focus();
    return;
  }

  let listitem = document.createElement("li");
  let deleteButton = document.createElement("button");
  listitem.textContent = input.value;
    console.log("working");
  

  deleteButton.textContent = "❌";
  listitem.appendChild(deleteButton);

  list.appendChild(listitem);

  deleteButton.addEventListener("click", () => {
    listitem.remove();
  });
  input.focus();

  input.value = "";
});
