const topbutton = document.querySelector(".top-button");

topbutton.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".card").style.backgroundColor = "white";
  document.querySelector(".card").style.color = "black";
});
