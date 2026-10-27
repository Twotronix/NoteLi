const reset = document.querySelector("#reset")
const text = document.querySelector("#text")
const copy = document.querySelector("#copy")
const download = document.querySelector("#download")
const nameField = document.querySelector("#name-field")

function getText() {
    return text.value
}

reset.addEventListener("click", () => {
    text.value = ""
})


copy.addEventListener("click", () => {
    const copyable = getText()
    navigator.clipboard.writeText(copyable)
    copy.textContent = "Copied!"
    window.setTimeout(() => {
        copy.textContent = "Copy"
    }, 1000)
})

download.addEventListener("click", () => {
    const txt = getText()
    const blob = new Blob([txt], {type:"text/plain"})
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    let fn = "notes.txt"
    if (nameField.value != "") {
        fn = `${nameField.value}.txt`
    }

    a.href = url
    a.download = fn
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
})

