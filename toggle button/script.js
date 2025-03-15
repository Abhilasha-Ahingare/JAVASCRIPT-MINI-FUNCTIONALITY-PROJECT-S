const toggleBtn = document.querySelector(".toggle-btn");
const content = document.querySelector(".content");

toggleBtn.addEventListener("click", () => {
  content.classList.toggle("show")
});
