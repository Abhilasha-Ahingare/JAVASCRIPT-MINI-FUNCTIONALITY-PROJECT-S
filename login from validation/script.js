
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    const password = document.getElementById("password");
    const email = document.getElementById("email");
    event.preventDefault();
    if (email.value && password.value) {
      alert("from was submit");
    } else {
      alert("please fil the form");
    }
  });

