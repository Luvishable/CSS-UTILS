const buttons = document.querySelectorAll(".icon");
const items = document.querySelectorAll(".item");
console.log(buttons);

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    items[index].classList.toggle("open");
  });
});
