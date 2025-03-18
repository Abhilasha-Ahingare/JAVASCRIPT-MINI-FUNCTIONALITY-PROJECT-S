const textArea = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const textCopy = textArea.value;
  navigator.clipboard.writeText(textCopy);
  alert("copied the text:" + textCopy);
});
