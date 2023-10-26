const page_visit_element = document.querySelector("#page-visits");
let visitCount = Number(window.localStorage.getItem("page_visit_count")) || 0;

if (visitCount == 0) {
  page_visit_element.textContent = "Welcome first time visitor!";
} else {
  page_visit_element.textContent = "Page visits: " + visitCount;
}

visitCount++;

localStorage.setItem("page_visit_count", visitCount);
