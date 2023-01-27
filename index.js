const button = document.querySelector("button");
const bulb  =document.querySelector("div");
button.addEventListener("click", () => {
    bulb.classList.toggle("on")
});
console.log(button)
