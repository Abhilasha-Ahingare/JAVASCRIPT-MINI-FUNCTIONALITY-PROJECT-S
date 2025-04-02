const input = document.querySelector("input");
const values = document.querySelector("p");
const btn = document.querySelector("button");

let currentValue = 0;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  currentValue = Math.min(currentValue + 5, 100); // Increment by 5, max 100
  input.value = currentValue;
  values.textContent = currentValue;
});
