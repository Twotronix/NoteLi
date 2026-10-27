const popup = document.querySelector("#popupSave")
const prev = localStorage.getItem("text") || null
const y = document.querySelector("#responsey")
const n = document.querySelector("#responsen")
const draft = document.querySelector("#draft")

popup.style.display = "none"
text.addEventListener("input", () => {
    localStorage.setItem("text", text.value)
})

draft.addEventListener("click", () => {
    localStorage.setItem("text", text.value)
    draft.textContent = "Saved!"
    window.setTimeout(() => {
        draft.textContent = "Save Draft"
    }, 1000)
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