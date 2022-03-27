const range = document.querySelector("input[type='range']")
range.addEventListener("input", () => {
    document.querySelector(":root").style.setProperty("--h", range.value)
})

for (let i = 0; i <= 360; i += 20) {

    document.querySelector("datalist").appendChild(new Option(i, i))
}