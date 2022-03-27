const range = document.querySelector("input[type='range']")
range.addEventListener("input", () => {
    document.querySelector(":root").style.setProperty("--h", range.value)
})