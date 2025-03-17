const toggleBtn = document.querySelector(".toggle-password");
const password = document.querySelector("#password");
toggleBtn.addEventListener("click", () => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  toggleBtn.innerHTML =
    type === "password"
      ? `<i class="fa-solid fa-eye-slash"></i>`
      : `<i class="fa-solid fa-eye"></i>`;
});
