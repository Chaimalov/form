const form = document.forms[0]

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const username = document.querySelector("#username").value
    const email = document.querySelector("#email").value

    axios.get('http://localhost:8000/', {
        params: {
            username,
            email
        }
    })
        .then(({ data }) => {
            form.classList.add("hide")
            form.addEventListener("animationend", () => {
                const card = document.createElement("div")
                document.body.innerHTML = ""
                card.classList.add("card")
                card.innerHTML = `
                <h2>Welcome ${data.username}!</h2>
                <h4>${data.email}</h4>
                <h1>👋</h1>
                `
                document.body.append(card)
                card.classList.add("show")
            })
        })
        .catch((error) => {
            console.error(error);
        })
})

