const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const para = document.querySelector("p");

let DefaultSize = 25;

increase.addEventListener("click", () => {
  DefaultSize += 1;
  para.style.fontSize = `${DefaultSize}px`;
});

decrease.addEventListener("click", () => {
  DefaultSize -= 1;
  para.style.fontSize = `${DefaultSize}px`;
});
