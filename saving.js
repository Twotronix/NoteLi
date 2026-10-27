const popup = document.querySelector("#popup")
popup.style.display = "none"
const prev = localStorage.getItem("text") || null
const y = document.querySelector("#responsey")
const n = document.querySelector("#responsen")
text.addEventListener("input", () => {
    localStorage.setItem("text", text.value)
})


if (prev != null) {
    popup.style.display = "block"
}
y.addEventListener("click", () => {
    text.textContent = prev
    popup.style.display = "none"
})
n.addEventListener("click", () => {
    popup.style.display = "none"
})