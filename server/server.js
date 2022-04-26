const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {

    const data = {
        username: req.query.username,
        email: req.query.email
    }
    res.json(data)
    // return res.send("Hello")
})
app.listen(PORT, () => console.log(`listening on port ${PORT}`))